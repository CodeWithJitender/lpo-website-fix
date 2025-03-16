import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import NotFound from './containers/NotFound';

import Header from './components/common/Header';

import './styles/main.scss';

const App = () => {
  return (  
		<>
			<Header />  
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
  );
};

export default App;
