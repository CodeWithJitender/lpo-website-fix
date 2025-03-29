import React from "react";
import Grid from "@mui/material/Grid2";

import TextHighlight from "@/components/common/TextHighlight";

import areaOfExpertiese from '@/assets/images/area-of-expertise.png';

import * as styles from "./AreaOfExpertise.module.scss";

const AreaOfExpertise = () => {
	return (
		<section className={styles.areaOfExpertiseSection}>
			<Grid container size={12}>
				<img src={areaOfExpertiese} alt="" className={styles.expertiseAreaImage} />
			</Grid>
			<Grid container size={12} justifyContent="center">
				<Grid size={8} className={styles.areaOfExpertieseBox}>
					<div className={styles.legalSupportHeading}>
						<div className={styles.headingSection1}>
							<TextHighlight text="We Work Behind the Scenes," />
						</div>
						<div>
							<TextHighlight text="So You Can Own the Courtroom." />
						</div>
					</div>
					<div className={styles.legalSupportText}>
						With expertise spanning civil litigation, real estate, business law, employment law, family law, and more, we anticipate challenges before they arise, delivering documents that hold up under scrutiny and strategies that keep attorneys ahead of the curve.
					</div>
					<div className={styles.legalSupportLink}>
						<a href="#" className={styles.legalSupportButton}>explore services</a>
						<a href="#" className={styles.legalSupportButton}>consult with us</a>
					</div>
				</Grid>
			</Grid>
		</section>
	);
};

export default AreaOfExpertise;
