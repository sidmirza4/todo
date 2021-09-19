import styled from 'styled-components';

const Input = styled.input<{ isDarkTheme: boolean }>`
	& {
		width: 100%;
		padding: 2rem;
		border-radius: 5px;
		font-size: 1.8rem;
		font-family: inherit;
		color: ${props =>
			props.isDarkTheme ? 'var(--very-light-grey)' : 'var(--very-dark-blue)'};
		background-color: ${props =>
			props.isDarkTheme
				? 'var(--very-dark-desaturated-blue)'
				: 'var(--very-light-gray)'};
		border: none;
		outline: none;
		transition: all 0.1s ease-in;
	}

	&::placeholder {
		color: ${props =>
			props.isDarkTheme
				? 'var(--light-grayish-blue)'
				: 'var(--dark-grayish-blue)'};
	}
`;

export default Input;
