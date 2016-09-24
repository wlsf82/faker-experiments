'use strict';

class TodoMvc {

  constructor() {
    this.newTodoField = element(by.model('newTodo'));
    this.todoList = element(by.id('todo-list'));
  }

  visit() {
    browser.get('http://todomvc.com/examples/angularjs/#/');
  }

};

module.exports = TodoMvc;
