import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { device } from '../../device';
import logo from '../../assets/logo.svg';
import git from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

const Nav = styled.div`
	top: 0;
	position: sticky;
	height: 5rem;
	width: 100%;
	padding: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 2rem;
	align-items: baseline;
	border: 2px solid #f7fed4;
	background-color: teal;
	border-radius: 1rem;
	z-index: 10;

	@media ${device.laptop} {
		max-width: 100%;
	}

	@media ${device.desktop} {
		max-width: 100%;
	}
`;

export default function Header() {
	return (
		<Nav>
			<img src={logo} alt="my-logo" style={{ height: '2.5rem' }} />
			<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
				<Link to="/">
					{'<'} Folio {'/>'}
				</Link>
				<Link to="/lab">
					{'<'} Lab {'/>'}
				</Link>
				<a href="https://github.com/mojonny">
					<img src={git} alt="git" style={{ height: '25px', width: '25px' }} />
				</a>
				<a href="https://www.linkedin.com/in/jonathanmoir/">
					<img
						src={linkedin}
						alt="linked"
						style={{ height: '30px', width: '30px' }}
					/>
				</a>
			</div>
		</Nav>
	);
}
