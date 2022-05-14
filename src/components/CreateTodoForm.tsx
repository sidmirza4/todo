import { useState } from 'react';
import styled from 'styled-components';

import { useAppContext } from '../context/AppContext';
import { useTodosContext } from '../context/TodosContext';
import Input from './Input';

const CreateTodoForm = () => {
	const [value, setValue] = useState('');

	const appCtx = useAppContext();
	const { addTodo } = useTodosContext();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTodo(value);
		setValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<InputContainer>
				<Input
					placeholder='Create a new todo....'
					isDarkTheme={appCtx.isDarkTheme}
					onChange={e => setValue(e.target.value)}
					value={value}
					style={{ marginBottom: '2rem' }}
				/>
			</InputContainer>
		</form>
	);
};

const InputContainer = styled.div`
	position: relative;
`;

export default CreateTodoForm;
