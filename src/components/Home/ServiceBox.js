import React from 'react';
import Grid from '@mui/material/Grid2';

import serviceImage from "@/assets/images/service-1.jpg";

import * as styles from "./ServiceBox.module.scss";

const ServiceBox = (props) => {
  return (
		<Grid size={3} className={styles.container}>
			<div className={styles.box}>
				<div className={styles.count}>01.</div>
				<div className={styles.heading}>Real Estate Litigation</div>
				<div className={styles.image}>
					<img src={serviceImage} alt="" />
				</div>
				<div className={styles.serviceText}>
					From property disputes to estate planning, we develop full proof documents that protect your client’s assets and secure their future. When the stakes are high, we deliver results.
				</div>
			</div>
		</Grid>
  );
};

export default ServiceBox;
