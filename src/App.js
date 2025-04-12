import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Service from "./containers/Service";
import NotFound from './containers/NotFound';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import './styles/main.scss';

const App = () => {
	const { pathname } = useLocation();

	useEffect(() => {
    window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
  }, [pathname]);

  return (  
		<>
			<Header />  
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<Service />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
  );
};

export default App;
