import styels from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import Page404 from './pages/page404/Page404';
import MainPage from './pages/main/MainPage';

function App() {
	return (
		<div className={styels.appContainer}>
			<Routes>
				<Route path='/dz-helper/' element={<MainPage />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
		</div>
	);
}

export default App;
