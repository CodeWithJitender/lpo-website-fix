import React, { useState } from "react";
import {
	Container,
	Grid2 as Grid,
	Accordion,
	AccordionSummary,
	AccordionDetails
} from "@mui/material";

import {
	Heading,
	LinkButton
} from '@/components/common';

import ServiceTypeBox from "@/components/Services/ServiceTypeBox";

import serviceImage1 from "@/assets/images/service-1.jpg";
import serviceImage2 from "@/assets/images/service-2.jpg";
import serviceImage3 from "@/assets/images/service-3.jpg";
import serviceImage4 from "@/assets/images/service-4.jpg";
import serviceImage5 from "@/assets/images/service-5.jpg";
import serviceImage6 from "@/assets/images/service-6.jpg";

import * as styles from "./Service.module.scss";
import Slideshow from "../components/common/Slideshow";

const Service = () => {
	const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
							<li>OUR SERVICES</li>
						</ul>
						<Heading variant="secondary">
							Personal Injury Cases
						</Heading>
						<Heading className={styles.lpoTitle}>
							Strategic Support <br />
							for Injury Claims <br />
							That Win.
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
							Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.
						</div>

						<div className={styles.aboutText}>
							At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight.
						</div>

						<div>
							<LinkButton to="#">
								BOOK AN INTERVIEW WITH A PARALEGAL
							</LinkButton>
						</div>
					</Grid>
				</Grid>
			</section>
			<section>
				<Container maxWidth="xl">
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<Grid size={12}>
							<Heading>Types of Cases We Specialize In:</Heading>
						</Grid>
						<Grid
							container
							size={12}
							spacing={4}
							className={styles.typeOfServiceBoxContainer}
						>
							<ServiceTypeBox
								id="01"
								heading="Motor Vehicle Accidents Accidents"
								text="Car, truck, bicycle and motorcycle accident claims."
								image={serviceImage1}
							/>
							<ServiceTypeBox
								id="02"
								heading="Medical Negligence & Malpractice"
								text="Ensuring Compliance with Legal Standards."
								image={serviceImage2}
							/>
							<ServiceTypeBox
								id="03"
								heading="Slip & Fall or Trip and Fall Cases"
								text="Highlightin`g Maximum Injury Compensation."
								image={serviceImage3}
							/>
							<ServiceTypeBox
								id="04"
								heading="Dog Bite"
								text="Nerve damage, disfigurement, or long-term medical issues."
								image={serviceImage4}
							/>
							<ServiceTypeBox
								id="05"
								heading="Brain & Spinal Cord Injuries"
								text="Securing Justice for Those with Devastating Injuries."
								image={serviceImage5}
							/>
							<ServiceTypeBox
								id="06"
								heading="Workplace & Construction Accidents"
								text="Protecting Legal Rights for Workplace Injuries."
								image={serviceImage6}
							/>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section>
				<Container maxWidth="xl">
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<Grid size={12}>
							<Heading>Services We Offer in Personal Injury Cases:</Heading>
						</Grid>
						<Grid
							container
							size={12}
							spacing={2}
							className={styles.accordionContainer}
						>
							<Accordion
								expanded={expanded === 'panel1'}
								onChange={handleChange('panel1')}
								className={styles.accordionRoot}
							>
								<AccordionSummary
									className={styles.accordianHeader}
									aria-controls="panel1d-content"
									id="panel1d-header"
									classes={{
										expanded: styles.accordionExpended
									}}
								>
									Client Onboarding & Case Merit Evaluation
								</AccordionSummary>
								<AccordionDetails className={styles.accordianDetail}>
									<Grid size={12} spacing={4} container>
										<Grid size={6}>
											Medical Records - 
The Linchpins of every personal injury 
claim’s success.
										</Grid>
										<Grid container size={6}>
											<Grid size={12}>WE HELP YOU BY:</Grid>
											<Grid size={12}>
												<ul>
													<li>Retrieving & organizing medical records</li>
													<li>Patient Record Extraction</li>
													<li>Summarizing diagnosis & treatments</li>
													<li>Creating medical chronologies & injury assessments</li>
													<li>Medical History Compilation</li>
													<li>Medical Billing Summarization</li>
													<li>Privilege Logs</li>
												</ul>
											</Grid>
										</Grid>
									</Grid>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded === 'panel2'}
								onChange={handleChange('panel2')}
							>
								<AccordionSummary
									aria-controls="panel2d-content"
									id="panel2d-header"
								>
									Collapsible Group Item #2
								</AccordionSummary>
								<AccordionDetails>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
									malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
									sit amet blandit leo lobortis eget.
								</AccordionDetails>
							</Accordion>
						</Grid>
					</Grid>
				</Container>
			</section>
		</>
	);
};

export default Service;
