import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

import layerLady from "@/assets/images/layer-lady.png";
import stampIcon from "@/assets/images/layer-stamp.png";

import iconPractice from "@/assets/images/icon-practice.png";
import iconTarget from "@/assets/images/icon-target.png";
import iconClock from "@/assets/images/icon-clock.png";
import iconSave from "@/assets/images/icon-save.png";
import usFlagImage from "@/assets/images/us-flag-image.png";
import areaOfExpertiese from '@/assets/images/area-of-expertise.png';

import ServiceBox from '@/components/Home/ServiceBox';

import * as styles from './Home.module.scss';

const Home = () => {
  return (
		<>
			<section className={styles.masterHead}>
				<Container maxWidth="xl">  
					<Grid container spacing={2}>
						<Grid container size={8}>
							<Grid size={8}>
								<h2 className={styles.thinkOnUs}>Think of us as</h2>
								<h1 className={styles.lpoTitle}>
									The Power <br/>
									Behind your <br/>
									Legal Prowess.
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
							<img className={styles.ladyImage} src={layerLady} />
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
									there’s more to us
								</div>
							</div>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.serviceSection}>
				<Container maxWidth="xl">
					<Grid container spacing={2}>
						<Grid container size={6} style={{
							alignSelf: "flex-start",
						}}>
							<h2 className={styles.thinkOnUs}>Precision. Power. Partnership.</h2>
							<h1 className={styles.lpoTitle}>
								The Right Hands Behind 
								Every Legal Move.
							</h1>
							<div className={styles.serviceText}>
								We are not just paper pushers—we are the backbone of every well-prepared case, ensuring airtight filings, seamless compliance, and ironclad legal groundwork.
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
					<Grid size={6} className={styles.legalSupportItem}>
						<div className={styles.legalSupportHeading}>
							<div className={styles.headingSection1}>Legal Support That's</div>
							<div>Sharp, Seamless, and Smart.</div>
						</div>
						<div className={styles.legalSupportText}>
							Whether it's a high-stakes litigation or an airtight contract, we handle it like a grandmaster plays chess—three moves ahead, with a checkmate always in sight.
						</div>
						<div>
							<img src={stampIcon} alt="" />
						</div>
						<div className={styles.legalSupportLink}>
							Here's what we do best!
						</div>
					</Grid>
				</Grid>
			</section>
			<section className={styles.serviceInfoSection}>
				<Grid container size={12} justifyContent="center">
					<Grid size={3} className={styles.usFlagBox}>
						<img src={usFlagImage} alt="" />
					</Grid>
					<Grid size={6}>
						
					</Grid>
					<Grid size={3} className={styles.usFlagBox}>
						<img src={usFlagImage} alt="" />
					</Grid>
				</Grid>
			</section>
			<section className={styles.areaOfExpertiseSection}>
				<Grid container size={12}>
					<img src={areaOfExpertiese} alt="" className={styles.expertiseAreaImage} />
				</Grid>
				<Grid container size={12} justifyContent="center">
					<Grid size={6} className={styles.areaOfExpertieseBox}>
						<div className={styles.legalSupportHeading}>
							<div className={styles.headingSection1}>We Work Behind the Scenes,</div>
							<div>So You Can Own the Courtroom.</div>
						</div>
						<div className={styles.legalSupportText}>
							With expertise spanning civil litigation, real estate, business law, employment law, family law, and more, we anticipate challenges before they arise, delivering documents that hold up under scrutiny and strategies that keep attorneys ahead of the curve.
						</div>
					</Grid>
				</Grid>
			</section>
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
		</>
  );
};

export default Home;
