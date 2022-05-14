import styled from 'styled-components';

import { useAppContext } from '../context/AppContext';

import Grid from './Grid';
import Heading from './Heading';
import Input from './Input';
import Todos from './Todos';
import CTA from './CTA';
import DarkmodeButton from './DarkmodeButton';

const Content = () => {
	const appCtx = useAppContext();

	return (
		<ContentContainer isDark={appCtx.isDarkTheme}>
			<Grid
				justifyContent='space-between'
				alignItems='center'
				style={{ marginBottom: '3rem' }}
			>
				<Heading>TODO</Heading>
				<DarkmodeButton />
			</Grid>

			<InputContainer>
				<Input
					placeholder='Create a new todo....'
					isDarkTheme={appCtx.isDarkTheme}
					style={{ marginBottom: '2rem' }}
				/>
			</InputContainer>

			<TodosCTAContainer isDark={appCtx.isDarkTheme}>
				<Todos />
				<CTA />
			</TodosCTAContainer>
		</ContentContainer>
	);
};

const TodosCTAContainer = styled.div<{ isDark: boolean }>`
	box-shadow: ${props =>
		`0px 20px 50px rgba(0, 0, 0, ${props.isDark ? 1 : 0.1})`};
	border-radius: 5px;
`;

const InputContainer = styled.div`
	position: relative;
`;

const ContentContainer = styled.section<{ isDark: boolean }>`
	position: absolute;
	height: 75vh;
	width: 50%;
	top: 15vh;
	left: 50%;
	transform: translateX(-50%);
`;

export default Content;
