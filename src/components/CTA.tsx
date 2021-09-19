import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';

import Grid from './Grid';
import TextBtn from './TextBtn';

const CTA = () => {
	const appCtx = useAppContext();

	return (
		<CTAContainer
			alignItems='center'
			justifyContent='space-between'
			isDark={appCtx.isDarkTheme}
		>
			<TextBtn>5 items left</TextBtn>
			<Grid>
				<TextBtn style={{ marginRight: '1rem' }}>All</TextBtn>
				<TextBtn style={{ marginRight: '1rem' }}>Active</TextBtn>
				<TextBtn>Completed</TextBtn>
			</Grid>
			<TextBtn>Clear Completed</TextBtn>
		</CTAContainer>
	);
};

const CTAContainer = styled(Grid)<{ isDark: boolean }>`
	padding: 2rem 3rem;
	box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.1);
	background-color: ${props =>
		props.isDark
			? 'var(--very-dark-desaturated-blue)'
			: 'var(--very-light-gray)'};
	transition: all 0.1s ease-in;
`;

export default CTA;
