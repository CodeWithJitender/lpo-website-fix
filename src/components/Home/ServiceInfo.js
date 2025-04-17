import React from "react";
import Grid from '@mui/material/Grid2';

import { Animate, ServiceCard, Carousel } from "@/components/common";

import usFlagImage from "@/assets/images/us-flag-image.png";
import serviceImage1 from "@/assets/images/home-service-image-1.jpg";
import serviceImage2 from "@/assets/images/home-service-image-2.jpg";
import serviceImage3 from "@/assets/images/home-service-image-3.jpg";

import { useDevice } from '@/context/DeviceContext';

import * as styles from "./ServiceInfo.module.scss";

const slides = [
  {
    key: 1,
    content: <ServiceCard
      id="01"
      title="Secretarial Services"
      image={serviceImage1}
      description="Our team is trained in legal workflow platforms and admin precision, ensuring every document, schedule, and task is handled with speed, security, and zero oversight. We bring US law firm standards to your back office."
			mobileDescription="We streamline legal ops with precision—calendar, docs, and admin handled the US law firm way."
    />
  },
  {
    key: 2,
    content: <ServiceCard
      id="02"
      title="Paralegal Services"
      image={serviceImage2}
      description="With deep domain expertise across multiple practice areas, our paralegals are skilled in drafting, discovery, medical summaries, and research—powered by top tools like LexisNexis, Westlaw, and AI."
			mobileDescription="From filings to research, our expert paralegals deliver accuracy, speed, and court-ready support."
    />
  },
  {
    key: 3,
    content: <ServiceCard
      id="03"
      title="Legal Services"
      image={serviceImage3}
      description="Our legal pros bring real-world litigation support from the US and Canada, specializing in drafting, immigration, contracts, and compliance. With full-cycle support and confidentiality at the core, we're the team behind your winning case."
			mobileDescription="End-to-end legal support—from contracts to litigation—backed by global experience and airtight process."
    />
  }
];

const ServiceInfo = () => {
	const { isMobile } = useDevice();

	const offsetFn = (offset) => {
		const defaultAnimation = {
			transform: "translateY(-50%) translateX(-40%) scale(0.75)",
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
				transform: `translateY(-50%) translateX(${isMobile ? '65%' : '90%'}) scale(0.75)`,
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
						xs: 0,
						sm: 0,
						md: 3,
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
						xs: 12,
						sm: 12,
						md: 6,
						lg: 6
					}}
					className={styles.carouselSection}
				>
					<Carousel
						cards={slides}
						offset={2}
						showArrows={false}
						// offsetFn={offsetFn}
					/>
        </Grid>
        <Grid
					size={{
						xs: 0,
						sm: 0,
						md: 3,
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

