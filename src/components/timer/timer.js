import React from "react"
import { useCounter } from "./counter";
import { Duration } from "luxon";
import { workout, rest } from "../../utils/enum";

const timer = props => {
	const {
		isRunning,
		start,
		elapsedTime,
		clear,
		isRest
	} = props;

	let formattedTime = "0";

	if (elapsedTime) {
		formattedTime = Math.round(elapsedTime.as("seconds"));
	}

	if (isRunning) {
		let timeNow = useCounter(1000, isRunning);
		let diff = timeNow.diff(start);

		if (elapsedTime && diff) {
			diff = timeNow.diff(start).plus(elapsedTime);
		}

		formattedTime = Math.round(diff.as("seconds"));

		if (Math.round(diff.as("seconds")) === rest && isRest) {
			clear();
		}
		if (Math.round(diff.as("seconds"))=== workout && !isRest) {
			clear()
		}
	}


	return (
		<div>
			{formattedTime}
		</div>
	)
}

export default timer;