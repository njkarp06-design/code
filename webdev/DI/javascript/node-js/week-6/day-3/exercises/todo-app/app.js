// Exercise 4 - app.js

const { TodoList } = require("./todo.js");

const myList = new TodoList();

myList.addTask("Buy groceries");
myList.addTask("Do homework");
myList.addTask("Go for a run");
myList.addTask("Read a book");

myList.markComplete("Buy groceries");
myList.markComplete("Go for a run");

myList.listTasks();
