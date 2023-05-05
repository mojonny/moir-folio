import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Lab from './pages/lab/Lab';

import Header from './components/header/Header';

import { GlobalStyle } from './global.jsx';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/lab" element={<Lab />} />
			</Routes>

			<GlobalStyle />
		</>
	);
}

export default App;
