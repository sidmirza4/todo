import { createContext, useContext, useEffect, useState } from 'react';
import uniqid from 'uniqid';

import { Todo } from '../types/todo';

type FilterType = 'all' | 'active' | 'completed';

interface ITodosContext {
	filter: FilterType;
	setFilter: (filter: FilterType) => void;
	todos: Todo[];
	todosToShow: Todo[];
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
	filter: 'all',
	setFilter: () => {},
	todos: [],
	todosToShow: [],
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
	const [todosToShow, setTodosToShow] = useState<Todo[]>([]);
	const [filter, setFilter] = useState<FilterType>('all');

	useEffect(() => {
		// set todos to show according to the filter
		if (filter === 'all') {
			setTodosToShow(todos);
		} else if (filter === 'active') {
			setTodosToShow(todos.filter(todo => !todo.completed));
		} else if (filter === 'completed') {
			setTodosToShow(todos.filter(todo => todo.completed));
		}
	}, [filter, todos]);

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
				filter,
				setFilter,
				todos,
				todosToShow,
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
