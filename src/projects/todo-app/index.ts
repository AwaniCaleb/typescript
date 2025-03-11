// Todo App - Demo

import { TodoService } from './todo-service';
import { User, TodoItem } from './models';

// Create a new TodoService instance
const todoService = new TodoService();

// Demo function
function runTodoDemo() {
    console.log("Todo App Demo");
    console.log("============");

    // Create users
    const user1 = todoService.createUser("awani", "awani@example.com");
    const user2 = todoService.createUser("jane", "jane@example.com");

    console.log("\nCreated Users:");
    console.log(todoService.getAllUsers());

    // Add todos for user1
    todoService.addTodo(user1.id, "Learn TypeScript basics", "Study types, interfaces, and functions", "high");
    todoService.addTodo(user1.id, "Build a simple project", "Apply TypeScript concepts in a real project", "medium");
    todoService.addTodo(user1.id, "Read TypeScript documentation", undefined, "low");

    // Add todos for user2
    todoService.addTodo(user2.id, "Create project structure", "Set up folders and configuration files", "high");
    todoService.addTodo(user2.id, "Install dependencies", "npm install required packages", "medium");

    // Display all todos
    console.log("\nUser 1 Todos:");
    console.log(todoService.getTodos(user1.id));

    console.log("\nUser 2 Todos:");
    console.log(todoService.getTodos(user2.id));

    // Mark some todos as completed
    todoService.completeTodo(user1.id, 1);
    todoService.completeTodo(user2.id, 4);

    // Get statistics
    console.log("\nUser 1 Statistics:");
    console.log(todoService.getStatistics(user1.id));

    console.log("\nUser 2 Statistics:");
    console.log(todoService.getStatistics(user2.id));

    // Get completed and pending todos
    console.log("\nUser 1 Completed Todos:");
    console.log(todoService.getCompletedTodos(user1.id));

    console.log("\nUser 1 Pending Todos:");
    console.log(todoService.getPendingTodos(user1.id));

    // Delete a todo
    console.log("\nDeleting a todo for User 1...");
    todoService.deleteTodo(user1.id, 3);

    console.log("\nUser 1 Todos after deletion:");
    console.log(todoService.getTodos(user1.id));
}

// Run the demo
runTodoDemo();