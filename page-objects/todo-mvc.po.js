'use strict';

class TodoMvc {

  constructor() {
    this.newTodoField = element(by.model('newTodo'));
    this.todoList = element(by.id('todo-list'));
    this.toggleAll = element(by.id('toggle-all'));
    this.clearCompleted = element(by.id('clear-completed'));
  }

  addItemOnList(item) {
    this.newTodoField.sendKeys(item);
    this.newTodoField.sendKeys(protractor.Key.ENTER);
  }

  visit() {
    browser.get('http://todomvc.com/examples/angularjs/#/');
  }

};

module.exports = TodoMvc;
