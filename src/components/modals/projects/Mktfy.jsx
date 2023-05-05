import { PropTypes } from 'prop-types';
import git from '../../../assets/github.svg';

export default function Mktfy() {
	return (
		<div>
			<h1>MKTFY</h1>
			<p>This was the main project from my Launchpad course.</p>
			<h3>Tech Used:</h3>
			<>
				<h4>Design:</h4>
				<ul>
					<li>React</li>
					<li>Auth0 - Authentication</li>
					<li>Amazon S3 - deployment</li>
					<li>Redux Toolkit - State Management</li>
				</ul>
			</>
			<>
				<h4>Develop:</h4>
				<ul>
					<li>React</li>
					<li>React-Router-Dom v6</li>
					<li>Auth0 - Authentication</li>
					<li>Amazon S3 - deployment</li>
					<li>Redux Toolkit - State Management</li>
				</ul>
			</>

			<>
				<h4>Deploy:</h4>
				<ul>
					<li>Marketing Site(Using Next.js)</li>
					<li>Vercel Site</li>
					<li>Amazon S3 - deployment</li>
				</ul>
			</>

			<div style={{ display: 'flex', gap: '1rem' }}>
				<a href="https://github.com/mojonny">
					CODE:
					<img
						src={git}
						alt="git"
						style={{
							height: '25px',
							width: '25px',
							backgroundColor: 'black',
						}}
					/>
				</a>

				<a href="https://github.com/mojonny">
					VERCEL:
					<img
						src={git}
						alt="git"
						style={{
							height: '25px',
							width: '25px',
							backgroundColor: 'black',
						}}
					/>
				</a>
				<a href="https://github.com/mojonny">
					AWS:
					<img
						src={git}
						alt="git"
						style={{
							height: '25px',
							width: '25px',
							backgroundColor: 'black',
						}}
					/>
				</a>
			</div>
		</div>
	);
}
Mktfy.propTypes = {
	setShowProj: PropTypes.any,
};
