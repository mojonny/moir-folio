import styled from 'styled-components';
// import { device } from '../../device';

import Hero from '../../components/hero/Hero';
import Farewell from '../../components/farewell/Farewell';
import Experience from '../../components/experience/Experience';
import Projects from '../../components/projects/Projects';
import Footer from '../../components/footer/Footer';

const MainLayout = styled.div`
	height: 90vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default function Home() {
	return (
		<MainLayout>
			<Hero />

			<Projects />

			<Experience />

			<Farewell />

			<Footer />
		</MainLayout>
	);
}
