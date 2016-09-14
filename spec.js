'use strict';

const faker = require('faker');

describe('Choko - Create account', () => {
  it('password not match', () => {
    const randomEmail = faker.internet.email();
    const randomName = faker.name.findName();
    const randomPass1 = faker.internet.password();
    const randomPass2 = faker.internet.password();

    browser.get('create-account');

    element(by.id('element-create-account-email')).sendKeys(randomEmail);
    element(by.id('element-create-account-username')).sendKeys(randomName);
    element(by.id('element-create-account-password')).sendKeys(randomPass1);
    element(by.id('element-create-account-password-confirm')).sendKeys(randomPass2);
    element(by.id('element-create-account-submit')).click();

    expect(element(by.repeater('error in errors')).isDisplayed()).toBe(true);
    expect(element(by.repeater('error in errors')).getText()).toEqual('Passwords must match.');
  });
});
