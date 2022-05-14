import styled from 'styled-components';

import { useAppContext } from '../context/AppContext';
import { Todo } from '../types/todo';
import Grid from './Grid';
import Paragraph from './Paragraph';
import checkmark from '../images/checkmark.png';
import { useTodosContext } from '../context/TodosContext';

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
	const appCtx = useAppContext();
	const { toggleTodo } = useTodosContext();

	const onClick = () => {
		toggleTodo(todo.id);
	};

	return (
		<StyledItem
			isDark={appCtx.isDarkTheme}
			alignItems='center'
			onClick={onClick}
		>
			<Circle isDark={appCtx.isDarkTheme} completed={todo.completed} />
			<Paragraph
				style={{
					textDecoration: todo.completed ? 'line-through' : 'none',
					filter: todo.completed ? 'brightness(0.6)' : 'none',
				}}
			>
				{todo.title}
			</Paragraph>
		</StyledItem>
	);
};

const StyledItem = styled(Grid)<{ isDark: boolean }>`
	padding: 2rem;
	color: ${props =>
		props.isDark ? 'var(--light-grayish-blue)' : 'var(--very-dark-blue)'};

	border-bottom: 1px solid var(--very-light-grayish-blue);
	cursor: pointer;
`;

const Circle = styled.span<{ isDark: boolean; completed: boolean }>`
	display: inline-block;
	height: 24px;
	width: 24px;
	border-radius: 50%;
	margin-right: 2rem;
	background: ${props =>
		props.completed &&
		`url(${checkmark}),	linear-gradient(45deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))`};
	background-size: cover;
	border: ${props =>
		!props.completed && '1px solid var(--very-light-grayish-blue)'};
	transition: all 0.1s ease-in;
`;

export default TodoItem;
