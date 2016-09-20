'use strict';

module.exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  directConnect: true,

  baseUrl: 'http://choko.org/',

  specs: ['spec.js'],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']}
  },

  onPrepare() {
    browser.driver.manage().window().maximize();
  }
};
