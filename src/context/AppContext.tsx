import { createContext, useContext, useState, useEffect } from 'react';

import TodoList from '../models/Todo';

interface IAppContext {
	theme: string;
	isDarkTheme: boolean;
	toggleTheme: () => void;
	todoList?: TodoList;
}

const AppContext = createContext<IAppContext>({
	theme: 'light',
	isDarkTheme: false,
	toggleTheme: () => {},
	todoList: undefined,
});

export const AppContextProvider: React.FC<{}> = props => {
	const [theme, setTheme] = useState('light');
	const [todoList, setTodoList] = useState(new TodoList());
	const isDarkTheme = theme === 'dark';
	const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

	useEffect(() => {
		const todos = localStorage.getItem('todos');
		if (todos) {
			setTodoList(new TodoList(JSON.parse(todos)));
			return;
		}

		const todoList = new TodoList();
		setTodoList(todoList);
	}, []);

	const value = {
		theme,
		isDarkTheme,
		toggleTheme,
		todoList,
	};

	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
