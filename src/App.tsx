import React, { useState } from 'react';

const App = () => {
	const [theme, setTheme] = useState('light');
	const isDarkTheme = theme === 'dark';

	const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

	return <div className='App'></div>;
};

export default App;
