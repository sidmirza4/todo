import React from 'react';

import iconSun from '../images/icon-sun.svg';
import iconMoon from '../images/icon-moon.svg';
import { useAppContext } from '../context/AppContext';

const DarkmodeButton = () => {
	const appCtx = useAppContext();

	return (
		<div
			onClick={appCtx.toggleTheme}
			style={{ cursor: 'pointer' }}
			title={appCtx.isDarkTheme ? 'Light Theme' : 'Dark Theme'}
		>
			<img src={appCtx.isDarkTheme ? iconSun : iconMoon} alt='toggle_theme' />
		</div>
	);
};

export default DarkmodeButton;
