import { useState } from 'react';
import styled from 'styled-components';

import Modal from '../modals/Modal';
import cat from '../../assets/cat.png';
import search from '../../assets/search.png';
import tictac from '../../assets/tictacjon.png';
import og from '../../assets/ogPort.png';
import mern from '../../assets/mern.png';

const ProjectsStyles = styled.div`
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
	padding: 2rem;
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

export default function Projects() {
	const [showModal, setShowModal] = useState(false);
	const [showMktfy, setShowMktfy] = useState(false);
	const [showTheSearch, setShowTheSearch] = useState(false);

	console.log(showMktfy);
	console.log(showTheSearch);

	return (
		<>
			<ProjectsStyles>
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
					<Card onClick={() => setShowModal(true) || setShowMktfy(true)}>
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
					<Card onClick={() => setShowModal(true) || setShowTheSearch(true)}>
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
			</ProjectsStyles>
			{showModal === true && (
				<Modal
					setShowModal={setShowModal}
					setShowMktfy={showMktfy}
					setShowTheSearch={showTheSearch}
					showMktfy={showMktfy}
					showTheSearch={showTheSearch}
				/>
			)}
		</>
	);
}
