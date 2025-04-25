import { Task } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';

let tasks: Task[] = [];

export class TaskService {
    getAll(): Task[] {
        return tasks;
    }

    getById(id: string): Task | undefined {
        return tasks.find(task => task.id === id);
    }

    create(description: string): Task {
        const now = new Date().toISOString();
        const newTask: Task = {
            id: uuidv4(),
            description,
            completed: false,
            createdAt: now,
            updatedAt: now
        };
        tasks.push(newTask);
        return newTask;
    }


    update(id: string, data: Partial<Omit<Task, 'id' | 'createdAt'>>): Task | null {
        const task = tasks.find(t => t.id === id);
        if (!task) return null;

        if (data.description !== undefined) task.description = data.description;
        if (data.completed !== undefined) task.completed = data.completed;
        task.updatedAt = new Date().toISOString();

        return task;
    }

    delete(id: string): boolean {
        const index = tasks.findIndex(t => t.id === id);
        if (index === -1) return false;
        tasks.splice(index, 1);
        return true;
    }

    clearAll() {
        tasks = [];
    }
}