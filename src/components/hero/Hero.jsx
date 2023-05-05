import styled from 'styled-components';
import arret from '../../assets/arret.png';

const HeroStyles = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 3rem;
	color: #333333;
	text-shadow: 1px 3px #f7fed4;
	background: url(${arret});
	background-size: cover;
	background-position: 25% 35%;
	border: 2px solid #f7fed4;
	border-radius: 3rem;
	margin: 1rem;

	.box {
		padding: 1rem;
		border-radius: 10px;
		text-align: center;
		background-color: rgb(255 255 255 / 0.3);
		backdrop-filter: blur(1px);
	}
`;

export default function Hero() {
	return (
		<HeroStyles>
			<div className="box">
				<h1>Jonny Moir</h1>
				<h3>Front End Developer</h3>
				<span>Design - Develop - Deploy</span>
			</div>
		</HeroStyles>
	);
}
