import React from "react";
import {
	Grid2 as Grid,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import cx from "classnames";

import { LinkButton } from '@/components/common';

import { ChevronIcon } from "@/components/Icons";

import * as styles from "./AccordianItem.module.scss";

const AccordianItem = (props) => {
	const {
		icon,
		id,
		onChange,
		heading,
		expanded
	} = props;
	return (
		<Accordion
			expanded={expanded === id}
			onChange={onChange(id)}
			className={styles.accordionRoot}
		>
			<AccordionSummary
				className={styles.accordianHeader}
				aria-controls={`${id}d-content`}
				id={`${id}d-header`}
				classes={{
					expanded: styles.accordionExpended
				}}
			>
				<Grid
					container
					size={12}
					spacing={3}
					alignItems="center"
				>
					<Grid size={1}>
						<div className={styles.accordianIcon}>
							<img src={icon} alt="" />
						</div>
					</Grid>
					<Grid size={9}>{heading}</Grid>
					<Grid size={2} container justifyContent="flex-end">
						<ChevronIcon
							className={cx(
								styles.chevron,
								{
									[styles.collapsed]: expanded === id
								}
							)}
						/>
					</Grid>
				</Grid>
			</AccordionSummary>
			<AccordionDetails className={styles.accordianDetail}>
				<Grid size={12} spacing={4} container>
					<Grid container size={5} alignContent="flex-start">
						<Grid size={12}>
							<div className={styles.accordionHeading}>
								Medical Records - 
								The Linchpins of every personal injury 
								claim's success.
							</div>
						</Grid>
						<Grid size={12}>
							<div className={styles.globalDistinctive}>
								Glocal's Distinctive Edge:
							</div>
							<div className={styles.globalText}>
								Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.
							</div>
							<LinkButton to="#">
								BOOK AN INTERVIEW WITH A PARALEGAL
							</LinkButton>
						</Grid>
					</Grid>
					<Grid container size={7} alignContent="flex-start">
						<Grid size={12} className={styles.helpTitle}>WE HELP YOU BY:</Grid>
						<Grid size={12}>
							<ul className={styles.helpBullets}>
								<li>Retrieving & organizing medical records</li>
								<li>Patient Record Extraction</li>
								<li>Summarizing diagnosis & treatments</li>
								<li>Creating medical chronologies & injury assessments</li>
								<li>Medical History Compilation</li>
								<li>Medical Billing Summarization</li>
								<li>Privilege Logs</li>
							</ul>
						</Grid>
					</Grid>
				</Grid>
			</AccordionDetails>
		</Accordion>
	);
};

export default AccordianItem;
