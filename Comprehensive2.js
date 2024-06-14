// Define a class for Task
class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }

    toString() {
        return [${this.completed ? 'X' : ' '}] ${this.description};
    }
}

// Define a class for TaskManager
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        let task = new Task(description);
        this.tasks.push(task);
        console.log(Task added: "${description}");
    }

    completeTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].complete();
            console.log(Task ${index + 1} marked as completed.);
        } else {
            console.log("Invalid task index.");
        }
    }

    listTasks() {
        console.log("Tasks:");
        this.tasks.forEach((task, index) => {
            console.log(${index + 1}. ${task.toString()});
        });
    }

    removeTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            let removedTask = this.tasks.splice(index, 1)[0];
            console.log(Task "${removedTask.description}" removed.);
        } else {
            console.log("Invalid task index.");
        }
    }
}

// Example usage of TaskManager class
let taskManager = new TaskManager();
taskManager.addTask("Complete JavaScript assignment");
taskManager.addTask("Buy groceries");
taskManager.listTasks();
/*
Output:
Task added: "Complete JavaScript assignment"
Task added: "Buy groceries"
Tasks:
1. [ ] Complete JavaScript assignment
2. [ ] Buy groceries
*/

taskManager.completeTask(0);
taskManager.listTasks();
/*
Output:
Task 1 marked as completed.
Tasks:
1. [X] Complete JavaScript assignment
2. [ ] Buy groceries
*/

taskManager.removeTask(1);
taskManager.listTasks();
/*
Output:
Task "Buy groceries" removed.
Tasks:
1. [X] Complete JavaScript assignment
*/

taskManager.completeTask(1); // Output: Invalid task index.
