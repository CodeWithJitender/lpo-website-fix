import React from "react";
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid2";

import logo from "@/assets/images/logo.png";

import { Instagram, LinkedIn } from "@/components/Icons";

import { useDevice } from '@/context/DeviceContext';

import { routes } from "@/utils/routesPath";

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
							href="https://www.linkedin.com/glocallpo/"
							rel="noopener noreferrer nofollow"
							className={styles.socialIcons}
							target="_blank"
						>
							<LinkedIn />
						</a>
						<a
							href="https://www.instagram.com/glocallpo/"
							rel="noopener noreferrer nofollow"
							className={styles.socialIcons}
							target="_blank"
						>
							<Instagram />
						</a>
					</Grid>
					<Grid size={12}>
						<div className={styles.navBar}>
							<Link
								to={routes.home.href}
								data-replace={routes.home.label}
								className={styles.footerLink}
							>
								<span>{routes.home.label}</span>
							</Link>
							<Link
								to={routes.about.href}
								data-replace={routes.about.label}
								className={styles.footerLink}
							>
								<span>{routes.about.label}</span>
							</Link>
							<Link
								to={routes.services.href}
								data-replace={routes.services.label}
								className={styles.footerLink}
							>
								<span>{routes.services.label}</span>
							</Link>
							<Link
								to={routes["contact-us"].href}
								data-replace={routes["contact-us"].label}
								className={styles.footerLink}
							>
								<span>{routes["contact-us"].label}</span>
							</Link>
							<Link
								to={routes.faq.href}
								data-replace={routes.faq.label}
								className={styles.footerLink}
							>
								<span>{routes.faq.label}</span>
							</Link>
						</div>
					</Grid>
				</Grid>
				<Grid
					size={12}
					container
					className={`${styles.copyrightContainer} ${styles.extraPaddingContainer}`}
					alignItems="center"
					justifyContent="center"
				>
					<Grid
						size={{
							xs: 12,
							sm: 12,
							md: 12,
							lg: 4,
						}}
						className={styles.copyrightText}
					>
						<span className={styles.addressHeading}>US Headquarters:</span>
						<a
							href="https://g.co/kgs/2Gbqrfo"
							rel="noopener noreferrer nofollow"
							target="_blank"
						>
							3422 Old Capitol Trail, Wilmington DE 19808, USA
						</a>
					</Grid>
					<Grid
						size={{
							xs: 12,
							sm: 12,
							md: 12,
							lg: 4,
						}}
						className={styles.copyrightText}
					>
						<span className={styles.addressHeading}>Office Operations:</span>
						<a
							href="https://g.co/kgs/jd2x9s4"
							rel="noopener noreferrer nofollow"
							target="_blank"
						>
							B 73, Block B, Sector 57, Noida, Uttar Pradesh 201301, India
						</a>
					</Grid>
					<Grid
						size={{
							xs: 12,
							sm: 12,
							md: 12,
							lg: 4,
						}}
						className={styles.copyrightText}
					>
						<a href="tel:+1 (650) 407 2112" className={styles.addressHeading}> +1 (650) 407 2112</a>
						<a
							href="mailto:info@glocallpo.com"
						>
							info@glocallpo.com
						</a>
					</Grid>
				</Grid>
				<Grid
					size={12}
					className={styles.copyrightContainer}
					alignItems="center"
				>
						&copy; 2025 Glocal LPO. All Rights Reserved.
				</Grid>
			</section>
		</>
	);
};

export default Footer;
