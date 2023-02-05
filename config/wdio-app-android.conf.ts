import { getAppPath, getDeviceName } from "./test-config-parser";
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

module.exports.config = config;
