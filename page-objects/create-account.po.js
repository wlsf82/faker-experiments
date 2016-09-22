'use strict';

class CreateAccountPage {

  constructor() {
    this.emailField = element(by.id('element-create-account-email'));
    this.usernameField = element(by.id('element-create-account-username'));
    this.passwordField = element(by.id('element-create-account-password'));
    this.confirmPasswordField = element(by.id('element-create-account-password-confirm'));
    this.createAccountButton = element(by.id('element-create-account-submit'));
  }

  createAccount(userData) {
    this.emailField.sendKeys(userData.email);
    this.usernameField.sendKeys(userData.name);
    this.passwordField.sendKeys(userData.password);
    this.confirmPasswordField.sendKeys(userData.password2);
    this.createAccountButton.click();
  }

  visit(url) {
    browser.get('create-account');
  }

};

module.exports = CreateAccountPage;
