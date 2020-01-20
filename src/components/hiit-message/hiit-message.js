import React from "react";
import classes from "./hiit-message.module.css"
import { workoutList, restMsg, finishedMsg } from "../../utils/enum"

const hiitMessage = props => {
	const { cycle, isRest } = props;

	const message = (workout, nextUp) => {
		const displayNextUpMsg = isRest && nextUp;
		
		return (
		<div className={classes.message}>
			<div>{workout}</div>
			{displayNextUpMsg &&
				<div>{`Next up: ${nextUp}`}</div>
			}
		</div>
		)
	}

	if (isRest) {
		return message(restMsg, workoutList[cycle], isRest);
	}

	return message(workoutList[cycle])

}

export default hiitMessage; 
