//Import necessary components
import Head from 'next/head';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import { Stack } from '../components/Stack/Stack';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Intro from '../components/Intro/Intro';
//Imports the Layout and Section components
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

//Defines a function component  Home that returns a Layout component with several child components.
const Home = () => {
	return (
		<>
			<Head>
				<title>My Portfolio</title>
				<meta name='description' content='My portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<Intro />
				<Section grid>
					<Hero />
					<BgAnimation />
				</Section>
				<Projects />
				{/* <Stack /> */}
				<Technologies />
				<Timeline />
				<Acomplishments />
			</Layout>
		</>
	);
};

//exports the Home component
export default Home;
