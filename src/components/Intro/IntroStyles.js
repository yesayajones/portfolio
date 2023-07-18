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

// Including the styling for the new left section

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

export const Content = styled.div`
	width: 545px;
	height: 526px;
	left: 52px;
	top: 12px;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 64px;
	z-index: 2;
`;

export const LeftContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 48px;
`;

export const Title = styled.span`
	color: '#141313';
	font-size: 70px;
	font-family: 'IBM Plex Sans';
	font-weight: 400;
	text-transform: uppercase;
	line-height: 90px;
	word-wrap: break-word;
`;

export const Name = styled.span`
	color: '#141313';
	font-size: 102px;
	font-family: 'IBM Plex Sans';
	font-weight: 500;
	text-transform: uppercase;
	line-height: 90px;
	word-wrap: break-word;
`;

export const Jacob = styled.span`
	color: '#141313';
	font-size: 102px;
	font-family: 'IBM Plex Sans';
	font-weight: 700;
	text-transform: uppercase;
	line-height: 90px;
	word-wrap: break-word;
`;

export const RightContent = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 12px;
`;

export const Icon = styled.div`
	width: 32px;
	height: 32px;
	position: relative;
`;

export const IconBackground = styled.div`
	width: 32px;
	height: 32px;
	left: 0;
	top: 0;
	position: absolute;
	background: 'rgba(20, 19, 19, 0.05)';
	border-radius: 9999px;
`;

export const IconImage = styled.div`
	width: 20.65px;
	height: 20.65px;
	left: 6.19px;
	top: 6.19px;
	position: absolute;
`;

export const IconImageGradient = styled.div`
	width: 17.2px;
	height: 7.74px;
	left: 6.98px;
	top: 1.07px;
	position: absolute;
	transform: rotate(45deg);
	transform-origin: 0 0;
	background: '#141313';
`;

export const IconImageSolid = styled.div`
	width: 17.2px;
	height: 13.76px;
	left: 1.72px;
	top: 3.44px;
	position: absolute;
	background: '#141313';
`;

export const Text = styled.div`
	color: '#141313';
	font-size: 32px;
	font-family: 'IBM Plex Sans';
	font-style: italic;
	font-weight: 700;
	line-height: 32px;
	word-wrap: break-word;
`;

export const Buttonn = styled.div`
	align-self: stretch;
	height: 56px;
	padding-left: 40px;
	padding-right: 40px;
	padding-top: 18px;
	padding-bottom: 18px;
	background: '#141313';
	justify-content: center;
	align-items: center;
	gap: 8px;
	display: flex;
`;

export const ButtonText = styled.div`
	color: '#FFFFFF';
	font-size: 16px;
	font-family: 'IBM Plex Sans';
	font-weight: 500;
	text-align: center;
	text-transform: uppercase;
	line-height: 16px;
`;

export const ButtonIcon = styled.div`
	width: 32px;
	height: 32px;
	position: relative;
`;
