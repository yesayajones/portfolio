import React from 'react';
import styled from 'styled-components';
import ReactImage from 'react-image';
import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './IntroStyles';
import { FaReact } from 'react-icons/fa';
// import profile from '/public/images/background.png';

// const Image = styled.img`
// 	max-width: 100%;
// 	height: auto;
// `;

const Intro = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hi I'm <br />
				Yesaya Jones
			</SectionTitle>
			<SectionText>
				I am a front-end web developer with React experience based in Zimbabwe.
				I offer different front-end development services.
			</SectionText>
			<Button onClick={() => (window.location = 'https://google.com')}>
				Hire Me
			</Button>
		</LeftSection>
		<RightSection>
			<FaReact size={100} color='#000' />
			{/* <ReactImage src={profile} /> */}
		</RightSection>
	</Section>
);

export default Intro;
