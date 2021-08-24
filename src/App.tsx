import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';

import Header from './components/Header';

const App = () => {
	const [theme, setTheme] = useState('light');
	const isDarkTheme = theme === 'dark';

	const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyles />
			<div className='App'>
				<Header />
				<button onClick={toggleTheme}>Toggle Theme</button>
			</div>
		</ThemeProvider>
	);
};

export default App;
