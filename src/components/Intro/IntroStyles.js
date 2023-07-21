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
	padding: 50px 50px 0 0;
	position: relative;
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

//Button styling
export const Button = styled.button`
	background-color: #b86adf;
	border: none;
	border-radius: 30px;
	width: 50%;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 20px;
	margin: 15% 2px 4px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: #3e8e41;
	}
`;
