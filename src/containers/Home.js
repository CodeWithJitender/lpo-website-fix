import React, { useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

import layerLady from "@/assets/images/layer-lady.png";
import stampIcon from "@/assets/images/layer-stamp.png";

import iconPractice from "@/assets/icons/icon-practice.png";
import iconTarget from "@/assets/icons/icon-target.png";
import iconClock from "@/assets/icons/icon-clock.png";
import iconSave from "@/assets/icons/icon-save.png";

import uspIcon1 from "@/assets/icons/usp-icon-1.png";
import uspIcon2 from "@/assets/icons/usp-icon-2.png";
import uspIcon3 from "@/assets/icons/usp-icon-3.png";
import uspIcon4 from "@/assets/icons/usp-icon-4.png";

import arrowBig from "@/assets/icons/arrow-big.png";

import winButtonIcon from "@/assets/images/win-button-icon.png";

import TextHighlight from '@/components/common/TextHighlight';

import ServiceBox from '@/components/Home/ServiceBox';
import AreaOfExpertise from "@/components/Home/AreaOfExpertise";
import FlexibleFirePower from '@/components/Home/FlexibleFirepower';
import ServiceInfo from '@/components/Home/ServiceInfo';

import * as styles from './Home.module.scss';

const Home = () => {
	const textRef = useRef(null);
  const crowdsRef = useRef(null);

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
								<h2 className={styles.thinkOnUs}>Think of us as</h2>
								<h1 className={styles.lpoTitle}>
									<TextHighlight text="The Power" /> <br/>
									<TextHighlight text="Behind your" /> <br/>
									<TextHighlight text="Legal Prowess." />
								</h1>
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
				<Container maxWidth="xl">
					<Grid
						container
						columnSpacing={12}
						alignItems="flex-start"
						className={styles.commonContainer}
					>
						<Grid container size={6} spacing={0} style={{
							alignSelf: "flex-start",
						}}>
							<h2 className={styles.thinkOnUs} ref={textRef}>
								Precision. Power. Partnership.
							</h2>
							<h1 className={`${styles.lpoTitle} ${styles.lpoTitleSmall}`}>
								<TextHighlight text="The Right Hands Behind Every Legal Move." />
							</h1>
							<div className={styles.serviceText}>
								We are not just paper pushers—we are the backbone of every well-prepared case, ensuring airtight filings, seamless compliance, and ironclad legal groundwork.
							</div>
							<div className={styles.serviceLink}>
								<a href="#" className={styles.serviceButton}>Our services</a>
								<a href="#" className={styles.serviceButton}>consult with us</a>
							</div>
						</Grid>
						<Grid
							size={6}
							spacing={0}
							container
						>
							<Grid size={6} className={styles.serviceBox}>
								<div className={styles.serviceIcon}>
									<img src={iconSave} alt="" />
								</div>
								<div className={styles.serviceHeading}>
									Bulletproof Documentation
								</div>
								<div>
									Every document is drafted, reviewed, and refined to perfection.
								</div>
							</Grid>
							<Grid size={6} className={styles.serviceBox}>
								<div className={styles.serviceIcon}>
									<img src={iconClock} alt="" />
								</div>
								<div className={styles.serviceHeading}>
									Time-Saving Efficiency
								</div>
								<div>
									We handle the heavy lifting, so attorneys can focus on strategy and advocacy.
								</div>
							</Grid>
							<Grid size={6} className={styles.serviceBox}>
								<div className={styles.serviceIcon}>
									<img src={iconTarget} alt="" />
								</div>
								<div className={styles.serviceHeading}>
									Unmatched Accuracy
								</div>
								<div>
									No loopholes. No errors. Just seamless legal support.
								</div>
							</Grid>
							<Grid size={6} className={styles.serviceBox}>
								<div className={styles.serviceIcon}>
									<img src={iconPractice} alt="" />
								</div>
								<div className={styles.serviceHeading}>
									Versatile Practices
								</div>
								<div>
									From litigation to compliance, we cover every legal need with precision.
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.legalSupportSection}>
				<Grid container size={12} justifyContent="center">
					<Grid size={8} className={styles.legalSupportItem}>
						<div className={styles.legalSupportHeading}>
							<div className={styles.headingSection1}>
								<TextHighlight text="Legal Support That's" />
							</div>
							<div>
								<TextHighlight text="Sharp, Seamless, and Smart." />
							</div>
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
					<ServiceBox />
					<ServiceBox />
					<ServiceBox />
					<ServiceBox />
					<ServiceBox />
					<ServiceBox />
					<ServiceBox />
					<ServiceBox />
					<ServiceBox />
					<ServiceBox />
					<ServiceBox />
					<ServiceBox />
				</Grid>
			</section>
			<section className={styles.uspSection}>
				<Grid container size={12}>
					<Grid
						container
						size={3}
						className={`${styles.uspItem} ${styles.uspItem1}`}
						display="flex"
						alignItems="flex-end"
					>
						<Grid size={10}>
							<div className={styles.uspItemHeading}>
								Teams Trained By
								US Law Firms
							</div>
							<div className={styles.uspItemInfo}>
								Trained by the Best. 
								Built for the Rest.
							</div>
						</Grid>
						<Grid
							size={2}
							display="flex"
							justifyContent="flex-end"
							className={styles.uspItemImage}
						>
							<img src={uspIcon1} alt="" />
						</Grid>
					</Grid>
					<Grid
						container
						size={3}
						className={`${styles.uspItem} ${styles.uspItem2}`}
						display="flex"
						alignItems="flex-end"
					>
						<Grid size={10}>
							<div className={styles.uspItemHeading}>
								Dedicated Sales
								Manager and CRM
							</div>
							<div className={styles.uspItemInfo}>
								One Point of Contact. 
								Zero Room for Errors.
							</div>
						</Grid>
						<Grid
							size={2}
							display="flex"
							justifyContent="flex-end"
							className={styles.uspItemImage}
						>
							<img src={uspIcon2} alt="" />
						</Grid>
					</Grid>
					<Grid
						container
						size={3}
						className={`${styles.uspItem} ${styles.uspItem3}`}
						display="flex"
						alignItems="flex-end"
					>
						<Grid size={10}>
							<div className={styles.uspItemHeading}>
								Expertise in Managing
								Entire Case Lifecycle
							</div>
							<div className={styles.uspItemInfo}>
								From First Filing to Final 
								Verdict—We've Got It Covered.
							</div>
						</Grid>
						<Grid
							size={2}
							display="flex"
							justifyContent="flex-end"
							className={styles.uspItemImage}
						>
							<img src={uspIcon3} alt="" />
						</Grid>
					</Grid>
					<Grid
						container
						size={3}
						className={`${styles.uspItem} ${styles.uspItem4}`}
						display="flex"
						alignItems="flex-end"
					>
						<Grid size={10}>
							<div className={styles.uspItemHeading}>
								Technology and Data
								Security Driven
							</div>
							<div className={styles.uspItemInfo}>
								Ironclad Security. 
								Bulletproof Precision.
							</div>
						</Grid>
						<Grid
							size={2}
							display="flex"
							justifyContent="flex-end"
							className={styles.uspItemImage}
						>
							<img src={uspIcon4} alt="" />
						</Grid>
					</Grid>
				</Grid>
			</section>
			<FlexibleFirePower />
			<section className={styles.letsWinTogetherSection}>
				<Grid container size={12} justifyContent="center">
						<Grid container size={9} alignItems="center">
							<Grid size={3}>
								<div className={styles.infoSmallSection}>
									Let's get our A game to the court.
								</div>
								<div className={styles.infoBigSection}>
									<div className={styles.infoHeading1}>Let's win—</div>
									<div className={styles.infoHeading2}>together.</div>
								</div>
							</Grid>
							<Grid size={8} className={styles.infoTextSection}>
								Pick a time, choose a platform—Zoom, Teams, or a good old-fashioned call. Schedule a meeting and we'll make things happen.
							</Grid>
							<Grid size={1} className={styles.winButton}>
								<img src={winButtonIcon} alt="" />
							</Grid>
						</Grid>
				</Grid>
			</section>
		</>
  );
};

export default Home;
