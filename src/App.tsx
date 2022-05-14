import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, GlobalStyles } from './theme';
import Header from './components/Header';
import { useAppContext } from './context/AppContext';
import Content from './components/Content';

const App = () => {
	const appCtx = useAppContext();
	const { isDarkTheme } = appCtx;

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Header />
			<Content />
		</ThemeProvider>
	);
};

export default App;
