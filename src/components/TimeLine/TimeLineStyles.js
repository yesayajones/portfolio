import styled, { keyframes } from 'tyled-components';

export const TimelineContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
`;

export const TimelineItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2rem;
`;

export const TimelineLine = styled.div`
	position: relative;
	width: 100%;
	height: 2px;
	background-color: #ccc;
	z-index: -1;
`;

export const TimelineBullet = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: #fff;
	box-shadow: 0 0 0 2px #ccc;
	z-index: 1;
`;

export const TimelineContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 1rem;
`;

export const TimelineTitle = styled.h3`
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
`;

export const TimelineSubtitle = styled.p`
	font-size: 1.2rem;
	margin-bottom: 1rem;
`;

export const TimelineText = styled.p`
	font-size: 1rem;
	line-height: 1.5;
	text-align: center;
`;

export const TimelineButton = styled.button`
	padding: 0.5rem 1rem;
	font-size: 1rem;
	font-weight: bold;
	color: #fff;
	background-color: #000;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: #fff;
		color: #000;
	}
`;

export const TimelineLineActive = keyframes`
  0% {
    transform: translateX(-50%) scaleX(0);
  }
  100% {
    transform: translateX(-50%) scaleX(1);
  }
`;

export const TimelineLineInactive = keyframes`
  0% {
    transform: translateX(-50%) scaleX(1);
  }
  100% {
    transform: translateX(-50%) scaleX(0);
  }
`;

export const TimelineLineActiveStyle = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	height: 2px;
	background-color: #000;
	transform-origin: center;
	animation: ${TimelineLineActive} 1s ease-in-out forwards;
`;

export const TimelineLineInactiveStyle = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	height: 2px;
	background-color: #ccc;
	transform-origin: center;
	animation: ${TimelineLineInactive} 1s ease-in-out forwards;
`;
