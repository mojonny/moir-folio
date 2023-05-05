import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import Mktfy from './projects/MKTFY';
import TheSearch from './projects/TheSearch';

const ModalStyles = styled.div`
	position: fixed;
	left: 50%;
	top: 50%;
	width: 75vw;
	height: clamp(fit-content, 500px, 100%);
	transform: translate(-50%, -50%);
	background-color: #cccccc;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	box-shadow: 5px 5px black;
	padding: 2rem;
`;
const DarkBG = styled.div`
	background-color: rgba(0, 0, 0, 0.2);
	width: 100%;
	height: 100%;
	z-index: 0;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: fixed;
`;

export default function Modal({
	setShowModal,
	showMktfy,
	showTheSearch,
	setShowMktfy,
	setShowTheSearch,
}) {
	const handleClose = () => {
		if (showMktfy === true) {
			() => setShowMktfy(false);
		} else if (showTheSearch === true) {
			() => setShowTheSearch(false);
		}
		setShowModal(false);
	};

	return (
		<DarkBG onClick={() => handleClose(showMktfy, showTheSearch)}>
			<ModalStyles onClick={(e) => e.stopPropagation()}>
				<button onClick={handleClose}>x</button>
				{showMktfy === true && <Mktfy showMktfy={showMktfy} />}
				{showTheSearch === true && <TheSearch showTheSearch={showTheSearch} />}
			</ModalStyles>
		</DarkBG>
	);
}
Modal.propTypes = {
	setShowModal: PropTypes.any,
	setShowMktfy: PropTypes.any,
	setShowTheSearch: PropTypes.any,
	showMktfy: PropTypes.any,
	showTheSearch: PropTypes.any,
};
