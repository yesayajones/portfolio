import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from './HeaderStyles';

const Header = () => (
	<Container>
		<Div1>
<<<<<<< HEAD
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
=======
			<DiCssdeck size='3rem' />
			<Span>Portfolio</Span>
>>>>>>> ad639f667e1ac26e7076ce849196cfb786a577b2
		</Div1>
		{/* <Div2>
			<li>
				<Link href='#projects' passHref legacyBehavior>
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#tech' passHref legacyBehavior>
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#about' passHref legacyBehavior>
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2> */}
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
