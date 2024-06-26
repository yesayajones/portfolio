import React from 'react';
import styled from 'styled-components';
import ReactImage from 'react-image';
import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
// import Button from '../../styles/GlobalComponents/Button';
import {
	LeftSection,
	RightSection,
	Container,
	Title,
	Name,
	Button,
	Description,
} from './IntroStyles';
import { FaReact } from 'react-icons/fa';

const Intro = (props) => (
	<Section row nopadding>
		<LeftSection>
			<Container>
				<Title>Hi 👋,</Title>
				<Name>My name is</Name>
				<Description>Yesaya Jones</Description>
				<Title>I build things for web</Title>
				<Button>Hire Me</Button>
			</Container>
		</LeftSection>
		<RightSection>
			<div style={{ width: '100%', height: '100%', position: 'relative' }}>
				<div
					style={{
						width: 403.06,
						height: 81.17,
						left: 268.74,
						top: 678.04,
						position: 'absolute',
						transform: 'rotate(-29.96deg)',
						transformOrigin: '0 0',
						background:
							'linear-gradient(270deg, #FFB147 0%, #FF6C63 52%, #B86ADF 100%)',
					}}
				></div>
				<div
					style={{
						width: 452.01,
						height: 109.26,
						left: 0,
						top: 261.23,
						position: 'absolute',
						transform: 'rotate(-29.96deg)',
						transformOrigin: '0 0',
						background:
							'linear-gradient(270deg, #FFB147 0%, #FF6C63 52%, #B86ADF 100%)',
					}}
				></div>
				<img
					style={{
						width: 528.15,
						height: 721.29,
						left: 75.87,
						top: 0,
						position: 'absolute',
					}}
					src='/images/yesaya.png'
				/>
				<div
					style={{
						width: 576.99,
						height: 178.98,
						left: 70.49,
						top: 346.72,
						position: 'absolute',
						transform: 'rotate(-29.96deg)',
						transformOrigin: '0 0',
						background:
							'linear-gradient(270deg, #FF6C63 0%, rgba(255, 177, 71, 0.20) 52%)',
					}}
				></div>
				<div
					style={{
						width: 576.99,
						height: 207.08,
						left: 40.22,
						top: 570.74,
						position: 'absolute',
						transform: 'rotate(-29.96deg)',
						transformOrigin: '0 0',
						background:
							'linear-gradient(270deg, #B238EF 0%, rgba(255, 177, 71, 0.33) 100%)',
					}}
				></div>
			</div>
		</RightSection>
	</Section>
);

export default Intro;
