'use strict';

const faker = require('faker');
const CreateAccountPage = require('./page-objects/create-account.po.js');
const CreateBlogPostPage = require('./page-objects/create-blog-post.po.js');
const MessagesPage = require('./page-objects/messages.po.js');

const messagesPage = new MessagesPage();

describe('Choko - Create account', () => {
  const creatAccountPage = new CreateAccountPage();

  let userData = {
    randomEmail: faker.internet.email(),
    randomName: faker.name.findName(),
    randomPassword: faker.internet.password(),
    randomPassword2: faker.internet.password()
  };

  it('password not match', () => {
    creatAccountPage.visit();

    creatAccountPage.createAccount(userData);

    expect(messagesPage.errorMessage.isDisplayed()).toBe(true);
    expect(messagesPage.errorMessage.getText()).toEqual('Passwords must match.');
  });

  it('password not match, using defaultEmail set to "choko.org"', () => {
    userData.randomEmail = faker.internet.email(userData.randomName, userData.randomName, 'choko.org');

    creatAccountPage.visit();

    creatAccountPage.createAccount(userData);

    expect(messagesPage.errorMessage.isDisplayed()).toBe(true);
    expect(messagesPage.errorMessage.getText()).toEqual('Passwords must match.');
  });
});

describe('Choko - Blog', () => {
  const createBlogPostPage = new CreateBlogPostPage();

  let blogData = {
    randomName: faker.lorem.word(),
    randomTitle: faker.random.words(),
    randomText: faker.lorem.lines()
  };

  it('try to create blog post without permission', () => {
    createBlogPostPage.visit();

    createBlogPostPage.createPost(blogData);

    expect(messagesPage.errorMessage.isDisplayed()).toBe(true);
    expect(messagesPage.errorMessages.getText()).toContain('You don\'t have permission to access this page.');
  });

  it('Create blog post without permission', () => {
    blogData.randomText = faker.lorem.sentence(99, 99);

    createBlogPostPage.visit();

    createBlogPostPage.createPost(blogData);

    expect(messagesPage.errorMessage.isDisplayed()).toBe(true);
    expect(messagesPage.errorMessages.getText()).toContain('You don\'t have permission to access this page.');
  });
});
