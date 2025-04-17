import React, { useEffect, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Grid2 as Grid, AppBar } from '@mui/material';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useDevice } from '@/context/DeviceContext';

import { routes } from "@/utils/routes";

import logo from "@/assets/images/logo.png";

import Menu from "./Menu";

import * as styles from "./Header.module.scss";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
	const { isMobile } = useDevice();
	const navBar = useRef(null);

	let location = useLocation();

	useEffect(() => {
		const showAnim = gsap.from(navBar.current, { 
			yPercent: -100,
			paused: true,
			duration: 0.65
		}).progress(1);
		
		ScrollTrigger.create({
			start: "top top",
			end: "max",
			markers: false,
			onUpdate: (self) => {
				self.direction === -1 ? showAnim.play() : showAnim.reverse()
			}
		});
	}, []);

	useEffect(() => {
		console.log("location: ", location);
	}, [location]);

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
										to={routes.home.href}
										data-replace={routes.home.label}
										className={styles.headerLink}
									>
										<span>{routes.home.label}</span>
									</Link>
									<Link
										to={routes.about.href}
										data-replace={routes.about.label}
										className={styles.headerLink}
									>
										<span>{routes.about.label}</span>
									</Link>
									<Link
										to={routes.services.href}
										data-replace={routes.services.label}
										className={styles.headerLink}
									>
										<span>{routes.services.label}</span>
									</Link>
									<Link
										to={routes["our-process"].href}
										data-replace={routes["our-process"].label}
										className={styles.headerLink}
									>
										<span>{routes["our-process"].label}</span>
									</Link>
									<Link
										to={routes["contact-us"].href}
										data-replace={routes["contact-us"].label}
										className={styles.headerLink}
									>
										<span>{routes["contact-us"].label}</span>
									</Link>
									<Link
										to={routes.faq.href}
										data-replace={routes.faq.label}
										className={styles.headerLink}
									>
										<span>{routes.faq.label}</span>
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
