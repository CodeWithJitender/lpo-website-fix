import React, { useState } from "react";
import {
	Container,
	Grid2 as Grid,
	TextField
} from "@mui/material";

import {
	Heading,
	LinkButton,
	ServiceCard,
	Carousel,
	Animate
} from '@/components/common';

import { CircleArrow } from "@/components/Icons";

import ServiceTypeBox from "@/components/Services/ServiceTypeBox";
import ServiceClipAnimation from "@/components/Services/ServiceClipAnimation";
import AccordianItem from "@/components/Services/AccordianItem";

import { useDevice } from '@/context/DeviceContext';

import serviceImage1 from "@/assets/images/service-1.jpg";
import serviceImage2 from "@/assets/images/service-2.jpg";
import serviceImage3 from "@/assets/images/service-3.jpg";
import serviceImage4 from "@/assets/images/service-4.jpg";
import serviceImage5 from "@/assets/images/service-5.jpg";
import serviceImage6 from "@/assets/images/service-6.jpg";
import expertiseSeal from "@/assets/images/confidential-seal.png";

import pencilIcon from "@/assets/icons/pencil-icon.png";
import playButtonIcon from "@/assets/icons/button-play-icon.png";

import accordianIcon1 from "@/assets/icons/accordian-icon-1.png";
import accordianIcon2 from "@/assets/icons/accordian-icon-2.png";
import accordianIcon3 from "@/assets/icons/accordian-icon-3.png";
import accordianIcon4 from "@/assets/icons/accordian-icon-4.png";
import accordianIcon5 from "@/assets/icons/accordian-icon-5.png";
import accordianIcon6 from "@/assets/icons/accordian-icon-6.png";

import serviceCardImage1 from "@/assets/images/service-image-1.jpg";
import serviceCardImage2 from "@/assets/images/service-image-2.jpg";
import serviceCardImage3 from "@/assets/images/service-image-3.jpg";
import serviceCardImage4 from "@/assets/images/service-image-4.jpg";
import serviceCardImage5 from "@/assets/images/service-image-5.jpg";
import serviceCardImage6 from "@/assets/images/service-image-6.jpg";
import serviceCardImage7 from "@/assets/images/service-image-7.jpg";
import serviceCardImage8 from "@/assets/images/service-image-8.jpg";
import serviceCardImage9 from "@/assets/images/service-image-9.jpg";
import serviceCardImage10 from "@/assets/images/service-image-10.jpg";

import * as styles from "./Service.module.scss";

const slides = [
	{
		key: 1,
		content: <ServiceCard
			id="01"
			title="Real Estate Litigation"
			image={serviceCardImage1}
			className={styles.serviceCard}
			description="From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results."
			mobileDescription="From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results."
		/>
	},
	{
		key: 2,
		content: <ServiceCard
			id="02"
			title="Personal Injury"
			image={serviceCardImage2}
			className={styles.serviceCard}
			description="Accidents happen, but accountability is non-negotiable. We draft demand letters with legal precision, ensuring your clients get the maximum compensation which they deserve."
			mobileDescription="Accidents happen, but accountability is non-negotiable. We draft demand letters with legal precision, ensuring your clients get the maximum compensation which they deserve."
		/>
	},
	{
		key: 3,
		content: <ServiceCard
			id="03"
			title="Civil Litigation Support"
			image={serviceCardImage3}
			className={styles.serviceCard}
			description="Every strong case starts with strategic documentation. From binding contracts to persuasive motions, we prepare the legal foundation that positions your clients for success."
			mobileDescription="Every strong case starts with strategic documentation. From binding contracts to persuasive motions, we prepare the legal foundation that positions your clients for success."
		/>
	},
	{
		key: 4,
		content: <ServiceCard
			id="04"
			title="Employment Law"
			image={serviceCardImage4}
			className={styles.serviceCard}
			description="Whether it's discrimination, retaliation, or wrongful termination, we prepare foolproof legal documentation to ensure justice is served."
			mobileDescription="Whether it's discrimination, retaliation, or wrongful termination, we prepare foolproof legal documentation to ensure justice is served."
		/>
	},
	{
		key: 5,
		content: <ServiceCard
			id="05"
			title="Workers' Compensation"
			image={serviceCardImage5}
			className={styles.serviceCard}
			description="From pre-trial to post-trial, we handle the documentation that ensures your claim is strong, your clients' rights are protected, and your case is bulletproof."
			mobileDescription="From pre-trial to post-trial, we handle the documentation that ensures your claim is strong, your clients' rights are protected, and your case is bulletproof."
		/>
	},
	{
		key: 6,
		content: <ServiceCard
			id="06"
			title="Contracts"
			image={serviceCardImage6}
			className={styles.serviceCard}
			description="From drafting to review, we ensure every contract puts your client in an advantageous position—clear, enforceable, and built to protect their interests."
			mobileDescription="From drafting to review, we ensure every contract puts your client in an advantageous position—clear, enforceable, and built to protect their interests."
		/>
	},
	{
		key: 7,
		content: <ServiceCard
			id="07"
			title="Business Litigation Support"
			image={serviceCardImage7}
			className={styles.serviceCard}
			description="When business disputes arise, the right legal support can make or break the case. We provide strategic analysis, and well-founded legal groundwork to keep you ahead in your legal practice."
			mobileDescription="When business disputes arise, the right legal support can make or break the case. We provide strategic analysis, and well-founded legal groundwork to keep you ahead in your legal practice."
		/>
	},
	{
		key: 8,
		content: <ServiceCard
			id="08"
			title="Immigration"
			image={serviceCardImage8}
			className={styles.serviceCard}
			description="Immigration is more than just paperwork—it's about securing the future. We prepare arguments, draft letters and fill forms with precision, ensuring a smooth, strategic path forward."
			mobileDescription="Immigration is more than just paperwork—it's about securing the future. We prepare arguments, draft letters and fill forms with precision, ensuring a smooth, strategic path forward."
		/>
	},
	{
		key: 9,
		content: <ServiceCard
			id="09"
			title="Family Law"
			image={serviceCardImage9}
			className={styles.serviceCard}
			description="Family law isn't just legal—it's personal. We review the documents in each case with strategy, discretion, and an unwavering commitment to securing the best outcome for you."
			mobileDescription="Family law isn't just legal—it's personal. We review the documents in each case with strategy, discretion, and an unwavering commitment to securing the best outcome for you."
		/>
	},
	{
		key: 10,
		content: <ServiceCard
			id="10"
			title="Bankruptcy"
			image={serviceCardImage10}
			className={styles.serviceCard}
			description="Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise."
			mobileDescription="Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise."
		/>
	}
];

const Service = () => {
	const [expanded, setExpanded] = useState('panel1');

	const { isMobile } = useDevice();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(panel);
  };

	const offsetFn = (offset) => {
		const defaultAnimation = {
			transform: `translateY(-50%) translateX(-25%) scale(0.75)`,
			opacity: "0.6"
		};

		if (offset === -1) {
			return {
				...defaultAnimation,
				transform: `translateY(-50%) translateX(${isMobile ? "-50%" : "-25%"}) scale(0.75)`,
				left: "-10%"
			};
		}

		if (offset === 1) {
			return {
				...defaultAnimation,
				left: "83%"
			};
		}

		return {
			transform: "translateY(-50%) translateX(-50%) scale(1)",
			opacity: "1"
		};
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
					<Grid size={12} justifyItems={{xs:"left", md:'center'}}>
						<Animate.ScaleIn
							direction="up"
							className={styles.plusIcon}
							element={Grid}
							elementProps={{
								size: 3
							}}
						>
							+
						</Animate.ScaleIn>
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
							Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.
						</Animate.FadeUp>

						<Animate.FadeUp
							direction="up"
							delay="100ms"
							className={styles.aboutText}
						>
							At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight.
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
							<ServiceTypeBox
								id="01"
								heading="Motor Vehicle Accidents Accidents"
								text="Car, truck, bicycle and motorcycle accident claims."
								image={serviceImage1}
								direction="right"
							/>
							<ServiceTypeBox
								id="02"
								heading="Medical Negligence & Malpractice"
								text="Ensuring Compliance with Legal Standards."
								image={serviceImage2}
								direction="left"
							/>
							<ServiceTypeBox
								id="03"
								heading="Slip & Fall or Trip and Fall Cases"
								text="Highlightin`g Maximum Injury Compensation."
								image={serviceImage3}
								direction="right"
								delay="100ms"
							/>
							<ServiceTypeBox
								id="04"
								heading="Dog Bite"
								text="Nerve damage, disfigurement, or long-term medical issues."
								image={serviceImage4}
								direction="left"
								delay="100ms"
							/>
							<ServiceTypeBox
								id="05"
								heading="Brain & Spinal Cord Injuries"
								text="Securing Justice for Those with Devastating Injuries."
								image={serviceImage5}
								direction="right"
								delay="200ms"
							/>
							<ServiceTypeBox
								id="06"
								heading="Workplace & Construction Accidents"
								text="Protecting Legal Rights for Workplace Injuries."
								image={serviceImage6}
								direction="left"
								delay="200ms"
							/>
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
							<Heading>Services We Offer in Personal Injury Cases:</Heading>
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
							<AccordianItem
								icon={accordianIcon1}
								id="panel1"
								onChange={handleChange}
								heading="Client Onboarding & Case Merit Evaluation"
								expanded={expanded}
							/>
							<AccordianItem
								icon={accordianIcon2}
								id="panel2"
								onChange={handleChange}
								heading="Medical Record Retrieval & Summarization"
								expanded={expanded}
							/>
							<AccordianItem
								icon={accordianIcon3}
								id="panel3"
								onChange={handleChange}
								heading="Document Drafting & Discovery Support"
								expanded={expanded}
							/>
							<AccordianItem
								icon={accordianIcon4}
								id="panel4"
								onChange={handleChange}
								heading="Legal Research, Case Law Review & Legal Interpretation"
								expanded={expanded}
							/>
							<AccordianItem
								icon={accordianIcon5}
								id="panel5"
								onChange={handleChange}
								heading="Litigation & Trial Support"
								expanded={expanded}
							/>
							<AccordianItem
								icon={accordianIcon6}
								id="panel6"
								onChange={handleChange}
								heading="Administrative Tasks"
								expanded={expanded}
							/>
						</Grid>
					</Grid>
				</Container>
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
								showArrows={false}
								offsetFn={offsetFn}
							/>
						</Grid>
					</Grid>
				</Grid>
			</section>
		</>
	);
};

export default Service;
