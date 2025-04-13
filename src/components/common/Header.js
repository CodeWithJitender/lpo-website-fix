import React from "react";
import { Link } from 'react-router-dom';
import { Grid2 as Grid, AppBar } from '@mui/material';

import { useDevice } from '@/context/DeviceContext';

import logo from "@/assets/images/logo.png";

import Menu from "./Menu";

import * as styles from "./Header.module.scss";

const Header = () => {
	const { isMobile } = useDevice();
	return (
		<AppBar position="fixed">
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
									md: 7,
									lg: 7
								}}
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
							<Grid
								size={{
									xs: 0,
									sm: 0,
									md: 3,
									lg: 3
								}}
								sx={{ textAlign: "right", alignSelf: "center" }}
							>
								<div className={styles.address}>3422 Old Capitol Trail, Wilmington DE 19808, USA</div>
								<div className={styles.phone}>+1 (732) 344 4260 / +1 (650) 407 2112 / +91 (931) 056 8481</div>
							</Grid>
						</>
					)
				}
			</Grid>
		</AppBar>
	);
};

export default Header;
