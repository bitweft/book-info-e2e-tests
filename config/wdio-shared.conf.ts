import { removeSync } from 'fs-extra';
import { generate } from 'multiple-cucumber-html-reporter';
import { getMaxInstances } from '../src/helpers/argument-parser.helper';
import { getFeaturesToRun } from '../src/helpers/features-selector.helper';

export const config: WebdriverIO.Config = {
  framework: 'cucumber',
  cucumberOpts: {
    require: ['tests/step-definitions/**/*.ts'],
    timeout: 60000,
  },
  specs: getFeaturesToRun(),
  runner: 'local',
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: 'tsconfig.json'
    }
  },
  maxInstances: getMaxInstances(),
  capabilities: {},
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  reporters: ['cucumberjs-json'],
  onPrepare: () => {
    removeSync('.tmp/');
  },
  onComplete: () => {
    generate({
      jsonDir: '.tmp/json',
      reportPath: '.tmp/report',
    })
  }
}
