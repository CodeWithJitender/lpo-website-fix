import React from "react";
import {
	Container,
	Grid2 as Grid,
	TextField
} from "@mui/material";

import { CircleArrow } from "@/components/Icons";

import Heading from "./Heading";

import * as styles from "./ContactForm.module.scss";

const ContactForm = (props) => {
	const { section } = props;

	return (
		<Container
			maxWidth="xl"
			className={section === "contact" ? styles.contactForm : ""}
		>
			<Grid
				container
				className={styles.commonContainer}
				spacing={3}
				alignItems="flex-start"
			>
				<Grid size={{md:12, lg: 4}}>
					<div>
						<Heading className={styles.getInTouchHeading}>Get In Touch</Heading>
					</div>
					<div className={styles.formHeading}>
						Tell us what you need, 
						and we'll map the way 
						forward to victory.
					</div>
					<div className={styles.formText}>
						At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight.
					</div>
				</Grid>
				<Grid container size={{md: 12, lg: 8}}>
					<Grid size={12} className={styles.requiredFieldTitle}>
						All the fields marked with * are required
					</Grid>
					<Grid size={12} container spacing={3}>
						<Grid size={{xs: 12, md: 6}}>
							<TextField
								slotProps={{
									inputLabel: {
										shrink: true,
									},
								}}
								label="FIRST NAME"
								fullWidth={true}
								variant="standard"
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<TextField
								slotProps={{
									inputLabel: {
										shrink: true,
									},
								}}
								label="LAST NAME"
								fullWidth={true}
								variant="standard"
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<TextField
								slotProps={{
									inputLabel: {
										shrink: true,
									},
								}}
								label="EMAIL"
								type="email"
								fullWidth={true}
								variant="standard"
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<TextField
								slotProps={{
									inputLabel: {
										shrink: true,
									},
								}}
								label="COMPANY"
								fullWidth={true}
								variant="standard"
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<TextField
								slotProps={{
									inputLabel: {
										shrink: true,
									},
								}}
								label="JOB TITLE"
								fullWidth={true}
								variant="standard"
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<TextField
								slotProps={{
									inputLabel: {
										shrink: true,
									},
								}}
								label="PHONE"
								type="tel"
								fullWidth={true}
								variant="standard"
							/>
						</Grid>
						<Grid size={12}>
							<TextField
								slotProps={{
									inputLabel: {
										shrink: true,
									},
								}}
								label="PLEASE DESCRIBE THE TYPE OF SERVICE YOU ARE INTERESTED IN"
								fullWidth={true}
								variant="standard"
							/>
						</Grid>
					</Grid>
					<Grid size={12} className={styles.submitWrapper}>
						<CircleArrow
							fill="#564847"
							className={styles.formSubmitButton}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ContactForm;
