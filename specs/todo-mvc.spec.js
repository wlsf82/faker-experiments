'use strict';

const faker = require('faker');
const TodoMvc = require('../page-objects/todo-mvc.po');

describe('TODO MVC', () => {
  const todoMvc = new TodoMvc();

  it('add item on TODO list', () => {
    const randomWord = faker.random.word();

    todoMvc.visit();

    todoMvc.newTodoField.sendKeys(randomWord);
    todoMvc.newTodoField.sendKeys(protractor.Key.ENTER);

    expect(todoMvc.todoList.getText()).toContain(randomWord);
  });
});
