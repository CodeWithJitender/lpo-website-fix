import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Service from "./containers/Service";
import ServiceDetails from "./containers/ServiceDetails";
import NotFound from './containers/NotFound';

import { ArrowUpFilled } from "./components/Icons";

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import * as styles from "./App.module.scss";

import './styles/main.scss';

const App = () => {
	const { pathname } = useLocation();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	};

	useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (  
		<>
			<Header />  
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="/about" element={<About />} exact />
				<Route path="/services" element={<Service />} exact />
				<Route path="/services/:id" element={<ServiceDetails />} exact />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
			<div className={styles.backToTop} onClick={scrollToTop}>
				<ArrowUpFilled />
			</div>
		</>
  );
};

export default App;
