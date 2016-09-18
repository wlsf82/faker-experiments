"use strict";

module.exports.config = {
  directConnect: true,

  baseUrl: 'http://choko.org/',

  specs: ['spec.js'],

  capabilities: { 'browserName': 'chrome' },
  onPrepare() {
  	browser.driver.manage().window().maximize();
  }
};
