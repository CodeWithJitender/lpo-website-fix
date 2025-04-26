import React from 'react';
import { Container, Grid2 as Grid } from '@mui/material';
import Slider from "react-slick";

import {
	Heading,
	Animate,
	ContactForm
} from '@/components/common';

import { WritingPen, ArrowUpFilled } from "@/components/Icons";

import * as styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <>
			<section className={styles.masterHead}>
				<Container maxWidth="xl" className={styles.headingContainer}>
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<ul className={styles.breadcrumb}>
							<li>CONTACT US</li>
						</ul>
						<Heading className={styles.lpoTitle}>
							Let's Talk Law.
						</Heading>
						<Heading variant="secondary">
							Have questions? We've got answers<br/>
							- and solutions.
						</Heading>
					</Grid>
				</Container>
				<div className={styles.aboutLPO}>
					<Grid container justifyContent={{ xs: "left", md:"flex-end"}}>
						<Grid size={{md:12, lg:5}}>
							<Animate.FadeUp
								direction="up"
								className={styles.aboutHeading}
							>
								Whether you're ready to outsource or simply exploring options, our team is here to listen, advise, and act.
							</Animate.FadeUp>

							<Animate.FadeUp
								direction="up"
								delay="100ms"
								className={styles.aboutText}
							>
								Reach out to schedule a consultation or ask a quick ques tion-whatever vour need, we're alwavs within reach.
							</Animate.FadeUp>
						</Grid>
					</Grid>
					<Grid size={12} className={styles.dividerContainer}>
						<div className={styles.sectionDivider}><WritingPen /></div>
					</Grid>
				</div>
			</section>
			<section className={styles.formSection}>
				<ContactForm section="contact" />
			</section>
			<section className={styles.contactAddressContainer}>
				<Container maxWidth="xl" className={styles.founderContainer}>
					<Grid
						size={12}
						container
						className={styles.addressContainer}
					>
						<Grid
							size={12}
							spacing={3}
							container
							className={styles.infoContainer}
						>
							<Grid
								size={{
									md: 12,
									lg: 3
								}}
							>
								<div className={styles.title}>
									Operations Office
								</div>
								<div className={styles.address}>
									B 73, Block B, Sector 57, Noida, Uttar Pradesh 201301, India
								</div>
							</Grid>
							<Grid
								size={{
									md: 12,
									lg: 3
								}}
							>
								<div className={styles.title}>
									Headquarters
								</div>
								<div className={styles.address}>
									3422 Old Capitol Trail, Wilmington DE 19808, USA
								</div>
							</Grid>
							<Grid
								size={{
									md: 12,
									lg: 3
								}}
							>
								<div className={styles.title}>
									Email Us
								</div>
								<div className={styles.address}>
									<a href="mailto:info@glocallpo.com">info@glocallpo.com</a>
								</div>
							</Grid>
							<Grid
								size={{
									md: 12,
									lg: 3
								}}
							>
								<div className={styles.title}>
									Call Us
								</div>
								<div className={styles.address}>
									<a href="tel:+1 (650) 407 2112">+1 (650) 407 2112</a> / <a href="tel:+91 (931) 056 8481">+91 (931) 056 8481</a>
								</div>
							</Grid>
						</Grid>
						<Grid size={12}>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.777961025159!2d77.3630584!3d28.6064372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56eee10001b%3A0xe692f713efb39502!2sHead%20Field%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1745653850367!5m2!1sen!2sin"
								width="100%"
								height="450"
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className={styles.mapFrame}
							/>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.carouselHeadingSection}>
				<Container maxWidth="xl" className={styles.founderContainer}>
					<Grid
						container
						className={styles.commonContainer}
						size={12}
					>
						<Grid size={12} className={styles.textCenter}>
							<Heading>Words That Win Us Cases</Heading>
							<Heading variant="secondary">Real Stories. Real Results.</Heading>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.carouselSection}>
				<Container maxWidth="xl" className={styles.founderContainer}>
					<Grid
						container
						className={`${styles.commonContainer} ${styles.carouselBody}`}
						size={12}
						spacing={3}
					>
						<Slider
							slidesToShow={3}
							slidesToScroll={1}
							container="true"
							dots={false}
							nextArrow={<ArrowUpFilled className={styles.arrow} />}
							prevArrow={<ArrowUpFilled className={styles.arrow} />}
							responsive={[
								{
									breakpoint: 900,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1,
										infinite: true
									}
								}
							]}
						>
							<div size={4} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight.
								</Grid>
								<Grid
									container
									size={12}
									spacing={1}
									alignItems="center"
								>
									<div className={styles.imageWrapper}>
										<div className={styles.image} />
									</div>
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>Client Name</div>
										<div className={styles.designation}>Designation</div>
									</div>
								</Grid>
							</div>
							<div size={4} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight.
								</Grid>
								<Grid
									container
									size={12}
									spacing={1}
									alignItems="center"
								>
									<div className={styles.imageWrapper}>
										<div className={styles.image} />
									</div>
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>Client Name</div>
										<div className={styles.designation}>Designation</div>
									</div>
								</Grid>
							</div>
							<div size={4} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight.
								</Grid>
								<Grid
									container
									size={12}
									spacing={1}
									alignItems="center"
								>
									<div className={styles.imageWrapper}>
										<div className={styles.image} />
									</div>
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>Client Name</div>
										<div className={styles.designation}>Designation</div>
									</div>
								</Grid>
							</div>
						</Slider>
					</Grid>
				</Container>
			</section>
		</>
  );
};

export default ContactUs;
