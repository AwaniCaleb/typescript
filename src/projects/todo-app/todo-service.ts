// Todo App - Service Layer

import { TodoItem, User } from './models';

export class TodoService {
    private users: Map<number, User> = new Map();
    private nextUserId = 1;
    private nextTodoId = 1;

    // User methods
    createUser(username: string, email: string): User {
        const newUser: User = {
            id: this.nextUserId++,
            username,
            email,
            todos: []
        };
        this.users.set(newUser.id, newUser);
        return newUser;
    }

    getUser(userId: number): User | undefined {
        return this.users.get(userId);
    }

    getAllUsers(): User[] {
        return Array.from(this.users.values());
    }

    // Todo methods
    addTodo(userId: number, title: string, description?: string, priority: 'low' | 'medium' | 'high' = 'medium'): TodoItem | null {
        const user = this.users.get(userId);
        if (!user) return null;

        const newTodo: TodoItem = {
            id: this.nextTodoId++,
            title,
            description,
            completed: false,
            createdAt: new Date(),
            priority
        };

        user.todos.push(newTodo);
        return newTodo;
    }

    getTodos(userId: number): TodoItem[] {
        const user = this.users.get(userId);
        return user ? user.todos : [];
    }

    completeTodo(userId: number, todoId: number): boolean {
        const user = this.users.get(userId);
        if (!user) return false;

        const todo = user.todos.find(t => t.id === todoId);
        if (!todo) return false;

        todo.completed = true;
        todo.completedAt = new Date();
        return true;
    }

    deleteTodo(userId: number, todoId: number): boolean {
        const user = this.users.get(userId);
        if (!user) return false;

        const initialLength = user.todos.length;
        user.todos = user.todos.filter(t => t.id !== todoId);
        return user.todos.length !== initialLength;
    }

    // Utility methods
    getCompletedTodos(userId: number): TodoItem[] {
        return this.getTodos(userId).filter(todo => todo.completed);
    }

    getPendingTodos(userId: number): TodoItem[] {
        return this.getTodos(userId).filter(todo => !todo.completed);
    }

    getStatistics(userId: number): { total: number, completed: number, pending: number } {
        const todos = this.getTodos(userId);
        const completed = todos.filter(t => t.completed).length;

        return {
            total: todos.length,
            completed,
            pending: todos.length - completed
        };
    }
}