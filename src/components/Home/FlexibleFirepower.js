import React from "react";
import Grid from '@mui/material/Grid2';

import {
	Heading,
	TextHighlight
} from "@/components/common";

import flexibleSectionImg from "@/assets/images/flexible-section-img.png";

import * as styles from "./FlexibleFirepower.module.scss";

const FlexibleFirePower = () => {
	return (
		<section className={styles.infoContainer}>
			<Grid container size={12}>
				<Grid
					container
					size={{
						xs: 12,
						sm: 12,
						md: 12,
						lg: 6,
					}}
					display="flex"
					direction="row"
				>
					<Grid size={12} className={styles.infoHeadingSection}>
						<Heading>
							<TextHighlight text="Flexible Firepower for Your Cases" />
						</Heading>
						<Heading variant="secondary" className={styles.infoSubHeading}>
							Scale. Adapt. Conquer. Repeat.
						</Heading>
					</Grid>
					<Grid
						size={12}
						className={styles.infoImage}
						display="flex"
						alignItems="flex-end"
					>
						<img src={flexibleSectionImg} alt="" />
					</Grid>
				</Grid>
				<Grid
					size={{
						xs: 12,
						sm: 12,
						md: 12,
						lg: 6,
					}}
					className={styles.infoDetailSection}
				>
					<Grid size={12} className={styles.infoDetail}>
						Whether you need a dedicated paralegal or 
						strategic on-demand support, we provide the 
						flexibility to scale with your practice—because 
						in law, adaptability is power.
					</Grid>
					<Grid container size={12} spacing={4} alignItems="flex-start">
						<Grid size={6} className={styles.perWeekSection}>
							<div className={styles.smallHeading}>Full-Time Paralegal</div>
							<div className={styles.perMonthHours}>160 hrs/month</div>
							<div className={styles.perWeekHours}>
								<div className={styles.perWeek}>40</div>
								hrs/week
							</div>
						</Grid>
						<Grid size={6} className={styles.perWeekDescriptionSection}>
							<div className={styles.weekDescription}>
								Full-Throttle Paralegal Power - For When Every Second Counts.
							</div>
							<ul className={styles.weekBulletPoints}>
								<li>Best for heavy caseloads & long-term engagements</li>
								<li>Consistency & full integration into your legal team</li>
								<li>Proactive case management with deep involvement</li>
							</ul>
						</Grid>
					</Grid>
					<Grid container size={12} spacing={4} alignItems="flex-start">
						<Grid size={6} className={styles.perWeekSection}>
							<div className={styles.smallHeading}>Part-Time Paralegal</div>
							<div className={styles.perMonthHours}>80 hrs/month</div>
							<div className={styles.perWeekHours}>
								<div className={styles.perWeek}>20</div>
								hrs/week
							</div>
						</Grid>
						<Grid size={6} className={styles.perWeekDescriptionSection}>
							<div className={styles.weekDescription}>
								Lean, Mean, Legal Machine - On-demand Assistance.
							</div>
							<ul className={styles.weekBulletPoints}>
								<li>Ideal for boutique firms and case-specific needs.</li>
								<li>Scalable—adjust hours as your caseload grows</li>
								<li>High-impact support without long-term constraints</li>
							</ul>
							<a href="#" className={styles.consultWithUs}>Consult with us</a>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
};

export default FlexibleFirePower;
