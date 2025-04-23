import React from "react";
import { Grid2 as Grid } from "@mui/material";

import { useDevice } from '@/context/DeviceContext';

import { Animate } from "@/components/common";

import playIcon from "@/assets/icons/button-play-icon.png";

import * as styles from "./ServiceTypeBox.module.scss";

const ServiceTypeBox = (props) => {
	const { isMobile } = useDevice();
	const {
		heading,
		text,
		// id,
		image,
		direction,
		delay,
	} = props;

	return (
		<Animate.FadeUp
			element={Grid}
			direction={direction}
			delay={delay}
			elementProps={{
				size:{sm: 12, lg: 6},
				container: true,
				className: styles.serviceBox,
				columnSpacing: 3,
			}}
		>
			<Grid size={{ sm: 12, md: 3 }} alignContent="center" className={styles.imageBlk}
			>
				<img
					src={image}
					alt={heading}
					className={styles.serviceImage}
				/>
			</Grid>
			<Grid
				size={{ sm: 12, md: 6 }}
				container
				alignItems="center"
				spacing={0}
			>
				{isMobile && <Grid size={12} className={styles.serviceBoxNumber}>&nbsp;</Grid>}
				<Grid
					size={12}
					className={styles.serviceBoxHeading}
				>
					{heading}
				</Grid>
				<Grid>
					{text}
				</Grid>
			</Grid>
			<Grid
				container
				size={{ sm: 12, md: 3 }}
				spacing={0}
				alignContent="space-between"
			>
				{!isMobile && <Grid size={12} className={styles.serviceBoxNumber}>&nbsp;</Grid>}
				<Grid size={12}>
					<div className={styles.connectWithUsButton}>
						<span>
							CONSULT
							WITH US
						</span>
						<img src={playIcon} alt="" />
					</div>
				</Grid>
			</Grid>
		</Animate.FadeUp>
	);
};

export default ServiceTypeBox;
