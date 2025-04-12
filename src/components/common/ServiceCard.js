import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid2 as Grid } from "@mui/material";
import { useSpring, animated } from "react-spring";

import { CircleArrow } from "@/components/Icons";

import * as styles from "./ServiceCard.module.scss";

const ServiceCard = (props) => {
	const {
		id,
		title,
		image,
		description
	} = props;

	const [show, setShown] = useState(false);

	const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

	return (
		<animated.div
			size={12}
			className={styles.card}
			style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
		>
			<Grid size={12} justifyItems="flex-start">
				<div className={styles.count}>{id}.</div>
			</Grid>
			<Grid size={12} justifyItems="flex-start">
				<div className={styles.heading}>{title}</div>
			</Grid>
			<Grid size={12} className={styles.serviceImage}>
				<img src={image} alt="" />
			</Grid>
			<Grid size={12} className={styles.serviceText}>
				{description}
			</Grid>
			<Grid size={12}>
				<Link to="#" className={styles.howWeCanHelpLink}>
					<span>
						SEE HOW WE CAN HELP YOU
					</span>
					<CircleArrow />
				</Link>
			</Grid>
		</animated.div>
	);
};

export default ServiceCard;
