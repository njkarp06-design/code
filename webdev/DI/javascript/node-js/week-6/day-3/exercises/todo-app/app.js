// Exercise 4 - app.js
// importing and using the TodoList class

import { TodoList } from "./todo.js";

const myList = new TodoList();

// adding some tasks
myList.addTask("Buy groceries");
myList.addTask("Do homework");
myList.addTask("Go for a run");
myList.addTask("Read a book");

// marking a couple as complete
myList.markComplete("Buy groceries");
myList.markComplete("Go for a run");

// list everything to see the current state
myList.listTasks();
