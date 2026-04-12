// Exercise 4 - todo.js
// TodoList class using ES6 module syntax

export class TodoList {
    constructor() {
        this.tasks = [];
    }

    // add a new task to the list
    addTask(taskName) {
        const task = { name: taskName, completed: false };
        this.tasks.push(task);
        console.log(`Added task: "${taskName}"`);
    }

    // mark a task as done
    markComplete(taskName) {
        const task = this.tasks.find(t => t.name === taskName);
        if (task) {
            task.completed = true;
            console.log(`Marked as complete: "${taskName}"`);
        } else {
            console.log(`Task not found: "${taskName}"`);
        }
    }

    // print all tasks
    listTasks() {
        console.log("\nAll tasks:");
        if (this.tasks.length === 0) {
            console.log("No tasks yet.");
            return;
        }
        this.tasks.forEach((task, i) => {
            const status = task.completed ? "Done" : "Pending";
            console.log(`${i + 1}. ${task.name} - ${status}`);
        });
    }
}
