export const config: WebdriverIO.Config = {
  framework: 'cucumber',
  cucumberOpts: {
    require: ['tests/step-definitions/**/*.ts'],
    timeout: 60000,
  },
  specs: ['../tests/features/**/*.feature'],
  runner: 'local',
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: 'tsconfig.json'
    }
  },   
  maxInstances: 1,
  capabilities: undefined,
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  reporters: ['spec'],
}
