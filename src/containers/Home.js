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
	TextHighlight,
	LinkButton,
	QualityBox
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
								<Heading variant="secondary">
									Think of us as
								</Heading>
								<Heading className={styles.lpoTitleBig}>
									<TextHighlight text="The Power" /> <br/>
									<TextHighlight text="Behind your" /> <br/>
									<TextHighlight text="Legal Prowess." />
								</Heading>
							</Grid>
							<Grid
								size={4}
								className={styles.lpoSubtitle}
							>
								Every motion. <br/>
								Every clause. <br/>
								Every precedent — airtight, <br/>
								because we wrote it.
							</Grid>
						</Grid>
						<Grid
							size={4}
							className={styles.handleDetail}
						>
							<img src={layerLady} className={styles.ladyImage} />
							<div className={styles.detailCard}>
								<h2 className={styles.detailHeading}>
									We Handle <br/>
									the Details. <br/>
									You Win <br/>
									the Cases.
								</h2>
								<div className={styles.detail}>
									We are a premier paralegal support powerhouse, built to amplify efficiency, precision, and strategy for attorneys and law firms.<br />
									<br />
									From high-stakes litigation to meticulous contract drafting, we handle the complex, time-consuming documentation so that attorneys can focus on strategy, advocacy, and winning cases.
								</div>
								<div className={styles.detailLink}>
									there's more to us
									<img src={arrowBig} alt="" className={styles.arrowIcon} />
								</div>
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
							<Heading variant="secondary">
								Precision. Power. Partnership.
							</Heading>
							<Heading>
								<TextHighlight text="The Right Hands Behind Every Legal Move." />
							</Heading>
							<div className={styles.serviceText}>
								We are not just paper pushers—we are the backbone of every well-prepared case, ensuring airtight filings, seamless compliance, and ironclad legal groundwork.
							</div>
							<div className={styles.serviceLink}>
								<LinkButton to="#">Our services</LinkButton>
								<LinkButton to="#">consult with us</LinkButton>
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
							/>
							<QualityBox
								icon={iconClock}
								heading="Time-Saving Efficiency"
								text="We handle the heavy lifting, so attorneys can focus on strategy and advocacy."
							/>
							<QualityBox
								icon={iconTarget}
								heading="Unmatched Accuracy"
								text="No loopholes. No errors. Just seamless legal support."
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
			<section className={styles.legalSupportSection}>
				<Grid container size={12} justifyContent="center">
					<Grid size={8} className={styles.legalSupportItem}>
						<div className={styles.legalSupportHeading}>
							<Heading className={styles.headingSection1}>
								<TextHighlight text="Legal Support That's" />
							</Heading>
							<Heading>
								<TextHighlight text="Sharp, Seamless, and Smart." />
							</Heading>
						</div>
						<div className={styles.legalSupportText}>
							Whether it's a high-stakes litigation or an airtight contract, we handle it like a grandmaster plays chess—three moves ahead, with a checkmate always in sight.
						</div>
						<div>
							<img src={stampIcon} className={styles.stampIcon} alt="" />
						</div>
						<div className={styles.legalSupportLink}>
							Here's what we do best!
						</div>
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
				<UspSectionCards />
			</scrtion>
			<FlexibleFirePower />
		</>
  );
};

export default Home;
