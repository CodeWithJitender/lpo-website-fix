import React from 'react';
import { Container, Grid2 as Grid } from '@mui/material';

import layerLady from "@/assets/images/layer-lady.png";
import stampIcon from "@/assets/images/layer-stamp.png";

import iconPractice from "@/assets/icons/icon-practice.png";
import iconTarget from "@/assets/icons/icon-target.png";
import iconClock from "@/assets/icons/icon-clock.png";
import iconSave from "@/assets/icons/icon-save.png";

import arrowBig from "@/assets/icons/arrow-big.png";

import precisionSectionBg from "@/assets/images/supreme-court-building.png";

import {
	Heading,
	LinkButton,
	QualityBox,
	Animate
} from '@/components/common';

import ServiceBoxContainer from '@/components/Home/ServiceBoxContainer';
import AreaOfExpertise from "@/components/Home/AreaOfExpertise";
import FlexibleFirePower from '@/components/Home/FlexibleFirepower';
import ServiceInfo from '@/components/Home/ServiceInfo';
import UspSectionCards from '@/components/Home/UspSectionCards';

import * as styles from './Home.module.scss';

const Home = () => {
  return (
		<>
			<section className={styles.masterHead}>
				<Container maxWidth="xl">  
					<Grid
						container
						spacing={2}
						className={styles.commonContainer}
					>
						<Grid container size={8}>
							<Grid size={8}>
								<Heading variant="secondary" direction="down">
									Think of us as
								</Heading>
								<Heading className={styles.lpoTitleBig} direction="up">
									The Power <br/>
									Behind your <br/>
									Legal Prowess.
								</Heading>
							</Grid>
							<Grid
								size={4}
								className={styles.lpoSubtitle}
							>
								<Animate.FadeUp>
									Every motion. <br/>
									Every clause. <br/>
									Every precedent — airtight, <br/>
									because we wrote it.
								</Animate.FadeUp>
							</Grid>
						</Grid>
						<Grid
							size={4}
							className={styles.handleDetail}
						>
							<img src={layerLady} className={styles.ladyImage} />
							<div className={styles.detailCard}>
								<Animate.FadeUp direction="down">
									<h2 className={styles.detailHeading}>
										We Handle <br/>
										the Details. <br/>
										You Win <br/>
										the Cases.
									</h2>
								</Animate.FadeUp>
								<Animate.FadeUp direction="up" className={styles.detail}>
									We are a premier paralegal support powerhouse, built to amplify efficiency, precision, and strategy for attorneys and law firms.<br />
									<br />
									From high-stakes litigation to meticulous contract drafting, we handle the complex, time-consuming documentation so that attorneys can focus on strategy, advocacy, and winning cases.
								</Animate.FadeUp>
								<Animate.FadeUp direction="up" className={styles.detailLink}>
									there's more to us
									<img src={arrowBig} alt="" className={styles.arrowIcon} />
								</Animate.FadeUp>
							</div>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.serviceSection}>
				<div className={styles.sectionBackground}>
					<img src={precisionSectionBg} alt="" />
				</div>
				<Container maxWidth="xl" className={styles.precisionSection}>
					<Grid
						container
						columnSpacing={12}
						alignItems="flex-start"
						className={styles.commonContainer}
					>
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
						>
							<Heading variant="secondary" direction="down">
								Precision. Power. Partnership.
							</Heading>
							<Heading direction="up">
								The Right Hands Behind Every Legal Move.
							</Heading>
							<Animate.FadeUp direction="up" className={styles.serviceText}>
								We are not just paper pushers—we are the backbone of every well-prepared case, ensuring airtight filings, seamless compliance, and ironclad legal groundwork.
							</Animate.FadeUp>				
							<div className={styles.serviceLink}>
								<LinkButton to="#" delay="100ms">Our services</LinkButton>
								<LinkButton to="#" delay="200ms">consult with us</LinkButton>
							</div>
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
								heading="Bulletproof Documentation"
								text="Every document is drafted, reviewed, and refined to perfection."
								direction="right"
								delay="100ms"
							/>
							<QualityBox
								icon={iconClock}
								heading="Time-Saving Efficiency"
								text="We handle the heavy lifting, so attorneys can focus on strategy and advocacy."
								direction="left"
								delay="200ms"
							/>
							<QualityBox
								icon={iconTarget}
								heading="Unmatched Accuracy"
								text="No loopholes. No errors. Just seamless legal support."
								direction="right"
								delay="300ms"
							/>
							<QualityBox
								icon={iconPractice}
								heading="Versatile Practices"
								text="From litigation to compliance, we cover every legal need with precision."
								direction="left"
								delay="400ms"
							/>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.legalSupportSection}>
				<Grid container size={12} justifyContent="center">
					<Grid size={8} className={styles.legalSupportItem}>
						<div className={styles.legalSupportHeading}>
							<Heading className={styles.headingSection1} direction="down">
								Legal Support That's
							</Heading>
							<Heading direction="up">
								Sharp, Seamless, and Smart.
							</Heading>
						</div>
						<Animate.FadeUp
							direction="up"
							className={styles.legalSupportText}
						>
							Whether it's a high-stakes litigation or an airtight contract, we handle it like a grandmaster plays chess—three moves ahead, with a checkmate always in sight.
						</Animate.FadeUp>
						<Animate.ScaleIn>
							<img src={stampIcon} className={styles.stampIcon} alt="" />
						</Animate.ScaleIn>
						<Animate.FadeUp
							direction="up"
							className={styles.legalSupportLink}
						>
							Here's what we do best!
						</Animate.FadeUp>
					</Grid>
				</Grid>
			</section>
			<ServiceInfo />
			<AreaOfExpertise />
			<section className={styles.serviceWeOfferContainer}>
				<Grid container>
					<ServiceBoxContainer />
				</Grid>
			</section>
			<scrtion className={styles.uspSection}>
				<Grid container size={12} justifyContent="center">
					<Grid size={8}>
						<div className={styles.useSectionHeading}>
							<Heading variant="secondary" direction="down">
								Tailored Solutions.
							</Heading>
							<Heading direction="up">
								Global Standards.
							</Heading>
						</div>
						<Animate.FadeUp
							direction="up"
							className={styles.uspSectionText}
						>
							Elite expertise, seamless management, and airtight security—built to deliver, every time.
						</Animate.FadeUp>
					</Grid>
				</Grid>
				<UspSectionCards />
			</scrtion>
			<FlexibleFirePower />
		</>
  );
};

export default Home;
