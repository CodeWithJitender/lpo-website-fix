import React from "react";
import {
	Container,
	Grid2 as Grid,
	TextField
} from "@mui/material";

import { Heading, LinkButton, Animate } from '@/components/common';

import { CircleArrow } from "@/components/Icons";

import ServiceClipAnimation from "@/components/Services/ServiceClipAnimation";
import ServiceBoxContainer from '@/components/Home/ServiceBoxContainer';

import { useDevice } from '@/context/DeviceContext';

import { routes } from "@/utils/routesPath";

import pencilIcon from "@/assets/icons/pencil-icon.png";

import * as styles from "./Service.module.scss";

const Service = () => {
	const { isMobile } = useDevice();

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
						<Heading className={styles.lpoTitle}>
							{isMobile ? 
							  "Your Legal Ally in Every Step of the Journey."
								:
								<>
									Your Legal Ally<br />
									in Every Step <br />
									of the Journey.
								</>
							}
						</Heading>
					</Grid>
				</Container>
			</section>
			<section className={styles.aboutLPO}>
				<Grid container justifyContent="flex-end">
					<Grid size={{md:12, lg:5}}>
						<Animate.FadeUp
							direction="up"
							className={styles.aboutHeading}
						>
							At Glocal LPO, we provide top-tier outsourced legal services that empower attorneys across various practice areas.
						</Animate.FadeUp>

						<Animate.FadeUp
							direction="up"
							delay="100ms"
							className={styles.aboutText}
						>
							From business litigation to family law, our dedicated team ensures that every document, strategy, and detail is executed with precision, giving your clients the best chance at success. Whether you need support in contracts, criminal law, or intellectual property, we’re here to streamline your legal processes and elevate your practice.
						</Animate.FadeUp>

						<div>
							<LinkButton
								to={routes["contact-us"].href}
								delay="200ms"
								className={styles.bookButton}
							>SCHEDULE A STRATEGY CALL WITH US</LinkButton>
						</div>
					</Grid>
				</Grid>
			</section>
			<section className={styles.serviceHeadingContainer}>
				<Container maxWidth="xl">
					<Grid
						size={12}
						className={styles.commonContainer}
						flexDirection="column"
					>
						<Heading>Types of Services We Specialize In:</Heading>
					</Grid>
				</Container>
			</section>
			<section className={styles.serviceWeOfferContainer}>
				<Grid container>
					<ServiceBoxContainer />
				</Grid>
			</section>
			<section className={styles.silhoutContainer}>
				<Grid size={12}>
					<ServiceClipAnimation />
				</Grid>
			</section>
			<section className={styles.formSection}>
				<Container maxWidth="xl">
					<Grid
						container
						className={styles.commonContainer}
						spacing={3}
						alignItems="flex-start"
					>
						<Grid size={{md:12, lg: 4}}>
							<div>
								<img src={pencilIcon} className={styles.formPensilIcon} alt="" />
							</div>
							<div className={styles.formHeading}>
								Tell us what you need, 
								and we'll map the way 
								forward to victory.
							</div>
							<div className={styles.formText}>
								At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight.
							</div>
						</Grid>
						<Grid container size={{md: 12, lg: 8}}>
							<Grid size={12} className={styles.requiredFieldTitle}>
								All the fields marked with * are required
							</Grid>
							<Grid size={12} container spacing={3}>
								<Grid size={{xs: 12, md: 6}}>
									<TextField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										label="FIRST NAME"
										fullWidth={true}
										variant="standard"
									/>
								</Grid>
								<Grid size={{ xs: 12, md: 6 }}>
									<TextField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										label="LAST NAME"
										fullWidth={true}
										variant="standard"
									/>
								</Grid>
								<Grid size={{ xs: 12, md: 6 }}>
									<TextField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										label="EMAIL"
										type="email"
										fullWidth={true}
										variant="standard"
									/>
								</Grid>
								<Grid size={{ xs: 12, md: 6 }}>
									<TextField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										label="COMPANY"
										fullWidth={true}
										variant="standard"
									/>
								</Grid>
								<Grid size={{ xs: 12, md: 6 }}>
									<TextField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										label="JOB TITLE"
										fullWidth={true}
										variant="standard"
									/>
								</Grid>
								<Grid size={{ xs: 12, md: 6 }}>
									<TextField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										label="PHONE"
										type="tel"
										fullWidth={true}
										variant="standard"
									/>
								</Grid>
								<Grid size={12}>
									<TextField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										label="PLEASE DESCRIBE THE TYPE OF SERVICE YOU ARE INTERESTED IN"
										fullWidth={true}
										variant="standard"
									/>
								</Grid>
							</Grid>
							<Grid size={12} className={styles.submitWrapper}>
								<CircleArrow fill="#564847" className={styles.formSubmitButton} />
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
		</>
	);
};

export default Service;
