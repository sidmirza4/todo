import { createContext, useContext, useState } from 'react';

const AppContext = createContext({
	theme: 'light',
	isDarkTheme: false,
	toggleTheme: () => {},
});

export const AppContextProvider: React.FC<{}> = props => {
	const [theme, setTheme] = useState('light');
	const isDarkTheme = theme === 'dark';
	const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

	const value = {
		theme,
		isDarkTheme,
		toggleTheme,
	};

	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
