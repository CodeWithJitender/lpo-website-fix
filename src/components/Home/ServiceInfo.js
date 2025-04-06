import React from "react";
import Grid from '@mui/material/Grid2';

import { Animate } from "@/components/common";

import Slideshow from "../../components/common/Slideshow";

import usFlagImage from "@/assets/images/us-flag-image.png";

import * as styles from "./ServiceInfo.module.scss";

const ServiceInfo = () => {
	return (
		<section className={styles.serviceInfoSection}>
			<Grid container size={12} justifyContent="center">
				<Grid size={3} className={styles.usFlagBox}>
					<Animate.FadeUp direction="right">
						<img src={usFlagImage} alt="" />
					</Animate.FadeUp>
				</Grid>
				<Grid size={6} className={styles.carouselSection}>
					<Slideshow />
					{/* <Grid size={12}>
						<img src={tableImage} alt="" className={styles.tableImage} />
					</Grid>
					<Grid container size={12} className={styles.carouselItem}>
						<Grid size={12} className={styles.itemsubHeading}>
							The Backbone of Legal Operations
						</Grid>
						<Grid size={12} className={styles.itemHeading}>
							Secretarial Services
						</Grid>
						<Grid size={12}>
							<div className={styles.itemDescription}>
								From case intakes to calendaring, we streamline your workflow so you can focus on winning.
							</div>
						</Grid>
					</Grid>
					<Grid size={12} display="flex" justifyContent="center" alignItems="center">
						<img src={arrowIcon} className={styles.leftArrowIcon} alt="" />
						<img src={lensIcon} className={styles.lensIcon} alt="" />
						<img src={arrowIcon} className={styles.rightArrowIcon} alt="" />
					</Grid> */}
				</Grid>
				<Grid size={3} className={styles.usFlagBox}>
					<Animate.FadeUp direction="left">
						<img src={usFlagImage} alt="" />
					</Animate.FadeUp>
				</Grid>
			</Grid>
		</section>
	)
};

export default ServiceInfo;
