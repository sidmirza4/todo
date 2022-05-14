import uniqid from 'uniqid';
import { Todo } from '../types/todo';

export default class TodoList {
	private todos: Todo[];

	constructor(todos: Todo[] = []) {
		this.todos = todos;
	}

	addTodo(title: string): Todo {
		const todo = {
			id: uniqid(),
			title,
			completed: false,
		};
		this.todos.push(todo);
		return todo;
	}

	getTodos(): Todo[] {
		return this.todos;
	}

	toggleTodo(id: string): void {
		const todo = this.todos.find(todo => todo.id === id);
		if (todo) {
			todo.completed = !todo.completed;
		}
	}

	deleteTodo(id: string): void {
		this.todos = this.todos.filter(todo => todo.id !== id);
	}

	clearCompleted(): void {
		this.todos = this.todos.filter(todo => !todo.completed);
	}
}
