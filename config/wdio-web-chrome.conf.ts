import { config } from './wdio-shared.conf';

const baseUrl = 'https://book-information-web.vercel.app/';

config.services = ['chromedriver'];
config.capabilities = [
  {
    browserName: 'chrome',
  }
]

config.before = async(_, __, browser): Promise<void> => {
  await browser.setWindowSize(1440, 1080);
}

config.beforeScenario = async(): Promise<void> => {
  await browser.url(baseUrl);
}

module.exports.config = config;
