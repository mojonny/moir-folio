import styled from 'styled-components';

const ExperienceStyles = styled.div`
	height: fit-content;
	/* width: 100%; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	border: 2px solid #f7fed4;
	border-radius: 3rem;
	margin: 1rem;

	&:hover h1 {
		color: red;
	}
`;

export default function Experience() {
	return (
		<ExperienceStyles>
			<div>
				<h1
					style={{
						textShadow: '5px 5px black',
						padding: '1rem',
						textAlign: 'center',
					}}
				>
					Expertise
				</h1>
				<h4>Web Development</h4>
				<ul>
					<li>
						Knowledgeable in React.js, Redux, Next.js, Tailwind, Bootstrap,
						Styled Components, Material UI, and Ant Design
					</li>
					<li>
						Understanding of Agile development methodologies and CI/CD pipelines{' '}
					</li>
					<li>
						Experimental experience with Node.js, Express, MongoDB, Firebase,
						Apollo Client, and GraphQL for a full-stack{' '}
					</li>

					<li>
						Deployment using Netlify, Vercel, AWS, Render, and applying custom
						domains
					</li>
				</ul>

				<h4>UI/UX Design</h4>
				<ul>
					<li>
						Familiar with UI/UX design using Figma and Adobe XD for high and
						low-fidelity prototypes
					</li>
				</ul>

				<h1
					style={{
						textShadow: '5px 5px black',
						padding: '1rem',
						textAlign: 'center',
					}}
				>
					Education
				</h1>

				<ul>
					<li>Front End Developer Certificate, Launchpad by Vog (2023)</li>
					<li>Google UI/UX Design Professional Certificate, Coursera (2022)</li>
					<li>B.Sc. Civil Engineering University of Alberta (2013)</li>
					<li>B.Ed. Mathematics University of Calgary (2019)</li>
				</ul>
			</div>
		</ExperienceStyles>
	);
}
