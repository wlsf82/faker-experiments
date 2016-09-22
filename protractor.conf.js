'use strict';

const SpecReporter = require('jasmine-spec-reporter');

module.exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  directConnect: true,

  baseUrl: 'http://choko.org/',

  specs: ['specs/*.spec.js'],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']}
  },

  onPrepare() {
    browser.driver.manage().window().maximize();

    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
  }
};
