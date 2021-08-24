import React, { useState } from 'react';
import Header from './components/Header';

const App = () => {
	const [theme, setTheme] = useState('light');
	const isDarkTheme = theme === 'dark';

	const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

	return (
		<div className='App'>
			<Header />
		</div>
	);
};

export default App;
