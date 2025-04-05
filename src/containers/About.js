import React from 'react';
import { Container, Grid2 as Grid } from '@mui/material';

import {
	Heading,
	LinkButton,
	QualityBox
} from '@/components/common';

import iconPractice from "@/assets/icons/icon-practice.png";
import iconTarget from "@/assets/icons/icon-target.png";
import iconClock from "@/assets/icons/icon-clock.png";
import iconSave from "@/assets/icons/icon-save.png";

import * as styles from "./About.module.scss";

const About = () => {
  return (
    <>
			<section className={styles.masterHead}>
				<Container maxWidth="xl">
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<ul className={styles.breadcrumb}>
							<li>ABOUT US</li>
						</ul>
						<Heading className={styles.lpoTitle}>
							Where Precision <br/>
							Meets Power in <br/>
							Legal Outsourcing.
						</Heading>
					</Grid>
					<Grid size={12} justifyItems="center">
						<Grid size={3} className={styles.plusIcon}>
							+
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.aboutLPO}>
				<Grid container justifyContent="flex-end">
					<Grid size={5}>
						<div className={styles.aboutHeading}>
							At Glocal LPO, we redefine legal process outsourcing—bringing efficiency, accuracy, and expertise to the forefront.
						</div>

						<div className={styles.aboutText}>
							We deliver end-to-end litigation and managed services, covering document review, contract management, legal research, and compliance solutions with absolute precision. We don't just support your legal operations; we optimize, streamline, and elevate them.
						</div>

						<div>
							<LinkButton to="#">Explore services</LinkButton>
							<LinkButton to="#">consult with us</LinkButton>
						</div>
					</Grid>
				</Grid>
			</section>
			<section className={styles.newEraSection}>
				<Container maxWidth="xl">
					<Grid container columnSpacing={12}>
						<Grid
							container
							size={{
								xs: 12,
								sm: 12,
								md: 12,
								lg: 6,
							}}
							spacing={0}
							alignSelf="flex-start"
							flexDirection="column"
						>
							<Heading variant="secondary">
								The New Era of Legal Outsourcing
							</Heading>
							<Heading>
								Built for Compliance & Scale.
							</Heading>
							<div className={styles.newEraText}>
								In a world where speed wins cases, we move faster.<br />
								<br />
								The legal landscape is evolving across the USA, UK, and Canada. With rising data privacy concerns, regulatory scrutiny, and complex compliance mandates, traditional legal processes are no longer enough. Businesses today need smarter, scalable legal solutions.
							</div>
							<div className={styles.weAreStepIn}>
								That's where we step in.
							</div>
							<LinkButton to="#">
								BOOK AN INTERVIEW WITH A PARALEGAL
							</LinkButton>
						</Grid>
						<Grid
							size={{
								xs: 12,
								sm: 12,
								md: 12,
								lg: 6,
							}}
							spacing={0}
							container
						>
							<QualityBox
								icon={iconSave}
								heading="Elite Expertise, Global Reach"
								text="Teams trained by top US, UK, and Canadian law firms, delivering precision-driven legal support."
							/>
							<QualityBox
								icon={iconClock}
								heading="Ironclad Data Security"
								text="End-to-end encryption, strict compliance protocols, and airtight confidentiality—your data stays protected, always."
							/>
							<QualityBox
								icon={iconTarget}
								heading="Tech-Driven Efficiency"
								text="We leverage cutting-edge legal tech, AI-powered research, and secure cloud solutions for seamless execution."
							/>
							<QualityBox
								icon={iconPractice}
								heading="Versatile Practices"
								text="From litigation to compliance, we cover every legal need with precision."
							/>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.metricsContainer}>
				<Grid container justifyContent="center">
					<Grid container size={11} columnSpacing={4}>
						<Grid size={3} container justifyContent="center" alignItems="flex-start">
							<div className={styles.metricsHeading}>99%</div>
							<div className={styles.metricsTitle}>
								Accuracy in Legal 
								Documentation & Case 
								Support
							</div>
							<div className={styles.metricsText}>
								Precision-driven processes to keep your cases airtight.
							</div>
						</Grid>
						<Grid size={3} container justifyContent="center">
							<div className={styles.metricsHeading}>24/7</div>
							<div className={styles.metricsTitle}>
								Operational Support
								Across Time 
								Zones
							</div>
							<div className={styles.metricsText}>
								Because legal deadlines don't wait. Neither do we.
							</div>
						</Grid>
						<Grid size={3} container justifyContent="center">
							<div className={styles.metricsHeading}>50+</div>
							<div className={styles.metricsTitle}>
								Expert Paralegals & 
								Legal 
								Professionals
							</div>
							<div className={styles.metricsText}>
								Trained by top law firms, delivering unmatched expertise.
							</div>
						</Grid>
						<Grid size={3} container justifyContent="center">
							<div className={styles.metricsHeading}>100%</div>
							<div className={styles.metricsTitle}>
								Data Security & 
								Confidentiality 
								Compliance
							</div>
							<div className={styles.metricsText}>
								Your sensitive information stays protected, no exceptions.
							</div>
						</Grid>
					</Grid>
				</Grid>
			</section>
			<section className={styles.aboutFounder}>
				<Grid size={12} container justifyContent="center">
					<Grid size={7}>
						<div className={styles.founderTitle}>
							Meet the Visionary Behind Glocal LPO
						</div>
						<div className={styles.name}>
							Kunal Jaggi
						</div>
						<div className={styles.designation}>
							Founder and CEO
						</div>
						<div className={styles.description}>
							Kunal Jaggi, Founder & CEO of Glocal LPO, is a visionary leader with 15+ years in outsourcing, sales, and operations. He also heads Head Field Solutions, a market leader in recruitment, digital, and virtual assistant services across the US and Canada. With a people-first approach, he has built Glocal LPO into a trusted legal outsourcing partner for global law firms and corporations.
						</div>
						<div className={styles.socialFootprint}>
							Linkedin
						</div>
					</Grid>
				</Grid>
			</section>
		</>
  );
};

export default About;
