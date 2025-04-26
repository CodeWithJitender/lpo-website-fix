import React from "react";
import { Container, Grid2 as Grid } from '@mui/material';

import { Heading } from '@/components/common';

import linkedIcon from "@/assets/icons/about-linkedin-icon.png";

import * as styles from "./AboutTeam.module.scss";

const AboutKunal = () => {
	return (
		<Container maxWidth="lg" className={styles.container}>
			<Grid size={12}>
				<Grid size={12}>
					<Heading className={styles.heading}>
						Kunal Jaggi
						<a
							href="https://www.linkedin.com/in/kunal-jaggi-0b5a182/"
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							<img src={linkedIcon} alt="" className={styles.linkedinIcon} />
						</a>
					</Heading>
					<div className={styles.designation}>Founder & CEO, Glocal IPO</div>
				</Grid>
				<Grid size={12} className={styles.aboutFounder}>
					Kunal Jaggi is the visionary Founder & CEO behind Glocal LPO, backed by over 20 years of entrepreneurial and operational leadership.
				</Grid>
				<Grid size={12}>
					<p>As the architect or Head Field Solutions—India's premier recrunment-outsourcing mirm since 2001-ne nas delivered top-tier offshore recruitment, digital, accounting, and virtual assistant services across the U.S. and Canada. Spottina the surae in demand for cost-eftective, high-quality ledal sumport. Kunal launcher Glocal PO to bring world-class alternative legal solutions to law firms and corporate legal teams in the Us, canade, and europe.</p>
					<p>Under his stewardship, Glocal IPO has become a sophisticated boutique partner celebrated for precision-driven services and an unwavering commitment to excellence, A champion or people-first leader" ship, Kunal cultivates a culture of growth and engagement-empowering every team member as an "in-ternal client" and setting new benchmarks in the outsourcing industry.</p>
				</Grid>
			</Grid>
		</Container>
	)
};

export default AboutKunal;
