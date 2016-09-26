'use strict';

const faker = require('faker');
const TodoMvc = require('../page-objects/todo-mvc.po');

describe('TODO MVC', () => {
  const todoMvc = new TodoMvc();

  beforeEach(() => {
    todoMvc.visit();
  })

  it('add item on TODO list', () => {
    const randomWord = faker.random.word();

    todoMvc.addItemOnList(randomWord);

    expect(todoMvc.todoList.getText()).toContain(randomWord);
  });

  it('complete TODO items and check that list is empty', () => {
      const randomWord = faker.random.word();

      todoMvc.addItemOnList(randomWord);
      todoMvc.toggleAll.click();
      todoMvc.clearCompleted.click();

      expect(todoMvc.todoList.isDisplayed()).not.toBe(true);
  });
});
