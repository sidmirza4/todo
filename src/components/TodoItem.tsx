import styled from 'styled-components';

import { useAppContext } from '../context/AppContext';
import Grid from './Grid';
import Paragraph from './Paragraph';

const TodoItem: React.FC<{}> = ({ children }) => {
	const appCtx = useAppContext();

	return (
		<StyledItem isDark={appCtx.isDarkTheme} alignItems='center'>
			<Circle isDark={appCtx.isDarkTheme} />
			<Paragraph>{children}</Paragraph>
		</StyledItem>
	);
};

const StyledItem = styled(Grid)<{ isDark: boolean }>`
	padding: 2rem;
	color: ${props =>
		props.isDark ? 'var(--light-grayish-blue)' : 'var(--very-dark-blue)'};

	border-bottom: 1px solid var(--very-light-grayish-blue);
`;

const Circle = styled.span<{ isDark: boolean }>`
	display: inline-block;
	height: 24px;
	width: 24px;
	border-radius: 50%;
	margin-right: 2rem;
	background-color: transparent;
	border: 1px solid var(--light-grayish-blue);
`;

export default TodoItem;
