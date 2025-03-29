import React from "react";
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Grid from "@mui/material/Grid2";

import logo from "@/assets/images/logo.png";

import * as styles from "./Header.module.scss";

const Header = () => {
	return (
		<AppBar position="fixed">
			<Grid container size={12}>
				<Grid size={2}>
					<img src={logo} className={styles.logo} alt="GlocalLPO" />
				</Grid>
				<Grid
					size={7}
					sx={{
						alignSelf: "center",
					}}
				>
					<div className={styles.navBar}>
						<Link to="/">Home</Link>
						<Link to="/about">About Us</Link>
						<Link to="/services">services</Link>
						<Link to="/our-process">OUR PROCESS</Link>
						<Link to="/contact-us">CONTACT US</Link>
						<Link to="/faq">FAQ's</Link>
					</div>
				</Grid>
				<Grid size={3} sx={{ textAlign: "right", alignSelf: "center" }}>
					<div className={styles.address}>3422 Old Capitol Trail, Wilmington DE 19808, USA</div>
					<div className={styles.phone}>+1 (732) 344 4260 / +1 (650) 407 2112 / +91 (931) 056 8481</div>
				</Grid>
			</Grid>
		</AppBar>
	);
};

export default Header;
