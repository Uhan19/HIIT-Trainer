import React from "react";
import { useCounter } from "./counter";
import { workout } from "../../utils/enum";

const timer = props => {
	const {
		workoutCycle,
		setWorkoutCycle,
		isRunning,
		start,
		elapsedTime
	} = props;


	let formattedTime = "00:00"

	if (elapsedTime) {
		formattedTime = elapsedTime.toFormat("mm:ss");
	}

	if (isRunning) {
		let timeNow = useCounter(1000, isRunning);
		let diff = timeNow.diff(start);

		if (elapsedTime && diff) {
			diff = timeNow.diff(start).plus(elapsedTime);
		}

		console.log(Math.round(diff.as("seconds")))

		if (Math.round(diff.as("seconds")) === workout) {
			const cycle = {...workoutCycle}
			cycle.cycle++;
			setWorkoutCycle(cycle);
		}

		formattedTime = diff.toFormat("mm:ss");
	}

	return (
		<div>
			{formattedTime}
		</div>
	)
}

export default timer;