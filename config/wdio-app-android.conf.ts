import { getAppPath, getDeviceName } from "../src/helpers/argument-parser.helper";
import { artifactsDirName, createArtifactsDirectory, getSanitizedFileName } from "../src/helpers/test-artifacts.helper";
import { config } from "./wdio-shared.conf";

config.services = ['appium'];
config.capabilities = [
  {
    'appium:platformName': 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': getDeviceName(),
    'appium:app': getAppPath(),
  }
]

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
