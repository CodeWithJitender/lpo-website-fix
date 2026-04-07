import React, { useState } from "react";
import {
	Container,
	Grid2 as Grid
} from "@mui/material";
import { useLocation } from "react-router-dom";

import {
	Heading,
	LinkButton,
	ServiceCard,
	Carousel,
	Animate,
	ContactForm
} from '@/components/common';

import NotFound from "@/containers/NotFound";

import ServiceTypeBox from "@/components/Services/ServiceTypeBox";
import ServiceClipAnimation from "@/components/Services/ServiceClipAnimation";
import AccordianItem from "@/components/Services/AccordianItem";
import OurProcess from "@/components/Services/OurProcess";

import { useDevice } from '@/context/DeviceContext';

import { serviceCards, servicesInfo } from "@/utils/serviceInfo";
import { routes } from "@/utils/routesPath";

import expertiseSeal from "@/assets/images/confidential-seal.png";

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

  const handleChange = (panel) => () => {
    setExpanded(panel);
  };

	if (!serviceDetails) {
		return <NotFound />;
	}

	return (
		<div
			style={!isMobile ? {
				backgroundImage: `url(${serviceDetails.background})`,
				backgroundPosition: serviceDetails.backgroundPosition,
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat"
			} : {}}
		>
			<section
				className={styles.masterHead}
				style={isMobile ? {
					backgroundImage: `url(${serviceDetails.background})`,
					backgroundPosition: serviceDetails.backgroundPosition,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat"
				} : {} }
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
							<LinkButton
								to={routes["contact-us"].href}
								delay="200ms"
								className={styles.bookButton}
							>SCHEDULE A STRATEGY CALL WITH US</LinkButton>
						</div>
					</Grid>
				</Grid>
			</section>
			{
				serviceDetails.casesSpecializedIn ? (
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
				) : null
			}
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
							<Heading>
								{serviceDetails.accordionTitle || `Seamless ${serviceDetails.title} Paralegal & Legal Assistant Services`}
								{/* Seamless {serviceDetails.title} Paralegal & Legal Assistant Services */}
								</Heading>
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
				<ContactForm />
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
		</div>
	);
};

export default Service;
