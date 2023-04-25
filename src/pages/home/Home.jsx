import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { device } from '../../device';
import cobra from '../../assets/cobra.jpg';
import cat from '../../assets/cat.png';
import search from '../../assets/search.png';
import tictac from '../../assets/tictacjon.png';
import og from '../../assets/ogPort.png';
import mern from '../../assets/mern.png';
import git from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

const MainLayout = styled.div`
	height: 90vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Hero = styled.div`
	height: 100%;
	/* width: 100%; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 2rem;
	color: #f7fed4;
	text-shadow: 5px 5px teal;
	background-image: url(${cobra});
	border: 2px solid #f7fed4;
	border-radius: 3rem;
	margin: 1rem;
`;
const Projects = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	background-color: #f7fed4;
	color: teal;
	text-shadow: 5px 5px black;
	border-radius: 3rem;
	margin: 1rem;

	&:hover {
		color: red;
	}
`;
const Card = styled.div`
	height: 10rem;
	width: 10rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1rem;
	background-color: teal;
	color: #f7fed4;
	&:hover {
		color: red;
		transform: scale(1.2, 1.2);
		transition: 0.5s transform ease-in-out;
	}

	border-radius: 3rem;
	margin: 1rem;
`;
const Experience = styled.div`
	height: 100%;
	/* width: 100%; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	border: 2px solid #f7fed4;
	border-radius: 3rem;
	margin: 1rem;

	&:hover {
		color: red;
	}
`;

const Footer = styled.div`
	/* position: fixed; */
	height: 5rem;
	width: 100%;
	/* margin-top: 5rem; */
	padding: 1rem;
	display: flex;
	flex-direction: row;
	gap: 2rem;
	align-items: center;
	border: 2px solid #f7fed4;
	background-color: teal;
	border-radius: 1rem;
`;
export default function Home() {
	return (
		<MainLayout>
			<Hero>
				<h1>Jonny Moir</h1>
				<h3>Front End Developer</h3>
				<span>Design - Develop - Deploy</span>
			</Hero>

			<Projects>
				<h1>Projects</h1>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '2rem',
						border: '2px solid teal',
						borderRadius: '2rem',
						padding: '2rem',
						height: '100%',
						margin: '1rem',
					}}
				>
					{/* <button> {'<-'} </button> */}
					<Card>
						<h4>MKTFY</h4>
						<img
							src={cat}
							alt="mktfy"
							style={{
								objectFit: 'contain',
								height: '100%',
								width: '100%',
							}}
						/>
					</Card>
					<Card>
						<h4>The Search</h4>
						<img
							src={search}
							alt="mktfy"
							style={{
								objectFit: 'contain',
								height: '100%',
								width: '100%',
								borderRadius: '2rem',
							}}
						/>
					</Card>
					<Card>
						<h4>Tic Tac Jon</h4>
						<img
							src={tictac}
							alt="mktfy"
							style={{
								objectFit: 'contain',
								height: '100%',
								width: '100%',
							}}
						/>
					</Card>
					<Card>
						<h4>Mern</h4>
						<img
							src={mern}
							alt="mktfy"
							style={{
								objectFit: 'contain',
								height: '100%',
								width: '100%',
							}}
						/>
					</Card>
					<Card>
						<h4>OG Portfolio</h4>
						<img
							src={og}
							alt="mktfy"
							style={{
								objectFit: 'contain',
								height: '100%',
								width: '100%',
								borderRadius: '3rem',
							}}
						/>
					</Card>
					{/* <button> {'->'} </button> */}
				</div>
			</Projects>

			<Experience>
				<h1 style={{ textShadow: '5px 5px black' }}>Expertise</h1>
				<div>UI/UX Design</div>
				<div>Skills Education This site was made by me from scratch</div>
			</Experience>

			<Footer>
				<div>JM-Future of Web</div>
				<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
					<Link to="/">Folio</Link>
					<Link to="/lab">Lab</Link>
					<a href="https://github.com/mojonny">
						<img
							src={git}
							alt="git"
							style={{ height: '45px', width: '45px' }}
						/>
					</a>
					<a href="https://www.linkedin.com/in/jonathanmoir/">
						<img
							src={linkedin}
							alt="linked"
							style={{ height: '50px', width: '50px' }}
						/>
					</a>
				</div>
			</Footer>
		</MainLayout>
	);
}
