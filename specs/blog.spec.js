'use strict';

const faker = require('faker');
const CreateBlogPostPage = require('../page-objects/create-blog-post.po.js');
const MessagesPage = require('../page-objects/messages.po.js');

describe('Choko - Blog', () => {
  const createBlogPostPage = new CreateBlogPostPage();
  const messagesPage = new MessagesPage();

  let blogData = {
    name: faker.lorem.word(),
    title: faker.random.words(),
    text: faker.lorem.lines()
  };

  it('try to create blog post without permission', () => {
    createBlogPostPage.visit();

    createBlogPostPage.createPost(blogData);

    expect(messagesPage.errorMessage.isDisplayed()).toBe(true);
    expect(messagesPage.errorMessages.getText()).toContain('You don\'t have permission to access this page.');
  });

  it('Create blog post without permission', () => {
    blogData.text = faker.lorem.sentence(99, 99);

    createBlogPostPage.visit();

    createBlogPostPage.createPost(blogData);

    expect(messagesPage.errorMessage.isDisplayed()).toBe(true);
    expect(messagesPage.errorMessages.getText()).toContain('You don\'t have permission to access this page.');
  });
});
