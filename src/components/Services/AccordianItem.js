import React from "react";
import {
	Grid2 as Grid,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import cx from "classnames";

import { LinkButton } from '@/components/common';

import { useDevice } from '@/context/DeviceContext';

import { ChevronIcon } from "@/components/Icons";

import playButtonIcon from "@/assets/icons/button-play-icon.png";

import * as styles from "./AccordianItem.module.scss";

const AccordianItem = (props) => {
	const {
		icon,
		id,
		onChange,
		heading,
		expanded
	} = props;

	const { isMobile } = useDevice();

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
				<div className={styles.accordianHead}>
					<div className={styles.accordianIcon}>
						<img src={icon} alt="" />
					</div>
					<div className={styles.accordianHeadHeading}>{heading}</div>
					<div>
						<ChevronIcon
							className={cx(
								styles.chevron,
								{
									[styles.collapsed]: expanded === id
								}
							)}
						/>
					</div>
				</div>
				{/* <Grid
					container
					size={12}
					spacing={{xs: 2, md: 3}}
					alignItems="center"
				>
					<Grid size={{xs: 2, md: 1}}>
						<div className={styles.accordianIcon}>
							<img src={icon} alt="" />
						</div>
					</Grid>
					<Grid size={{xs: 8, md: 9}}>{heading}</Grid>
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
				</Grid> */}
			</AccordionSummary>
			<AccordionDetails className={styles.accordianDetail}>
				<Grid size={12} spacing={4} container>
					<Grid container size={{sm: 12, md:12, lg: 5}} alignContent="flex-start">
						<Grid size={12}>
							<div className={styles.accordionHeading}>
								Medical Records - 
								The Linchpins of every personal injury 
								claim's success.
							</div>
						</Grid>
						{isMobile &&
							<Grid container size={{ sm: 12, md: 12, lg: 7 }} alignContent="flex-start">
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
						}
						<Grid size={12}>
							<div className={styles.globalDistinctive}>
								Glocal's Distinctive Edge:
							</div>
							<div className={styles.globalText}>
								Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.
							</div>
							<LinkButton to="#" className={styles.bookButton}>
								<span>BOOK AN INTERVIEW WITH A PARALEGAL</span>
								{!isMobile && <span><img src={playButtonIcon} alt="" /></span>}
							</LinkButton>
						</Grid>
					</Grid>
					{!isMobile && 
						<Grid container size={{ sm: 12, md: 7 }} alignContent="flex-start">
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
					}
				</Grid>
			</AccordionDetails>
		</Accordion>
	);
};

export default AccordianItem;
