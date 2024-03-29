import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To <br />
				My Personal Portfolio
			</SectionTitle>
			<SectionText>
				I am a front-end web developer with React experience based in Zimbabwe.
				I offer differenct front-end development services and some back-end.
			</SectionText>
			<Button onClick={() => (window.location = 'https://google.com')}>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
