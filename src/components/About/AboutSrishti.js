import React from "react";
import { Container, Grid2 as Grid } from '@mui/material';

import { Heading } from '@/components/common';

import linkedIcon from "@/assets/icons/about-linkedin-icon.png";

import * as styles from "./AboutTeam.module.scss";

const AboutSrishti = () => {
	return (
		<Container maxWidth="lg" className={styles.container}>
			<Grid size={12}>
				<Grid size={12}>
					<Heading className={styles.heading}>
						Srishti Khatri
						<a
							href="https://www.linkedin.com/in/srishti-khatri-a13a86119/"
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							<img src={linkedIcon} alt="" className={styles.linkedinIcon} />
						</a>
					</Heading>
					<div className={styles.designation}>VP - Sales & Marketing</div>
				</Grid>
				<Grid size={12} className={styles.aboutFounder}>
					She is a results-driven sales and marketing professional with expertise in driving business growth for Glocal LPO, a leading legal process outsourcing company.
				</Grid>
				<Grid size={12}>
					<p>With a strong background in sales and marketing, Srishti leverages her skills to foster strategic partnerships, enhance brand visibility, and propel business expansion.</p>
				</Grid>
			</Grid>
		</Container>
	)
};

export default AboutSrishti;
