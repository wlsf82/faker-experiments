'use strict';

class MessagesPage {

  constructor() {
    this.errorMessage = element(by.repeater('error in errors'));
    this.errorMessages = element.all(by.repeater('error in errors'));
  }

};

module.exports = MessagesPage;
