import React from 'react';
import { Container, Grid2 as Grid } from '@mui/material';

import {
	Heading,
	LinkButton,
	QualityBox
} from '@/components/common';

import eliteExpert from "@/assets/icons/elite-expert.png";
import dataSecurity from "@/assets/icons/data-security.png";
import techDrivenEfficency from "@/assets/icons/tech-driven-efficency.png";
import costAdvantage from "@/assets/icons/cost-advantage.png";
import linkedIcon from "@/assets/icons/about-linkedin-icon.png";
import playIcon from "@/assets/icons/play-icon.png";
import playButtonIcon from "@/assets/icons/button-play-icon.png";

import legalStamp from "@/assets/images/about-legal-stamp.png";
import metricsSectionImage from "@/assets/images/metrics-bg.jpg";
import founderLaptopImage from "@/assets/images/kunal-in-laptop.png";

import * as styles from "./About.module.scss";
import { isMobile } from 'react-device-detect';

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
					<Grid size={12} justifyItems={{xs:"left", md:'center'}}>
						<Grid size={3} className={styles.plusIcon}>
							+
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.aboutLPO}>
			  <Grid container justifyContent={{ xs: "left", md:"flex-end"}}>
					<Grid size={{xs:12, md:5}}>
						<div className={styles.aboutHeading}>
							At Glocal LPO, we redefine legal process outsourcing—bringing efficiency, accuracy, and expertise to the forefront.
						</div>

						<div className={styles.aboutText}>
							We deliver end-to-end litigation and managed services, covering document review, contract management, legal research, and compliance solutions with absolute precision. We don't just support your legal operations; we optimize, streamline, and elevate them.
						</div>

						<div className={styles.btnGroup}>
							<LinkButton to="#" delay="100ms">Explore services</LinkButton>
							<LinkButton to="#" delay="200ms">consult with us</LinkButton>
						</div>
					</Grid>
				</Grid>
			</section>
			<section className={styles.newEraSection}>
				<div className={styles.aboutStamp}>
					<img src={legalStamp} alt="" />
				</div>
				<Container maxWidth="xl">
					<Grid container columnSpacing={10} alignItems="flex-start">
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
						  <LinkButton to="#" className={styles.bookButton}>
								<span>BOOK AN INTERVIEW WITH A PARALEGAL</span>
								<span><img src={playButtonIcon} alt="" /></span>
						  </LinkButton>
						  {isMobile && <><br /><br /></>}
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
								icon={eliteExpert}
								heading="Elite Expertise, Global Reach"
								text="Teams trained by top US, UK, and Canadian law firms, delivering precision-driven legal support."
								direction="right"
								delay="100ms"
							/>
							<QualityBox
								icon={dataSecurity}
								heading="Ironclad Data Security"
								text="End-to-end encryption, strict compliance protocols, and airtight confidentiality—your data stays protected, always."
								direction="left"
								delay="200ms"
							/>
							<QualityBox
								icon={techDrivenEfficency}
								heading="Tech-Driven Efficiency"
								text="We leverage cutting-edge legal tech, AI-powered research, and secure cloud solutions for seamless execution."
								direction="right"
								delay="300ms"
							/>
							<QualityBox
								icon={costAdvantage}
								heading="Versatile Practices"
								text="From litigation to compliance, we cover every legal need with precision."
								direction="left"
								delay="400ms"
							/>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.metricsContainer}>
				<Grid size={12}>
					<img src={metricsSectionImage} className={styles.metricsSectionImage} alt="" />
				</Grid>
				<Grid
					container
					justifyContent="center"
					className={styles.metricsContentContainer}
				>
				  <Grid container size={11} columnSpacing={4} rowSpacing={{xs:3, sm:3}}>
						<Grid
							size={{
								sm:12, md: 6
							}}
							container
							justifyContent="center"
						>
							<div className={styles.metricsItem}>
								<div className={styles.metricsHeading}>99%</div>
								<div className={styles.metricsTitle}>
							  		Accuracy in Legal 
									Documentation & Case 
									  Support
								</div>
							</div>
							<div className={styles.metricsText}>
							  <span>Precision-driven processes to keep your cases airtight.</span>
							</div>
						</Grid>
						<Grid
						  size={{
							  sm:12, md: 6
						  }}
							container
							justifyContent="center"
						>
							<div className={styles.metricsItem}>
								<div className={styles.metricsHeading}>24/7</div>
								<div className={styles.metricsTitle}>
							  		Operational Support
									Across Time 
									  Zones
								</div>
							</div>
							<div className={styles.metricsText}>
							  	<span>Because legal deadlines don't wait. Neither do we.</span>
							</div>
						</Grid>
						<Grid
						  size={{
							  sm:12, md: 6
						  }}
							container
							justifyContent="center"
						>
							<div className={styles.metricsItem}>
								<div className={styles.metricsHeading}>50+</div>
								<div className={styles.metricsTitle}>
									<span>Expert Paralegals & 
									Legal 
									  Professionals</span>
								</div>
							</div>
							<div className={styles.metricsText}>
							  	<span>Trained by top law firms, delivering unmatched expertise.</span>
							</div>
						</Grid>
						<Grid
						  size={{
							  sm:12, md: 6
						  }}
							container
							justifyContent="center"
						>
							<div className={styles.metricsItem}>
								<div className={styles.metricsHeading}>100%</div>
								<div className={styles.metricsTitle}>
							 		 <span>Data Security & 
									Confidentiality 
									  Compliance</span>
								</div>
							</div>
							<div className={styles.metricsText}>
							  	<span>Your sensitive information stays protected, no exceptions.</span>
							</div>
						</Grid>
					</Grid>
					<Grid size={12} className={styles.precisionTextContainer}>
						<div className={styles.precisionText}>
							<div>Powering Law Firms with Smart, Scalable Legal Support,&nbsp;</div>
							<div>Powering Law Firms with Smart, Scalable Legal Support,&nbsp;</div>
						</div>
					</Grid>
				</Grid>
			</section>
			<section className={styles.aboutFounder}>
				<div className={styles.founderLaptopImage}>
					<img src={founderLaptopImage} alt="" />
					<div className={styles.playIcon}>
						<img src={playIcon} alt="" />
					</div>
				</div>
				<Grid size={12} container justifyContent="center">
					<Grid size={{sm:12, md: 7}}>
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
							<img src={linkedIcon} alt="" className={styles.linkedinIcon} />
						</div>
					</Grid>
				</Grid>
			</section>
		</>
  );
};

export default About;
