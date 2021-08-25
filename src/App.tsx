import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';

import Header from './components/Header';
import { useAppContext } from './context/AppContext';

const App = () => {
	const appCtx = useAppContext();
	const { isDarkTheme, toggleTheme } = appCtx;

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Header />
			<button onClick={toggleTheme}>Toggle Theme</button>
		</ThemeProvider>
	);
};

export default App;
