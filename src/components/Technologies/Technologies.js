import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
	<Section id='tech'>
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I have worked with many technologies in the web development world. Fron
			frontend to Design.
		</SectionText>
		<List>
			<ListItem>
				<DiReact color='white' size='3rem' />
				<ListContainer>
					<ListTitle>Front-end</ListTitle>
					<ListParagraph>
						Experience with <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase color='white' size='3rem' />
				<ListContainer>
					<ListTitle>Back-end</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node.js and Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiZend color='white' size='3rem' />
				<ListContainer>
					<ListTitle>UI/UX Design</ListTitle>
					<ListParagraph>
						Experience with <br />
						tools like Figma
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
