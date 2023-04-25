import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/home/Home';
import Lab from './pages/lab/Lab';
import { device } from './device';
import { GlobalStyle } from './global.jsx';

import git from './assets/github.svg';
import linkedin from './assets/linkedin.svg';

const Nav = styled.div`
	top: 0;
	position: sticky;
	height: 5rem;
	/* width: 98vw; */
	padding: 1rem;
	display: flex;
	flex-direction: row;
	gap: 2rem;
	align-items: center;
	border: 2px solid #f7fed4;
	background-color: teal;
	border-radius: 1rem;

	@media ${device.laptop} {
		max-width: 100%;
	}

	@media ${device.desktop} {
		max-width: 100%;
	}
`;

function App() {
	return (
		<>
			<Nav>
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
			</Nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/lab" element={<Lab />} />
			</Routes>

			<GlobalStyle />
		</>
	);
}

export default App;
