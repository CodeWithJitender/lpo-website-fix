import React from "react";
import Grid from "@mui/material/Grid2";

import {
	Heading,
	TextHighlight,
	LinkButton
} from "@/components/common";

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
						<Heading className={styles.headingSection1}>
							<TextHighlight text="We Work Behind the Scenes," />
						</Heading>
						<Heading>
							<TextHighlight text="So You Can Own the Courtroom." />
						</Heading>
					</div>
					<div className={styles.legalSupportText}>
						With expertise spanning civil litigation, real estate, business law, employment law, family law, and more, we anticipate challenges before they arise, delivering documents that hold up under scrutiny and strategies that keep attorneys ahead of the curve.
					</div>
					<div className={styles.legalSupportLink}>
						<LinkButton to="#">explore services</LinkButton>
						<LinkButton to="#">consult with us</LinkButton>
					</div>
				</Grid>
			</Grid>
		</section>
	);
};

export default AreaOfExpertise;
