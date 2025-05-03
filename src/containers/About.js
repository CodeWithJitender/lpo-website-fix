import React, { useState } from 'react';
import { Container, Grid2 as Grid } from '@mui/material';

import {
	Heading,
	LinkButton,
	QualityBox,
	Animate,
	Modal
} from '@/components/common';

import AboutKunal from '@/components/About/AboutKunal';
import AboutDeepti from '@/components/About/AboutDeepti';
import AboutSrishti from '@/components/About/AboutSrishti';

import { useDevice } from '@/context/DeviceContext';

import { routes } from "@/utils/routesPath";

import eliteExpert from "@/assets/icons/elite-expert.png";
import dataSecurity from "@/assets/icons/data-security.png";
import techDrivenEfficency from "@/assets/icons/tech-driven-efficency.png";
import costAdvantage from "@/assets/icons/cost-advantage.png";
import linkedIcon from "@/assets/icons/about-linkedin-icon.png";

import kunalProfilePic from "@/assets/images/kunal-profile-pic.jpg";
import srishtiProfilePic from "@/assets/images/srishti-profile-pic.jpg";
import deeptiProfilePic from "@/assets/images/deepti-profile-pic.jpg";
import legalStamp from "@/assets/images/about-legal-stamp.png";

import * as styles from "./About.module.scss";

const About = () => {
	const { isMobile } = useDevice();

	const [toggleModal, setToggleModal] = useState(false);
	const [modalInfo, setModalInfo] = useState("");

	const handleModalOpen = (name = "") => {
		setToggleModal(!toggleModal);
		setModalInfo(name);
	};

	const renderModelContent = () => {
		if (modalInfo === "kunal") {
			return <AboutKunal />;
		}

		if (modalInfo === "deepti") {
			return <AboutDeepti />;
		}

		return <AboutSrishti />;
	};

  return (
    <div className={styles.mainSection}>
			<section className={styles.masterHead}>
				<Container maxWidth="xl" className={styles.headingContainer}>
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<ul className={styles.breadcrumb}>
							<li>ABOUT US</li>
						</ul>
						<Heading className={styles.lpoTitle}>
						  	{isMobile ? 
							  "Where Precision Meets Power in	Legal Outsourcing."
								:
								<>
									Where Precision <br />
									Meets Power in <br />
									Legal Outsourcing.
								</>
							}
						</Heading>
					</Grid>
				</Container>
			</section>
			<section className={styles.aboutLPO}>
			  <Grid container justifyContent={{ xs: "left", md:"flex-end"}}>
					<Grid size={{md:12, lg:5}}>
						<Animate.FadeUp
							direction="up"
							className={styles.aboutHeading}
						>
							At Glocal LPO, we redefine legal process outsourcing—bringing efficiency, accuracy, and expertise to the forefront.
						</Animate.FadeUp>

						<Animate.FadeUp
							direction="up"
							delay="100ms"
							className={styles.aboutText}
						>
							We deliver end-to-end litigation and managed services, covering document review, contract management, legal research, and compliance solutions with absolute precision. We don't just support your legal operations; we optimize, streamline, and elevate them.
						</Animate.FadeUp>

						<div className={styles.btnGroup}>
							<LinkButton
								to={routes["contact-us"].href}
								delay="200ms"
							>SCHEDULE A STRATEGY CALL WITH US</LinkButton>
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
						  <LinkButton
								to={routes["contact-us"].href}
								delay="200ms"
							>SCHEDULE A STRATEGY CALL WITH US</LinkButton>
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
								text="End-to-end encryption, strict compliance protocols, and watertight confidentiality—your data stays protected, always."
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
				<Grid
					container
					justifyContent="center"
					className={styles.metricsContentContainer}
				>
				  <Grid container size={11} columnSpacing={4} rowSpacing={{xs:3, sm:3}}>
						<Animate.FadeUp
							direction="up"
							element={Grid}
							elementProps={{
								size:{
									sm:12, md: 6, lg: 3
								},
								container: true,
								justifyContent: "center"
							}}
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
							  <span>Precision-driven processes to keep your cases watertight.</span>
							</div>
						</Animate.FadeUp>
						<Animate.FadeUp
							direction="up"
							element={Grid}
							elementProps={{
								size:{
									sm:12, md: 6, lg: 3
								},
								container: true,
								justifyContent: "center"
							}}
							delay="100ms"
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
						</Animate.FadeUp>
						<Animate.FadeUp
							direction="up"
							element={Grid}
							elementProps={{
								size:{
									sm:12, md: 6, lg: 3
								},
								container: true,
								justifyContent: "center"
							}}
							delay="200ms"
						>
							<div className={styles.metricsItem}>
								<div className={styles.metricsHeading}>180+</div>
								<div className={styles.metricsTitle}>
									Expert Paralegals & 
									Legal 
									Professionals
								</div>
							</div>
							<div className={styles.metricsText}>
							  	<span>Trained by top law firms, delivering unmatched expertise.</span>
							</div>
						</Animate.FadeUp>
						<Animate.FadeUp
							direction="up"
							element={Grid}
							elementProps={{
								size:{
									sm:12, md: 6, lg: 3
								},
								container: true,
								justifyContent: "center"
							}}
							delay="300ms"
						>
							<div className={styles.metricsItem}>
								<div className={styles.metricsHeading}>100%</div>
								<div className={styles.metricsTitle}>
							 		Data Security & 
									Confidentiality 
									Compliance
								</div>
							</div>
							<div className={styles.metricsText}>
							  <span>Your sensitive information stays protected, no exceptions.</span>
							</div>
						</Animate.FadeUp>
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
				<Container maxWidth="xl" className={styles.founderContainer}>
					<Grid
						size={12}
						justifyContent="center"
						className={styles.commonContainer}
					>
						<Heading className={styles.meetTheTeamHeading}>Meet the Team</Heading>
					</Grid>
					<Grid
						size={12}
						container
						justifyContent="center"
						className={styles.commonContainer}
						spacing={4}
					>
						<Grid
							size={{sm:12, md: 4}}
							className={styles.founderColumn}
						>
							<div className={styles.founderImage} onClick={() => handleModalOpen("kunal")}>
								<img src={kunalProfilePic} alt="" />
							</div>
							<div className={styles.founderTitle}>
								Visionary Behind Glocal LPO
							</div>
							<div className={styles.name}>
								Kunal Jaggi
							</div>
							<div className={styles.designation}>
								Founder & CEO, Glocal LPO
							</div>
							<div className={styles.description}>
								Kunal Jaggi, the force behind Glocal LPO, blends 20+ years of global outsourcing leadership with a sharp eye for legal innovation. As a people-first visionary, he's redefining legal support with precision, passion, and purpose.
							</div>
							<div className={styles.socialFootprint}>
								<a
									href="https://www.linkedin.com/in/kunal-jaggi-0b5a182/"
									target="_blank"
									rel="noopener noreferrer nofollow"
								>
									<img src={linkedIcon} alt="" className={styles.linkedinIcon} />
								</a>
							</div>
						</Grid>
						<Grid
							size={{sm:12, md: 4}}
							className={styles.founderColumn}
						>
							<div className={styles.founderImage} onClick={() => handleModalOpen("srishti")}>
								<img src={srishtiProfilePic} alt="" />
							</div>
							<div className={styles.founderTitle}>
								Driving Energy Behind Service Excellence
							</div>
							<div className={styles.name}>
								Srishti Khatri
							</div>
							<div className={styles.designation}>
								VP - Sales & Marketing, Glocal LPO
							</div>
							<div className={styles.description}>
								Srishti drives growth at Glocal LPO through strategic partnerships and sharp marketing expertise, strengthening brand presence and business expansion.
							</div>
							<div className={styles.socialFootprint}>
								<a
									href="https://www.linkedin.com/in/srishti-khatri-a13a86119/"
									target="_blank"
									rel="noopener noreferrer nofollow"
								>
									<img src={linkedIcon} alt="" className={styles.linkedinIcon} />
								</a>
							</div>
						</Grid>
						<Grid
							size={{sm:12, md: 4}}
							className={styles.founderColumn}
						>
							<div className={styles.founderImage} onClick={() => handleModalOpen("deepti")}>
								<img src={deeptiProfilePic} alt="" />
							</div>
							<div className={styles.founderTitle}>
								Strategic Architect of Growth & Expansion
							</div>
							<div className={styles.name}>
								Deepti Sisodiya
							</div>
							<div className={styles.designation}>
								Business Head. Glocal LPO
							</div>
							<div className={styles.description}>
								Deepti, Glocal LPO's Business Head, turns vision into impact. With sharp sales and marketing acumen, she leads 180+ legal pros, driving growth and delivering tailored, scalable solutions. A resilient leader and proud defense brat, Deepti blends insight with discipline to make Glocal your trusted legal partner.
							</div>
							<div className={styles.socialFootprint}>
								<a
									href="https://www.linkedin.com/in/deepti-sisodiya-b87170236/"
									target="_blank"
									rel="noopener noreferrer nofollow"
								>
									<img src={linkedIcon} alt="" className={styles.linkedinIcon} />
								</a>
							</div>
						</Grid>
					</Grid>
				</Container>
			</section>
			<Modal
				open={toggleModal}
				onClose={handleModalOpen}
			>
				
				{renderModelContent()}
			</Modal>
		</div>
  );
};

export default About;
