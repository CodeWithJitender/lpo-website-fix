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
						<img src={layerLady} width="100%" height="100%" />
					</Grid>
				</Grid>
			</Container>
    </div>
  );
};

export default Home;
