import { defaultPort } from "../src/constants/default-ports";
import { getAppPath, getDevices, getMaxInstances } from "../src/helpers/argument-parser.helper";
import { getFeaturesToRun } from "../src/helpers/features-selector.helper";
import { artifactsDirName, createArtifactsDirectory, getSanitizedFileName } from "../src/helpers/test-artifacts.helper";
import { config } from "./wdio-shared.conf";

const maxInstances = getMaxInstances();
const devices = getDevices();

function getCapabilities(): object[] {
  const features = getFeaturesToRun();
  const totalFeatures = features.length;
  const featuresPerDevice = totalFeatures / maxInstances;

  return new Array(maxInstances).fill(0).map((_, index) => {
    const specs = features.slice(index * featuresPerDevice, featuresPerDevice * (index + 1));
    const portOffset = index * 2;

    return {
      'appium:platformName': 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:app': getAppPath(),
      'appium:mjpegServerPort': defaultPort.mjpegServer + portOffset,
      'appium:wdaLocalPort': defaultPort.wda + portOffset,
      'port': defaultPort.appium + portOffset,
      'appium:udid': devices[index],
      specs,
    };
  });
}

function getServices(): [string, object][] {
  return new Array(maxInstances).fill(0).map((_, index) => {
    const portOffset = index * 2;
    return ([
      'appium',
      {
        args: {
          port: defaultPort.appium + portOffset,
          bootstrapPort: defaultPort.bootstrap + portOffset,
        },
      },
    ]);
  });
}


config.services = getServices();
config.capabilities = getCapabilities();

config.beforeScenario = async (): Promise<void> => {
  await driver.startRecordingScreen({ videType: 'mpeg4' });
}

config.afterScenario = async ({ pickle }, { passed }): Promise<void> => {
  if (passed) {
    await driver.stopRecordingScreen();
    return;
  }

  createArtifactsDirectory();
  const sanitizedFileName = getSanitizedFileName(pickle.name);
  await driver.saveRecordingScreen(`${artifactsDirName}/${sanitizedFileName}.mp4`);
}

module.exports.config = config;
