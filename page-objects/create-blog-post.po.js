'use strict';

class CreateBlogPostPage {

  constructor() {
    this.nameField = element(by.id('element-type-blog-name'));
    this.titleField = element(by.id('element-type-blog-title'));
    this.bodyField = element(by.className('note-editable'));
    this.saveButton = element(by.id('element-type-blog-submit'));
  }

  createPost(blogData) {
    this.nameField.sendKeys(blogData.randomName);
    this.titleField.sendKeys(blogData.randomTitle);
    this.bodyField.sendKeys(blogData.randomText);
    this.saveButton.click();
  }

  visit() {
    browser.get('create/blog');
  }

};

module.exports = CreateBlogPostPage;
