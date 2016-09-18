'use strict';

class CreateBlogPost {

  constructor() {
    this.name = element(by.id('element-type-blog-name'));
    this.title = element(by.id('element-type-blog-title'));
    this.body = element(by.className('note-editable'));
    this.save = element(by.id('element-type-blog-submit'));
  }

};

module.exports = CreateBlogPost;
