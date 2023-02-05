import { config } from './wdio-shared.conf';

config.services = ['chromedriver'];
config.capabilities = [
  {
    browserName: 'chrome',
  }
]

module.exports.config = config;
