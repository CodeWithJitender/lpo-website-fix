import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

import layerLady from "@/assets/images/layer-lady.png";

import * as styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.masterHead}>
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
				Hemant
			</Container>
    </div>
  );
};

export default Home;
