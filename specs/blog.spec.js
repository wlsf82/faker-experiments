'use strict';

const faker = require('faker');
const CreateBlogPostPage = require('../page-objects/create-blog-post.po');
const MessagesPage = require('../page-objects/messages.po');

describe('Choko - Blog', () => {
  const createBlogPostPage = new CreateBlogPostPage();
  const messagesPage = new MessagesPage();

  let blogData = {
    name: faker.lorem.word(),
    title: faker.random.words(),
    text: faker.lorem.lines()
  };

  const youDontHavePermissionsMsg = 'You don\'t have permission to access this page.';

  beforeEach(() => {
    createBlogPostPage.visit();
  });

  it('try to create blog post without permission', () => {
    createBlogPostPage.createPost(blogData);

    expect(messagesPage.errorMessage.isDisplayed()).toBe(true);
    expect(messagesPage.errorMessages.getText()).toContain(youDontHavePermissionsMsg);
  });

  it('try to create blog post with big sentence without permission', () => {
    blogData.text = faker.lorem.sentence(99, 99);

    createBlogPostPage.createPost(blogData);

    expect(messagesPage.errorMessage.isDisplayed()).toBe(true);
    expect(messagesPage.errorMessages.getText()).toContain(youDontHavePermissionsMsg);
  });
});
