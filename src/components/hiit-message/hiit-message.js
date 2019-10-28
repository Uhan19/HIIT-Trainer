import React from "react";
import classes from "./hiit-message.module.css"
import {
	cycle1,
	cycle2,
	cycle3,
	cycle4,
	cycle5,
	cycle6,
	cycle7,
	cycle8,
	cycle9
} from "../../utils/enum"

const hiitMessage = props => {
	const { cycle } = props;

	const message = workout => (
		<div className={classes.message}>
			{workout}
		</div>
	)

	switch (cycle) {
		case 1:
			return message(cycle1);
			break;
		case 2:
			return message(cycle2);
			break;
		case 3:
			return message(cycle3);
			break;
		case 4:
			return message(cycle4);
			break;
		case 5:
			return message(cycle5);
			break;
		case 6:
			return message(cycle6);
			break;
		case 7:
			return message(cycle7);
			break;
		case 8:
			return message(cycle8);
			break;
		case 9:
			return message(cycle9);
			break;
	}
}

export default hiitMessage; 
