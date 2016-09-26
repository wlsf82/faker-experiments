'use strict'

const faker = require('faker');

describe('CRUD Sample', () => {
  it('add new customer', () => {
    const name = faker.name.findName();
    const email = faker.internet.email();
    const address = faker.address.streetName() + ', ' + faker.random.number();
    const city = faker.address.city();
    const country = faker.address.country();

    browser.get('http://demos.angularcode.com/AngularCodeCustomerManagerApp/#/edit-customer/0');

    element(by.model('customer.customerName')).sendKeys(name);
    element(by.model('customer.email')).sendKeys(email);
    element(by.model('customer.address')).sendKeys(address);
    element(by.model('customer.city')).sendKeys(city);
    element(by.model('customer.country')).sendKeys(country);
    element(by.css('button[ng-click="saveCustomer(customer);"]')).click();

    expect(element.all(by.repeater('data in customers')).first().getText()).toContain(name);
  });
});
