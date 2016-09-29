'use strict';

class CrudPage {

  constructor() {
    this.nameField = element(by.model('customer.customerName'));
    this.emailAddressField = element(by.model('customer.email'));
    this.addressField = element(by.model('customer.address'));
    this.cityField = element(by.model('customer.city'));
    this.countryField = element(by.model('customer.country'));
    this.addNewCustomerButton = element(by.css('button[ng-click="saveCustomer(customer);"]'));

    this.firstCustomerInTheList = element.all(by.repeater('data in customers')).first();
  }

  visit() {
    browser.get('http://demos.angularcode.com/AngularCodeCustomerManagerApp/#/edit-customer/0');
  }

};

module.exports = CrudPage;
