import React from 'react';
import styled from 'styled-components';
import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './IntroStyles';
import { FaReact } from 'react-icons/fa';
import profile from '../../assets/2.3.webp';

const Image = styled.img`
	max-width: 100%;
	height: auto;
`;

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To <br />
				My Personal Portfolio
			</SectionTitle>
			<SectionText>
				I am a front-end web developer with React experience based in Zimbabwe.
				I offer different front-end development services.
			</SectionText>
			<Button onClick={() => (window.location = 'https://google.com')}>
				Learn More
			</Button>
		</LeftSection>
		<RightSection>
			<FaReact size={100} color='#000' />
			<Image src={profile} />
		</RightSection>
	</Section>
);

export default Hero;
