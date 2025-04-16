import React from "react";
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid2";

import logo from "@/assets/images/logo.png";

import { Facebook, Instagram, Twitter, LinkedIn } from "@/components/Icons";

import { useDevice } from '@/context/DeviceContext';

import Animate from "./Animate";
import NaturalLanguageForm from './NaturalLanguageForm';

import * as styles from "./Footer.module.scss";

const Footer = () => {
	const { isMobile } = useDevice();

	return (
		<>
			<section className={styles.letsWinTogetherSection}>
				<Grid container size={12} justifyContent="center">
						<Grid
							container
							size={{
								xs: 12,
								sm: 12,
								md: 12,
								lg: 9,
							}}
							alignItems="center"
						>
							<Grid
								size={{
									xs: 12,
									sm: 12,
									md: 12,
									lg: 3,
								}}
							>
								<Animate.FadeUp direction="down" className={styles.infoSmallSection}>
									Let's get our A game to the court.
								</Animate.FadeUp>
								<Animate.FadeUp direction="up" className={styles.infoBigSection}>
									
								{!isMobile && <div className={styles.infoHeading1}>Let's win—</div>}	
								<div className={styles.infoHeading2}>{isMobile && "Let's win—" }together.</div>
								</Animate.FadeUp>
							</Grid>
							<NaturalLanguageForm />
						</Grid>
				</Grid>
			</section>
			<section className={styles.footer}>
				<Grid
					size={{
						xs: 12,
						sm: 12,
						md: 12,
						lg: 8,
					}}
					container
					justifyContent="center"
					className={styles.footerSection}
				>
					<Grid size={12} className={styles.logoContainer}>
						<img src={logo} className={styles.logo} alt="GlocalLPO" />
					</Grid>
					<Grid
						size={12}
						className={styles.socialMedia}
						justifyContent="center"
						container
					>
						<a
							href="https://www.instagram.com/glocallpo/"
							rel="noopener noreferrer nofollow"
							className={styles.socialIcons}
							target="_blank"
						>
							<Instagram />
						</a>
						<a
							href="https://www.facebook.com/glocallpo/"
							rel="noopener noreferrer nofollow"
							className={styles.socialIcons}
							target="_blank"
						>
							<Facebook />
						</a>
						<a
							href="https://www.x.com/glocallpo/"
							rel="noopener noreferrer nofollow"
							className={styles.socialIcons}
							target="_blank"
						>
							<Twitter />
						</a>
						<a
							href="https://www.linkedin.com/glocallpo/"
							rel="noopener noreferrer nofollow"
							className={styles.socialIcons}
							target="_blank"
						>
							<LinkedIn />
						</a>
					</Grid>
					<Grid size={12}>
						<div className={styles.navBar}>
							<Link
								data-replace="Home"
								className={styles.footerLink}
								to="/"
							>
								<span>Home</span>
							</Link>
							<Link
								data-replace="About Us"
								className={styles.footerLink}
								to="/about"
							>
								<span>About Us</span>
							</Link>
							<Link
								data-replace="services"
								className={styles.footerLink}
								to="/services"
							>
								<span>services</span>
							</Link>
							<Link
								data-replace="OUR PROCESS"
								className={styles.footerLink}
								to="/our-process"
							>
								<span>OUR PROCESS</span>
							</Link>
							<Link
								data-replace="CONTACT US"
								className={styles.footerLink}
								to="/contact-us"
							>
								<span>CONTACT US</span>
							</Link>
							<Link
								data-replace="FAQ's"
								className={styles.footerLink}
								to="/faq"
							>
								<span>FAQ's</span>
							</Link>
						</div>
					</Grid>
				</Grid>
				<Grid
					size={12}
					container
					className={styles.copyrightContainer}
					alignItems="center"
				>
					<Grid
						size={{
							xs: 12,
							sm: 12,
							md: 12,
							lg: 6,
						}}
						className={styles.copyrightText}
					>
						<span className={styles.allRightsReserved}>&copy; 2025 Glocal LPO. All Rights Reserved.</span>
						<Link to="/terms-of-service"> Terms of Service</Link> | 
						<Link to="/privacy-policy"> Privacy Policy</Link> | 
						<Link to="/cookie-settings"> Cookie Settings</Link>
					</Grid>
					<Grid
						size={{
							xs: 12,
							sm: 12,
							md: 12,
							lg: 6,
						}}
						className={styles.contactInfo}
					>
						<span className={styles.telContainer}>
							<a href="tel:+1 (732) 344 4260">+1 (732) 344 4260</a> /
							<a href="tel:+1 (650) 407 2112"> +1 (650) 407 2112</a> /
							<a href="tel:+91 (931) 056 848"> +91 (931) 056 848</a>
						</span>
						<a
							href="mailto:info@glocallpo.com"
							className={styles.emailContainer}
						>
							info@glocallpo.com
						</a>
					</Grid>
				</Grid>
			</section>
		</>
	);
};

export default Footer;
