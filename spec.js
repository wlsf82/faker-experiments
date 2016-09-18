"use strict";

const faker          = require('faker');
const CreateBlogPost = require('./page-objects/create-blog-post.pageObject.js');


describe('Choko - Create account', () => {
  xit('password not match', () => {
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
  // instantiating a new instance of CreateBlogPost
  const createBlogPost = new CreateBlogPost();

  // defining references to faker and exposing those throughout the "Choko - Blog" describe block
  const ramdonName = faker.lorem.word();
  const randomTitle = faker.random.words();
  // creating a reference for the lorem namespace
  const randomText = faker.lorem;

  xit('try to create blog post without permission', () => {
    browser.get('create/blog');

    createBlogPost.name.sendKeys(ramdonName);
    createBlogPost.title.sendKeys(randomTitle);
    createBlogPost.body.sendKeys(randomText);
    createBlogPost.save.click();

    expect(element(by.repeater('error in errors')).isDisplayed()).toBe(true);
    expect(element.all(by.repeater('error in errors')).getText()).toContain('You don\'t have permission to access this page.');
  });

  it('Create blog post without permission, passing 4 new lines and 6 paragraphs in the body', () => {
    browser.get('create/blog');

    createBlogPost.name.sendKeys(ramdonName);

    // setting Blog Post title action is skipped, or not performed,
    // added a promise to fix the behavior around this
    createBlogPost.title.click().then(
      (title) => {
        createBlogPost.title.sendKeys(randomTitle);
      }
    );

    // calling the lines() method of lorem namespace and passing 4 as arguments,
    // resulting in creating new 4 random lines in the body separated by '\n'
    createBlogPost.body.sendKeys(randomText.lines(4));

    // after executing the above function, now the paragraphs() method of lorem namespace
    // is executed, which calls the paragraphs() method,
    // passing 6 as an argument resulting in creating 6 new paragraphs
    // and the string, containing a space, will separate the paragraphs with a space
    createBlogPost.body.sendKeys(randomText.paragraphs(6, ' '));
    createBlogPost.save.click();

    expect(element(by.repeater('error in errors')).isDisplayed()).toBe(true);
    expect(element.all(by.repeater('error in errors')).getText()).toContain('You don\'t have permission to access this page.');
  });
});
