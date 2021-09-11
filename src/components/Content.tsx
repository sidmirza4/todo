import styled from 'styled-components';

import { useAppContext } from '../context/AppContext';
import iconSun from '../images/icon-sun.svg';
import iconMoon from '../images/icon-moon.svg';
import Grid from './Grid';
import Heading from './Heading';
import Input from './Input';

const Content = () => {
	const appCtx = useAppContext();

	return (
		<ContentContainer>
			<Grid
				justifyContent='space-between'
				alignItems='center'
				style={{ marginBottom: '3rem' }}
			>
				<Heading>TODO</Heading>
				<div
					onClick={appCtx.toggleTheme}
					style={{ cursor: 'pointer' }}
					title={appCtx.isDarkTheme ? 'Light Theme' : 'Dark Theme'}
				>
					<img
						src={appCtx.isDarkTheme ? iconSun : iconMoon}
						alt='toggle_theme'
					/>
				</div>
			</Grid>

			<Input
				placeholder='Create a new todo....'
				isDarkTheme={appCtx.isDarkTheme}
			/>
		</ContentContainer>
	);
};

const ContentContainer = styled.section`
	position: absolute;
	height: 75vh;
	width: 50%;
	top: 15vh;
	left: 50%;
	transform: translateX(-50%);
`;

export default Content;
