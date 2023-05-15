//Import necessary components
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
//Imports the Layout and Section components
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

//Defines a function component  Home that returns a Layout component with several child components.
const Home = () => {
	return (
		<Layout>
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>
			<Projects />
			<Technologies />
			<Timeline />
			<Acomplishments />
		</Layout>
	);
};

//exports the Home component
export default Home;
