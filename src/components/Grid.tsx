import styled from 'styled-components';

const Grid = styled.div<IGridProps>`
	display: flex;
	justify-content: ${props => props.justifyContent || 'flext-start'};
	align-items: ${props => props.alignItems || 'stretch'};
`;

interface IGridProps {
	justifyContent?:
		| 'space-between'
		| 'space-around'
		| 'flex-start'
		| 'flex-end'
		| 'center';

	alignItems?: 'flex-start' | 'flex-end' | 'stretch' | 'center';
}

export default Grid;
