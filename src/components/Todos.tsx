import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';
import { useTodosContext } from '../context/TodosContext';
import TodoItem from './TodoItem';

const Todos = () => {
	const appCtx = useAppContext();
	const { todos } = useTodosContext();

	return (
		<TodosContainer isDark={appCtx.isDarkTheme}>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</TodosContainer>
	);
};

const TodosContainer = styled.ul<{ isDark: boolean }>`
	& {
		background-color: ${props =>
			props.isDark
				? 'var(--very-dark-desaturated-blue)'
				: 'var(--very-light-gray)'};
		border-radius: 5px;
		overflow-y: scroll;
		height: 50vh;
		overflow-x: hidden;
		box-shadow: 0px -4px 8px inset rgba(0, 0, 0, 0.08);
		transition: all 0.1s ease-in;
	}

	&::-webkit-scrollbar {
		width: 0;
		background-color: transparent;
	}
`;

export default Todos;
