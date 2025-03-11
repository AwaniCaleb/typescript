// Todo App - Data Models

export interface TodoItem {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
    completedAt?: Date;
    priority: 'low' | 'medium' | 'high';
    tags?: string[];
}

export interface User {
    id: number;
    username: string;
    email: string;
    todos: TodoItem[];
}

// Type guard to check if an object is a TodoItem
export function isTodoItem(obj: any): obj is TodoItem {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        'id' in obj &&
        'title' in obj &&
        'completed' in obj &&
        'createdAt' in obj
    );
}