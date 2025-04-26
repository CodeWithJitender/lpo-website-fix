import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Service from "./containers/Service";
import ServiceDetails from "./containers/ServiceDetails";
import ContactUs from "./containers/ContactUs";
import NotFound from './containers/NotFound';

import { ArrowUpFilled } from "./components/Icons";

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import { routes } from "./utils/routesPath";

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
				<Route path={routes.home.href} element={<Home />} exact />
				<Route path={routes.about.href} element={<About />} exact />
				<Route path={routes.services.href} element={<Service />} exact />
				<Route path="/services/:id" element={<ServiceDetails />} exact />
				<Route path={routes["contact-us"].href} element={<ContactUs />} exact />
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
