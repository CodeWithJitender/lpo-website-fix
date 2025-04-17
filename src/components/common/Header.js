import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { Grid2 as Grid, AppBar } from '@mui/material';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useDevice } from '@/context/DeviceContext';

import logo from "@/assets/images/logo.png";

import Menu from "./Menu";

import * as styles from "./Header.module.scss";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
	const { isMobile } = useDevice();
	const navBar = useRef(null);

	useEffect(() => {
		const showAnim = gsap.from(navBar.current, { 
			yPercent: -100,
			paused: true,
			duration: 0.65
		}).progress(1);
		
		ScrollTrigger.create({
			start: "top top",
			end: "max",
			markers: true,
			onUpdate: (self) => {
				self.direction === -1 ? showAnim.play() : showAnim.reverse()
			}
		});
	}, []);

	return (
		<AppBar position="fixed" ref={navBar}>
			<Grid container size={12} alignItems="center">
				<Grid
					size={{
						xs: 6,
						sm: 6,
						md: 2,
						lg: 2
					}}
				>
					<img src={logo} className={styles.logo} alt="GlocalLPO" />
				</Grid>
				{
					isMobile ? (
						<Grid
							size={{
								xs: 6,
								sm: 6,
								md: 0,
								lg: 0
							}}
							justifyContent="flex-end"
							container
						>
							<Menu />
						</Grid>
					) : (
						<>
							<Grid
								size={{
									xs: 0,
									sm: 0,
									md: 8,
									lg: 8
								}}
								sx={{
									alignSelf: "center",
								}}
							>
								<div className={styles.navBar}>
									<Link
										to="/"
										data-replace="Home"
										className={styles.headerLink}
									>
										<span>Home</span>
									</Link>
									<Link
										to="/about"
										data-replace="About Us"
										className={styles.headerLink}
									>
										<span>About Us</span>
									</Link>
									<Link
										to="/services"
										data-replace="services"
										className={styles.headerLink}
									>
										<span>services</span>
									</Link>
									<Link
										to="/our-process"
										data-replace="OUR PROCESS"
										className={styles.headerLink}
									>
										<span>OUR PROCESS</span>
									</Link>
									<Link
										to="/contact-us"
										data-replace="CONTACT US"
										className={styles.headerLink}
									>
										<span>CONTACT US</span>
									</Link>
									<Link
										to="/faq"
										data-replace="FAQ's"
										className={styles.headerLink}
									>
										<span>FAQ's</span>
									</Link>
								</div>
							</Grid>
							<Grid
								size={{
									xs: 0,
									sm: 0,
									md: 2,
									lg: 2
								}}
								sx={{ textAlign: "right", alignSelf: "center" }}
							>
								{/* <div className={styles.address}>3422 Old Capitol Trail, Wilmington DE 19808, USA</div> */}
								<div className={styles.phone}>
									<a href="tel:+1 732 344 4260">+1 (732) 344 4260</a><br/>
									<a href="tel:+1 650 407 2112">+1 (650) 407 2112</a><br/>
									<a href="tel:+91 931 056 8481">+91 (931) 056 8481</a>
								</div>
							</Grid>
						</>
					)
				}
			</Grid>
		</AppBar>
	);
};

export default Header;
