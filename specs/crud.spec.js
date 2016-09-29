'use strict'

const faker = require('faker');
const Crud = require('../page-objects/crud.po');

describe('CRUD Sample', () => {
  const crud = new Crud();

  it('add new customer', () => {
    const customerData = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetName() + ', ' + faker.random.number(),
      city: faker.address.city(),
      country: faker.address.country()
    };

    crud.visit();

    crud.nameField.sendKeys(customerData.name);
    crud.emailAddressField.sendKeys(customerData.email);
    crud.addressField.sendKeys(customerData.address);
    crud.cityField.sendKeys(customerData.city);
    crud.countryField.sendKeys(customerData.country);
    crud.addNewCustomerButton.click();

    expect(crud.firstCustomerInTheList.getText()).toContain(customerData.name);
  });
});
