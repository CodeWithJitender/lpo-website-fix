import React from "react";
import Grid from '@mui/material/Grid2';

import { Animate, ServiceCard, Carousel } from "@/components/common";

import usFlagImage from "@/assets/images/us-flag-image.png";
import serviceImage1 from "@/assets/images/other-key-image-1.jpg";
import serviceImage2 from "@/assets/images/other-key-image-2.png";
import serviceImage3 from "@/assets/images/other-key-image-3.png";

import { useDevice } from '@/context/DeviceContext';

import * as styles from "./ServiceInfo.module.scss";

const slides = [
  {
    key: 1,
    content: <ServiceCard
      id="01"
      title="Real Estate Litigation"
      image={serviceImage1}
      description="From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results."
			mobileDescription="From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future."
    />
  },
  {
    key: 2,
    content: <ServiceCard
      id="02"
      title="Employment Law"
      image={serviceImage2}
      description="From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results."
			mobileDescription="From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future."
    />
  },
  {
    key: 3,
    content: <ServiceCard
      id="03"
      title="Workers' Compensation"
      image={serviceImage3}
      description="From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results."
			mobileDescription="From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future."
    />
  }
];

const ServiceInfo = () => {
	const { isMobile } = useDevice();

	const offsetFn = (offset) => {
		const defaultAnimation = {
			transform: "translateY(-50%) translateX(-25%) scale(0.75)",
			opacity: "0.5"
		};

		if (offset === -1) {
			return {
				...defaultAnimation,
				transform: "translateY(-50%) translateX(-10%) scale(0.75)",
				left: "0"
			};
		}

		if (offset === 1) {
			return {
				...defaultAnimation,
				transform: `translateY(-50%) translateX(${isMobile ? '59%' : '100%'}) scale(0.75)`,
				left: "0"
			};
		}

		return {
			transform: `translateY(-50%) translateX(${isMobile ? '27%' : '45%'}) scale(1)`,
			opacity: "1",
			left: "0",
		};
	};

  return (
    <section className={styles.serviceInfoSection}>
      <Grid container size={12} justifyContent="center">
        <Grid
					size={{
						xs: 1,
						sm: 1,
						md: 1,
						lg: 3
					}}
					className={styles.usFlagBox}
				>
          <Animate.FadeUp direction="right">
            <img src={usFlagImage} alt="US Flag" />
          </Animate.FadeUp>
        </Grid>
        <Grid
					size={{
						xs: 10,
						sm: 10,
						md: 10,
						lg: 6
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
        <Grid
					size={{
						xs: 1,
						sm: 1,
						md: 1,
						lg: 3
					}}
					className={styles.usFlagBox}
				>
          <Animate.FadeUp direction="left">
            <img src={usFlagImage} alt="US Flag" />
          </Animate.FadeUp>
        </Grid>
      </Grid>
    </section>
  );
};

export default ServiceInfo;

