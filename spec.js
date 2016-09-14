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

describe('Choko - Blog', () => {
  it('try to create blog post without permission', () => {
    const ramdonName = faker.lorem.word();
    const randomTitle = faker.lorem.words();
    const randomText = faker.lorem.sentences();

    browser.get('create/blog');

    element(by.id('element-type-blog-name')).sendKeys(ramdonName);
    element(by.id('element-type-blog-title')).sendKeys(randomTitle);
    element(by.className('note-editable')).sendKeys(randomText);
    element(by.id('element-type-blog-submit')).click();

    expect(element(by.repeater('error in errors')).isDisplayed()).toBe(true);
    expect(element.all(by.repeater('error in errors')).getText()).toContain('You don\'t have permission to access this page.');
  });
});
