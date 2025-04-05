import React from "react";

import * as styles from "./Heading.module.scss";

const Heading = (props) => {
	const {
		variant = "primary",
		className = "",
		children
	} = props;

	if (variant === "primary") {
		return (
			<h1
				className={`${styles.primaryHeading} ${className}`}
			>
				{children}
			</h1>
		)
	}

	return (
		<h2
			className={`${styles.secondaryHeading} ${className}`}
		>
			{children}
		</h2>
	);
};

export default Heading;
