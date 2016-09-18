'use strict';

const faker = require('faker');
const CreateBlogPost = require('./page-objects/create-blog-post.po.js');

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
  const createBlogPost = new CreateBlogPost();

  const randomName = faker.lorem.word();
  const randomTitle = faker.random.words();
  const randomText = faker.lorem;

  it('try to create blog post without permission', () => {
    browser.get('create/blog');

    createBlogPost.name.sendKeys(randomName);
    createBlogPost.title.sendKeys(randomTitle);
    createBlogPost.body.sendKeys(randomText);
    createBlogPost.save.click();

    expect(element(by.repeater('error in errors')).isDisplayed()).toBe(true);
    expect(element.all(by.repeater('error in errors')).getText()).toContain('You don\'t have permission to access this page.');
  });

  it('Create blog post without permission, passing 4 new lines and 6 paragraphs in the body', () => {
    browser.get('create/blog');

    createBlogPost.name.sendKeys(randomName);

    createBlogPost.title.click().then(
      (title) => { createBlogPost.title.sendKeys(randomTitle); }
    );

    createBlogPost.body.sendKeys(randomText.lines(4));
    createBlogPost.body.sendKeys(randomText.paragraphs(6, ' '));
    createBlogPost.save.click();

    expect(element(by.repeater('error in errors')).isDisplayed()).toBe(true);
    expect(element.all(by.repeater('error in errors')).getText()).toContain('You don\'t have permission to access this page.');
  });
});
