'use strict';

const faker = require('faker');
const CreateAccountPage = require('../page-objects/create-account.po');
const MessagesPage = require('../page-objects/messages.po');

describe('Choko - Create account', () => {
  const createAccountPage = new CreateAccountPage();
  const messagesPage = new MessagesPage();

  const pass = faker.internet.password();

  let userData = {
    email: faker.internet.email(),
    name: faker.name.findName(),
    password: pass,
    password2: pass
  };

  const passwordMustMatchMsg = 'Passwords must match.';

  beforeEach(() => {
    createAccountPage.visit();
  });

  it('password not match', () => {
    userData.password2 = faker.internet.password();

    createAccountPage.createAccount(userData);

    expect(messagesPage.errorMessage.isDisplayed()).toBe(true);
    expect(messagesPage.errorMessage.getText()).toEqual(passwordMustMatchMsg);
  });

  it('password not match, using defaultEmail set to \'choko.org\'', () => {
    userData.email = faker.internet.email(userData.randomName, userData.randomName, 'choko.org');
    userData.password2 = faker.internet.password();

    createAccountPage.createAccount(userData);

    expect(messagesPage.errorMessage.isDisplayed()).toBe(true);
    expect(messagesPage.errorMessage.getText()).toEqual(passwordMustMatchMsg);
  });

  it('invalid email', () => {
    userData.email = faker.hacker.verb();
    userData.password = pass;
    userData.password2 = pass;

    createAccountPage.createAccount(userData);
    expect(messagesPage.errorMessage.isDisplayed()).toBe(true);
    expect(messagesPage.errorMessage.getText()).toEqual('Email is required.');
  });
});
