'use strict';

const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const SpecReporter = require('jasmine-spec-reporter');

const reporter = new HtmlScreenshotReporter({
  dest: 'screenshots',
  filename: 'my-report.html'
});

module.exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  directConnect: true,

  baseUrl: 'http://choko.org/',

  specs: ['specs/*.spec.js'],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']}
  },

  beforeLaunch() {
    return new Promise((resolve) => {
      reporter.beforeLaunch(resolve);
    });
  },

  onPrepare() {
    browser.driver.manage().window().maximize();

    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));

    jasmine.getEnv().addReporter(reporter);
  },

  afterLaunch(exitCode) {
    return new Promise((resolve) => {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
};
