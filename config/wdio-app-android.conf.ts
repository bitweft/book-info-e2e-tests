import { getAppPath, getDeviceName } from "../src/helpers/argument-parser.helper";
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
