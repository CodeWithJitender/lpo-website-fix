import React, { useState } from "react";
import {
	Container,
	Grid2 as Grid,
	TextField
} from "@mui/material";
import { useLocation } from "react-router-dom";

import {
	Heading,
	LinkButton,
	ServiceCard,
	Carousel,
	Animate
} from '@/components/common';

import NotFound from "@/containers/NotFound";

import { CircleArrow } from "@/components/Icons";

import ServiceTypeBox from "@/components/Services/ServiceTypeBox";
import ServiceClipAnimation from "@/components/Services/ServiceClipAnimation";
import AccordianItem from "@/components/Services/AccordianItem";
import OurProcess from "@/components/Services/OurProcess";

import { useDevice } from '@/context/DeviceContext';

import expertiseSeal from "@/assets/images/confidential-seal.png";

import playButtonIcon from "@/assets/icons/button-play-icon.png";

import { serviceCards, servicesInfo } from "@/utils/serviceInfo";

import * as styles from "./ServiceDetails.module.scss";

const Service = () => {
	const [expanded, setExpanded] = useState('panel0');
	const { pathname } = useLocation();

	const { isMobile } = useDevice();

	const serviceName = pathname.match(/[^/]+$/);
	const serviceDetails = servicesInfo[serviceName[0]] || null;

	const slides = [];

	let serviceId = 1;
	serviceCards.forEach((service, index) => {
		if (service.link !== pathname) {
			slides.push({
				key: index,
				content: <ServiceCard
					id={`0${serviceId}`}
					title={service.title}
					link={service.link}
					image={service.image}
					className={styles.serviceCard}
					description={service.description}
					mobileDescription={service.mobileDescription}
				/>
			});
			serviceId = serviceId + 1;
		}
	});

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(panel);
  };

	if (!serviceDetails) {
		return <NotFound />;
	}

	return (
		<>
			<section
				className={styles.masterHead}
				style={{
					backgroundImage: `url(${serviceDetails.background})`
				}}
			>
				<Container maxWidth="xl" className={styles.headingContainer}>
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<ul className={styles.breadcrumb}>
							<li>OUR SERVICES</li>
						</ul>
						<Heading variant="secondary">
							{serviceDetails.title} Cases
						</Heading>
						<Heading className={styles.lpoTitle}>
							{serviceDetails.heading}
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
							{serviceDetails.description.mainDescription}
						</Animate.FadeUp>

						<Animate.FadeUp
							direction="up"
							delay="100ms"
							className={styles.aboutText}
						>
							{serviceDetails.description.smallDesription}
						</Animate.FadeUp>

						<div>
							<LinkButton to="#" className={styles.bookButton}>
								<span>BOOK AN INTERVIEW WITH A PARALEGAL</span>
								{!isMobile && <span><img src={playButtonIcon} alt="" /></span>}
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
							{
								serviceDetails.casesSpecializedIn.map((caseInfo, index) => (
									<ServiceTypeBox
										key={caseInfo.id}
										id={caseInfo.id}
										heading={caseInfo.title}
										text={caseInfo.description}
										image={caseInfo.image}
										direction={index % 2 === 0 ? "right" : "left"}
									/>
								))
							}
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.silhoutContainer}>
				<Grid size={12}>
					<ServiceClipAnimation />
				</Grid>
			</section>
			<section className={styles.serviceAccordianHeadingSection}>
				<Container maxWidth="xl">
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<Grid size={12}>
							<Heading>Services We Offer in {serviceDetails.title} Cases:</Heading>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.serviceAccordianSection}>
				<Container maxWidth="xl">
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<Grid
							container
							size={12}
							spacing={2}
							className={styles.accordionContainer}
						>
							{
								serviceDetails.accordianItems.map((item, index) => (
									<AccordianItem
										key={index}
										id={`panel${index}`}
										onChange={handleChange}
										item={item}
										expanded={expanded}

									/>
								))
							}
						</Grid>
					</Grid>
				</Container>
			</section>
			<OurProcess />
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
								<Heading className={styles.getInTouchHeading}>Get In Touch</Heading>
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
			<section className={styles.expertiseSection}>
				<div className={styles.expertiseStamp}>
					<img src={expertiseSeal} alt="" />
				</div>
				<Grid container size={12}>
					<Grid size={12} justifyItems="center">
						<Heading className={styles.expertiseHeading}>
							Other Key Areas of Expertise
						</Heading>
					</Grid>
					<Grid size={12} justifyContent="center" container>
						<Grid
							size={{
								xs: 12,
								sm: 12,
								md: 6
							}}
							className={styles.carouselSection}
						>
							<Carousel
								cards={slides}
								offset={2}
								showArrows={true}
							/>
						</Grid>
					</Grid>
				</Grid>
			</section>
		</>
	);
};

export default Service;
