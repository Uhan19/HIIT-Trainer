import React from "react";
import classes from "../../containers/App.module.css";
import logo from "../../assets/logo.svg"

const header = props => {
	return (
		<div className={classes.header}>
			<p className={classes["header-text"]}>HIIT Trainer</p>
			<img src={logo} className={classes["App-logo"]} alt="logo" />
		</div>
	)
}

export default header;
