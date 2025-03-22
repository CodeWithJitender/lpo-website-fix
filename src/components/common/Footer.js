import React from "react";
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid2";

import logo from "@/assets/images/logo.png";

import instagramIcon from "@/assets/icons/instagram.png";
import facebookIcon from "@/assets/icons/facebook.png";
import twitterIcon from "@/assets/icons/twitter.png";
import linkedinIcon from "@/assets/icons/linkedin.png";

import * as styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<section className={styles.footer}>
			<Grid size={8} container justifyContent="center" className={styles.footerSection}>
				<Grid size={12} className={styles.logoContainer}>
					<img src={logo} className={styles.logo} alt="GlocalLPO" />
				</Grid>
				<Grid size={12}>
					<div className={styles.navBar}>
						<Link to="/">Home</Link>
						<Link to="/about">About Us</Link>
						<Link to="/services">services</Link>
						<Link to="/our-process">OUR PROCESS</Link>
						<Link to="/contact-us">CONTACT US</Link>
						<Link to="/faq">FAQ's</Link>
					</div>
				</Grid>
			</Grid>
			<Grid
				size={12}
				maxWidth="xl"
				container
				className={styles.copyrightContainer}
				alignItems="center"
			>
				<Grid size={2}>
					<a
						href="https://www.instagram.com/glocallpo/"
						rel="noopener noreferrer nofollow"
						className={styles.socialIcons}
						target="_blank"
					>
						<img src={instagramIcon} alt="" />
					</a>
					<a
						href="https://www.facebook.com/glocallpo/"
						rel="noopener noreferrer nofollow"
						className={styles.socialIcons}
						target="_blank"
					>
						<img src={facebookIcon} alt="" />
					</a>
					<a
						href="https://www.x.com/glocallpo/"
						rel="noopener noreferrer nofollow"
						className={styles.socialIcons}
						target="_blank"
					>
						<img src={twitterIcon} alt="" />
					</a>
					<a
						href="https://www.linkedin.com/glocallpo/"
						rel="noopener noreferrer nofollow"
						className={styles.socialIcons}
						target="_blank"
					>
						<img src={linkedinIcon} alt="" />
					</a>
				</Grid>
				<Grid size={5} className={styles.copyrightText}>
					&copy; 2025 Glocal LPO. All Rights Reserved.
					<Link to="/terms-of-service"> Terms of Service</Link> | 
					<Link to="/privacy-policy"> Privacy Policy</Link> | 
					<Link to="/cookie-settings"> Cookie Settings</Link>
				</Grid>
				<Grid size={5} className={styles.contactInfo}>
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
	);
};

export default Footer;
