import React, { useState } from 'react';
import {
	Container,
	Grid2 as Grid,
	ImageList,
	ImageListItem
} from '@mui/material';
import FsLightbox from "fslightbox-react";
import Slider from "react-slick";

import {
	Heading,
	Animate,
	ContactForm
} from '@/components/common';

import { WritingPen, ArrowUpFilled } from "@/components/Icons";

import * as styles from "./ContactUs.module.scss";

const ContactUs = () => {
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	};

	const imageList= [];

	Array.from({ length: 10 }, (_, i) => {
		const imageSrc = require(`../assets/images/office-images/lpo-office-${i + 1}.jpg`);
		imageList.push(imageSrc);
	});

	const CustomArrow = ({ type, onClick }) => (
		<ArrowUpFilled
			onClick={onClick}
			className={`slick-arrow ${type === "next" ? "slick-next" : "slick-prev"}`}
		/>
	);

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
						<Grid
							size={12}
							spacing={3}
							container
							justifyContent="stretch"
						>
							<Grid size={{
								md: 12,
								lg: 6
							}}>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.777961025159!2d77.3630584!3d28.6064372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56eee10001b%3A0xe692f713efb39502!2sHead%20Field%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1745653850367!5m2!1sen!2sin"
									width="100%"
									height="550"
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									className={styles.mapFrame}
								/>
							</Grid>
							<Grid size={{
								md: 12,
								lg: 6
							}}>
								<ImageList
									variant="masonry"
									cols={3}
									gap={8}
									className={styles.imageListRoot}
								>
									{
										imageList.map((image, i) => (
											<ImageListItem
												key={i}
												className={styles.imageListItem}
												onClick={() => openLightboxOnSlide(i + 1)}
											>
												<img
													srcSet={image}
													src={image}
													loading="lazy"
													alt=""
												/>
											</ImageListItem>
										))
									}
								</ImageList>
							</Grid>
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
							slidesToShow={2}
							slidesToScroll={1}
							dots={false}
							nextArrow={<CustomArrow type="next" />}
							prevArrow={<CustomArrow type="prev" />}
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
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									Our firm has worked with Glocal for several years to handle immigration paperwork preparation, and it has proven to be a productive and cost-effective partnership. Their team consistently provides reliable support, helping us streamline our processes and allocate more time to client-facing work. For firms looking to enhance efficiency in immigration paperwork preparation, Glocal offers solid, dependable assistance.
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
										<div className={styles.clientName}>Immigration Law Firm</div>
										<div className={styles.designation}>Licensed in New York</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									<p>The legal work, demeanor, and work ethic have been nothing short of excellent. Highly skilled, intellectually gifted, and with an outstanding instinct for labor and employment law as well as broader legal matters, the support provided has been invaluable to our practice.</p>
									<p>Drafting and research skills of the paralegal assigned are exceptional, and we have come to rely heavily on the ability to draft key pleadings, memoranda, and other important documents.</p>
									<p>Beyond technical excellence, the personality is wonderful—humble, helpful, and truly enjoyable to work with. It has been a pleasure collaborating and building a strong professional relationship with Glocal.</p>
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
										<div className={styles.clientName}>Employment Law Firm</div>
										<div className={styles.designation}>Licensed Missouri & Texas</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									We are very happy with both of them. They are doing a great job so far, and the hours and shifts they are working are exactly what we need.
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
										<div className={styles.clientName}>E-Filing Company</div>
										<div className={styles.designation}>California</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									The paralegals assigned by Glocal LPO have been extremely diligent and phenomenal in their work. Like with any evolving process, occasional minor corrections are natural, but the quality delivered leaves very little room for improvement. Their commitment to excellence truly stands out, and we are very pleased with the support provided.
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
										<div className={styles.clientName}>Personal Injury, Medical Malpractice and Workers compensation Law firm</div>
										<div className={styles.designation}>Licensed in New Jersey</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									The paralegal’s speed and enthusiasm are truly appreciated. With just a bit more time spent reviewing samples and asking clarifying questions, I’m confident she will continue to grow and deliver even stronger results. She’s on the right track and progressing well.
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
										<div className={styles.clientName}>Personal Injury Law Firm</div>
										<div className={styles.designation}>Licensed in New York</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									Paralegal's patience and dedication to the organization over the past few months have been truly appreciated. His professionalism and commitment to the industry have greatly assisted the team, helping significantly in catching up on the caseload and bringing legacy matters to a close. We are grateful for Glocal LPO Paralegal's hard work, understanding, and contributions during this time. He will undoubtedly be a tremendous asset to the right team in his future endeavors.
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
										<div className={styles.clientName}>Real Estate, Estate Planning, and Probate Law Firm</div>
										<div className={styles.designation}>Licensed in California</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									Paralegal team provided by Glocal LPO has been a tremendous asset. Their knowledge, intelligence, independence, and self-motivation are highly valued and have made a significant impact. Although progress has been slower on our end as we are a big firm, we recognize and appreciate the many benefits of working with them and the company. We look forward to continuing this positive collaboration and are grateful for her contributions.
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
										<div className={styles.clientName}>Family Law, Real Estate, Estate Planning, Probate, and Immigration</div>
										<div className={styles.designation}>Licensed in California</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									Paralegal's legal work, professionalism, and work ethic are truly outstanding. She is highly skilled, intellectually gifted, and demonstrates excellent instincts, particularly in labor and employment matters. Her legal drafting and research abilities are exceptional, and she has become a trusted resource for drafting key pleadings, memoranda, and other essential documents. In addition to her legal talents, Paralegal brings a humble, helpful attitude and a wonderful personality that makes her a pleasure to work with. It has been a thoroughly enjoyable and valuable experience collaborating with Glocal LPO.
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
										<div className={styles.clientName}>Employment Law Firm</div>
										<div className={styles.designation}>Licensed in Illinois</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									The dedication and commitment to client advocacy are truly exceptional. His deep knowledge of the law, strategic approach, and skillful drafting of demand letters inspire great confidence in his ability to pursue justice. Although the case is still in its early stages, the paralegal assigned to me by Glocal LPO has already proven to be a tireless and effective advocate. Working with him has been a pleasure, as his communication, responsiveness, and genuine care for clients stand out. Glocal LPO Combined efforts and professionalism have made a strong and lasting impression. I have recommended other friends as well to hire Glocal.
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
										<div className={styles.clientName}>Civil Litigation Law Firm</div>
										<div className={styles.designation}>Licensed in Florida</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									I have hired six paralegals and they have been a phenomenal addition to the team. They are diligent, attentive, and consistently deliver strong work with minimal need for correction. While no process is without opportunities for growth, Paralegal's commitment to improvement and their high standards are clear. If a contract renewal occurs, there is no question I would be specifically requesting them . Glocal LPO contributions are greatly appreciated.
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
										<div className={styles.clientName}>Civil Litigation Law Firm</div>
										<div className={styles.designation}>Licensed in New Jersey</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									Paralegal has consistently demonstrated professionalism, responsiveness, and a strong work ethic. She has been highly organized and attentive to legal tasks, always maintaining a pleasant demeanor throughout. If business picks up and supplementary support services are needed again, Glocal would be contacted with a specific request for Paralegal. The decision to cancel the contract was due to a lack of new cases, making supplementary services unnecessary at this time.
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
										<div className={styles.clientName}>Personal Injury and Workers' Compensation Law Firm</div>
										<div className={styles.designation}>Licensed in Chicago</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									Paralegal dedication and contributions over the past few months have been highly appreciated. His efforts have been valuable, and we are grateful for the support he has provided. Due to a limited workload, we will be suspending this service effective immediately. However, should our needs change in the future, we will certainly reach out to explore potential collaboration again. We extend our thanks to Paralegal and Glocal LPO for their excellent work and exceptional services.
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
										<div className={styles.clientName}>Personal Injury and Civil Litigation</div>
										<div className={styles.designation}>Licensed in Florida</div>
									</div>
								</Grid>
							</div>
						</Slider>
					</Grid>
				</Container>
			</section>
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={imageList}
				slide={lightboxController.slide}
			/>
		</>
  );
};

export default ContactUs;
