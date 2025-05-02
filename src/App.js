import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

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

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const App = () => {
	const backToTopRef = useRef(null);

	const { pathname } = useLocation();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	};

	useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const btt = backToTopRef.current;
    if (!btt) return;

    // Initially hide the button (autoAlpha: 0 sets opacity:0 + visibility:hidden)
    gsap.set(btt, { autoAlpha: 0 });

    // Create ScrollTrigger that tracks the whole page (from top to bottom)
    ScrollTrigger.create({
      trigger: document.body,       // use the entire document as trigger
      start: "top top",             // when top of page meets top of viewport
      end: "bottom bottom",         // until bottom of page meets bottom of viewport
      onUpdate: (self) => {
        // If scrolled past 30% of the page, show the button; otherwise hide it
        if (self.progress > 0.3) {
          // Fade in the button
          gsap.to(btt, { autoAlpha: 1, duration: 0.3 });
        } else {
          // Fade out the button
          gsap.to(btt, { autoAlpha: 0, duration: 0.3 });
        }
      }
    });
  }, [pathname]);

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
			<div
				className={styles.backToTop}
				onClick={scrollToTop}
				ref={backToTopRef}
			>
				<ArrowUpFilled />
			</div>
		</>
  );
};

export default App;
