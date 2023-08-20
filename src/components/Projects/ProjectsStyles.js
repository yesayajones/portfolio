import styled from 'styled-components';
import { projects } from '../../constants/constants';

export const Img = styled.img`
	width: 100%;
	height: 50%;
	object-fit: cover;
	overflow: hidden;
	border-radius: 15px;
	box-shadow: 10px 15px 30px #333;
`;

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	grid-template-rows: repeat(4, ${Math.sqrt(projects.length)});
	padding: 3rem 0;
	place-items: center;
	column-gap: 3rem;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		padding-bottom: 0;
	}
`;
export const BlogCard = styled.div`
	border-radius: 20px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	text-align: center;
	width: 100%;
	aspect-ratio: 3/4; /* Set the aspect ratio to 1:1 */
	overflow: hidden; /* Hide any overflow */
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;
export const TitleContent = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
`;

export const HeaderThree = styled.h3`
	font-weight: 500;
	letter-spacing: 2px;
	color: #9cc9e3;
	padding: 0.5rem 0;
	font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
	width: 50px;
	height: 3px;
	margin: 20px auto;
	border: 0;
	background: #d0bb57;
`;

export const Intro = styled.div`
	width: 170px;
	margin: 0 auto;
	color: #000000;
	font-family: 'Droid Serif', serif;
	font-size: 13px;
	font-style: italic;
	line-height: 18px;
`;

export const CardInfo = styled.p`
	width: 100%;
	padding: 0 50px;
	color: #000000;
	font-style: 2rem;
	line-height: 24px;
	text-align: justify;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
	}
`;

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-around;
	margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
	color: #000000;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	border-radius: 15px;
	transition: 0.5s;
	&:hover {
		background: #801414;
	}
`;

export const TagList = styled.ul`
	display: flex;
	justify-content: space-around;
	padding: 2rem;
`;
export const Tag = styled.li`
	color: #666666;
	font-size: 1.5rem;
`;
