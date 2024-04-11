import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
	Container,
	Div1,
	Div3,
	SocialIcons,
	Span,
} from './HeaderStyles';

const Header = () => (
	<Container>
		<Div1>
			<Link href='/' passHref legacyBehavior>
				<a
					style={{
						display: 'flex',
						alignItems: 'center',
						color: 'white',
						marginBottom: '20;',
					}}
				>
					<DiCssdeck color='#ff7067' size='3rem' /> <Span>Portfolio</Span>
				</a>
			</Link>
		</Div1>
		<Div3>
			<SocialIcons href='https://github.com'>
				<AiFillGithub color='#ff7067' size='3rem' />
			</SocialIcons>
			<SocialIcons href='https://linkedin.com'>
				<AiFillLinkedin color='#ff7067' size='3rem' />
			</SocialIcons>
			<SocialIcons href='https://instagram.com'>
				<AiFillInstagram color='#ff7067' size='3rem' />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
