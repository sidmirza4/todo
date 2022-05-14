import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';

const TextBtn: React.FC<{
	style?: object;
	onClick?: () => void;
	active?: boolean;
}> = ({ style, children, onClick, active }) => {
	const appCtx = useAppContext();

	return (
		<StyledBtn
			style={style}
			isDark={appCtx.isDarkTheme}
			onClick={onClick}
			active={active}
		>
			{children}
		</StyledBtn>
	);
};

const StyledBtn = styled.button<{ isDark: boolean; active?: boolean }>`
	& {
		border: none;
		outline: none;
		font-family: inherit;
		font-size: 1.6rem;
		color: ${props =>
			props.active ? 'var(--primary)' : 'var(--dark-grayish-blue)'};
		background-color: transparent;
		cursor: pointer;
		transition: all 0.1s ease-in;
	}

	&:hover {
		color: ${({ isDark }) =>
			isDark ? 'var(--very-light-gray)' : 'var(--primary)'};
	}
`;

export default TextBtn;
