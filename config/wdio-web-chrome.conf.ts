import * as video from 'wdio-video-reporter';
import { config } from './wdio-shared.conf';

const baseUrl = 'https://book-information-web.vercel.app/';

config.services = ['chromedriver'];
config.capabilities = [
  {
    browserName: 'chrome',
  }
]

config.reporters?.push(
  [
    video,
    {
      saveAllVideos: false,
      videoSlowdownMultiplier: 5,
      videoRenderTimeout: 5,
      outputDir: 'artifacts',
    },
  ]
);

config.before = async (_, __, browser): Promise<void> => {
  await browser.setWindowSize(1440, 1080);
}

config.beforeScenario = async (): Promise<void> => {
  await browser.url(baseUrl);
}

module.exports.config = config;
