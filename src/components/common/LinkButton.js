import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./LinkButton.module.scss";

const LinkButton = (props) => {
	const {
		to,
		children
	} = props;

	return (
		<Link to={to} className={styles.button}>
			{children}
		</Link>
	)
};

export default LinkButton;
