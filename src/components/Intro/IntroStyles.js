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
	width: 35%;
	height: 550px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 1;
`;

export const RightSection = styled.div`
	width: 65%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;
	z-index: 1;
	background-color: #fff;
`;

// Including the styling for the new left section

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	text-align: left;
	padding-right: 50px;
`;

export const Title = styled.span`
	color: black !important;
	font-size: 40px;
	font-family: 'Poppins';
	font-weight: 700;
	line-height: 70px;
	word-wrap: break-word;
	text-align: left;
`;

export const Name = styled.span`
	color: black !important;
	font-size: 40px;
	font-family: 'Poppins';
	font-weight: 700;
	line-height: 70px;
	word-wrap: break-word;
`;

export const Description = styled.span`
	color: #ff7067;
	font-size: 56px;
	font-family: 'Poppins';
	font-weight: 700;
	line-height: 70px;
	word-wrap: break-word;
`;

export const HireButton = styled.span`
	color: white !important;
	background-color: black !important;
	font-size: 20px;
	font-family: 'Poppins';
	font-weight: 300;
	border-radius: 10px;
	padding: 15px;
	width: 50%;
	margin-top: 20px;
`;
