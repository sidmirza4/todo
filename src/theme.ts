import { createGlobalStyle } from 'styled-components';

interface MyTheme {
	body: string;
	text: string;
}

type Props = {
	theme: MyTheme;
};

export const GlobalStyles = createGlobalStyle<Props>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme = {
	body: 'var(--very-light-gray)',
	text: 'var(--primary)',
};

export const darkTheme = {
	body: 'var(--very-dark-blue)',
	text: 'var(--very-light-gray)',
};
