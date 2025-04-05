import React from "react";
import { Grid2 as Grid } from "@mui/material";

import playIcon from "@/assets/icons/button-play-icon.png";

import * as styles from "./ServiceTypeBox.module.scss";

const ServiceTypeBox = (props) => {
	const {
		heading,
		text,
		id,
		image
	} = props;

	return (
		<Grid
			size={6}
			container
			className={styles.serviceBox}
			columnSpacing={3}
		>
			<Grid size={3} alignContent="center">
				<img
					src={image}
					alt={heading}
					className={styles.serviceImage}
				/>
			</Grid>
			<Grid
				size={6}
				container
				alignItems="center"
				spacing={0}
			>
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
				size={3}
				spacing={0}
				alignContent="space-between"
			>
				<Grid size={12} className={styles.serviceBoxNumber}>{id}.</Grid>
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
		</Grid>
	);
};

export default ServiceTypeBox;
