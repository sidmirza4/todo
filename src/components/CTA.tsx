import styled from 'styled-components';

import { useAppContext } from '../context/AppContext';
import { useTodosContext } from '../context/TodosContext';
import Grid from './Grid';
import TextBtn from './TextBtn';

const CTA = () => {
	const appCtx = useAppContext();
	const { getNumberOfUncompletedTodos, clearCompleted, setFilter, filter } =
		useTodosContext();

	return (
		<CTAContainer
			alignItems='center'
			justifyContent='space-between'
			isDark={appCtx.isDarkTheme}
		>
			<TextBtn>{getNumberOfUncompletedTodos()} items left</TextBtn>
			<Grid>
				<TextBtn
					style={{
						marginRight: '1rem',
					}}
					onClick={() => setFilter('all')}
					active={filter === 'all'}
				>
					All
				</TextBtn>
				<TextBtn
					style={{
						marginRight: '1rem',
					}}
					onClick={() => setFilter('active')}
					active={filter === 'active'}
				>
					Active
				</TextBtn>
				<TextBtn
					onClick={() => setFilter('completed')}
					active={filter === 'completed'}
				>
					Completed
				</TextBtn>
			</Grid>
			<TextBtn onClick={clearCompleted}>Clear Completed</TextBtn>
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
	@media (max-width: 560px) {
		flex-direction: column;
		row-gap: 1rem;
	} ;
`;

export default CTA;
