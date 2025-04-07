import React from "react";
import Grid from '@mui/material/Grid2';

import { Animate } from "@/components/common";

import usFlagImage from "@/assets/images/us-flag-image.png";
import cards from "@/assets/images/cards.png";

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
					<img src={cards} alt="" />
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
