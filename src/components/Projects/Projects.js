import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';


import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from './ProjectsStyles';
import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section id='projects'>
		<SectionDivider />
		<SectionTitle>Projects</SectionTitle>
		<GridContainer>
			{projects.map(
				({ id, image, title, description, tags, source, visit }) => (
					<BlogCard key={id}>
						<Img src={image} />
						<TitleContent>
							<HeaderThree title={title} />
							<Hr />
						</TitleContent>
						<CardInfo>{description}</CardInfo>
						<div>
							<TagList>
								{tags}
							</TagList>
						</div>
						<UtilityList>
						<ExternalLinks href={visit}>
							<FaLink /> Live Preview
						</ExternalLinks>
						<ExternalLinks href={source}>
							<FaGithub /> View Code
						</ExternalLinks>
						</UtilityList>
					</BlogCard>
				)
			)}
		</GridContainer>
	</Section>
);

export default Projects;
