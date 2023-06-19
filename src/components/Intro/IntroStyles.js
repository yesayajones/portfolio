import styled from 'styled-components';

export const Section = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	position: relative;
	z-index: 0;
	${(props) => props.nopadding && 'padding: 0'};
`;

export const LeftSection = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;
	z-index: 1;
`;

export const RightSection = styled.div`
	flex: 3;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;
	z-index: 1;
	background-color: #fff;
`;
