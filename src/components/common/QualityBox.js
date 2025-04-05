import React from "react";
import { Grid2 as Grid } from "@mui/material";

import * as styles from "./QualityBox.module.scss";

const QualityBox = (props) => {
	const { icon, heading, text } = props;

	return (
		<Grid size={6} className={styles.serviceBox}>
			<div className={styles.serviceIcon}>
				<img src={icon} alt="" />
			</div>
			<div className={styles.serviceHeading}>
				{heading}
			</div>
			<div>
				{text}
			</div>
		</Grid>
	)

};

export default QualityBox;
