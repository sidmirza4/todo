import { createContext, useContext, useEffect, useState } from 'react';
import uniqid from 'uniqid';

import { Todo } from '../types/todo';

interface ITodosContext {
	todos: Todo[];
	addTodo: (title: string) => void;
	removeTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
	clearCompleted: () => void;
	getCompletedTodos: () => Todo[];
	getUncompletedTodos: () => Todo[];
	getNumberOfCompletedTodos: () => number;
	getNumberOfUncompletedTodos: () => number;
	updateTodoOnLocalStorage: (todos: Todo[]) => void;
}

const TodosContext = createContext<ITodosContext>({
	todos: [],
	addTodo: () => {},
	removeTodo: () => {},
	toggleTodo: () => {},
	clearCompleted: () => {},
	getCompletedTodos: () => [],
	getUncompletedTodos: () => [],
	getNumberOfCompletedTodos: () => 0,
	getNumberOfUncompletedTodos: () => 0,
	updateTodoOnLocalStorage: () => {},
});

export const TodosContextProvider: React.FC<{}> = props => {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		const todos = localStorage.getItem('todos');
		if (todos) {
			setTodos(JSON.parse(todos));
		}
	}, []);

	const addTodo = (title: string) => {
		const newTodo: Todo = {
			id: uniqid(),
			title,
			completed: false,
		};

		setTodos([...todos, newTodo]);
		updateTodoOnLocalStorage([...todos, newTodo]);
	};

	const removeTodo = (id: string) => {
		setTodos(todos.filter(todo => todo.id !== id));
		updateTodoOnLocalStorage(todos);
	};

	const toggleTodo = (id: string) => {
		setTodos(
			todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);

		updateTodoOnLocalStorage(todos);
	};

	const clearCompleted = () => {
		setTodos(todos.filter(todo => !todo.completed));
		updateTodoOnLocalStorage(todos.filter(todo => !todo.completed));
	};

	const getCompletedTodos = () => todos.filter(todo => todo.completed);

	const getUncompletedTodos = () => todos.filter(todo => !todo.completed);

	const getNumberOfCompletedTodos = () => getCompletedTodos().length;

	const getNumberOfUncompletedTodos = () => getUncompletedTodos().length;

	const updateTodoOnLocalStorage = (todos: Todo[]) => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	return (
		<TodosContext.Provider
			value={{
				todos,
				addTodo,
				removeTodo,
				toggleTodo,
				clearCompleted,
				getCompletedTodos,
				getUncompletedTodos,
				getNumberOfCompletedTodos,
				getNumberOfUncompletedTodos,
				updateTodoOnLocalStorage,
			}}
		>
			{props.children}
		</TodosContext.Provider>
	);
};

export const useTodosContext = () => useContext(TodosContext);

export default TodosContext;
