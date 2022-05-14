import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../context/AppContext';
import bgDesktopDark from '../images/bg-desktop-dark.jpg';
import bgDesktopLight from '../images/bg-desktop-light.jpg';

const HeaderContainer = styled.header<{}>`
	transition: 0.2s linear;
	height: 35vh;
	width: 100vw;
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	z-index: -1;
`;

const Header: React.FC<{}> = () => {
	const appCtx = useAppContext();

	return (
		<HeaderContainer>
			<Image
				src={appCtx.isDarkTheme ? bgDesktopDark : bgDesktopLight}
				alt='bg'
			/>
		</HeaderContainer>
	);
};

export default Header;
