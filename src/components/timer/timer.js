import React, { useState } from "react";
import classes from "./timer.module.css";
import HIITMessage from "../hiit-message/hiit-message";

const timer = props => {
	const {
		cycle,
		// setCycle,
		time,
		setTime,
	} = props;

	const [ timerInterval, setTimerInterval ] = useState(null);
	const [ timerClass, setTimerClass ] = useState({ class: classes.timerRed });

	let offset;
	let newTime = 0; 
	let isRunning = false;
	console.log("outside top: ", isRunning); 

	const timeFormatter = newTime => {
		newTime = new Date(newTime);
		let minutes = newTime.getMinutes().toString();
		let seconds = newTime.getSeconds().toString();

		if (minutes.length < 2) {
			minutes = "0" + minutes;
		}

		if (seconds.length < 2) {
			seconds = "0" + seconds;
		}

		return minutes + ":" + seconds;
	}

	const update = () => {
		console.log("inside update: ", isRunning);
		if (isRunning) {
			newTime += delta();
			const formattedTime = timeFormatter(newTime);
			setTime({ time: formattedTime })
		}
	}

	const delta = () => {
		const now = Date.now();
		const timePassed = now - offset;

		offset = now; 

		return timePassed;
	}

	const start = () => {
		console.log("inside start: ", isRunning);
		isRunning = true;
		setTimerInterval(setInterval(update, 1000))
		offset = Date.now(); 
		console.log("inside if start: ", isRunning);
	}

	const stop = () => {
		clearInterval(timerInterval);
		setTimerInterval(null)
		isRunning = false; 
		console.log("inside stop: ", isRunning);
	}

	const reset = () => {
		setTime({ time: "00 : 00"});
	}

	// const startTimer = () => {
	// 	let newTime = 0;
	// 	let newCycle = cycle;
	// 	const hiitCounter = () => {
	// 		if (!paused.paused) {
	// 			newTime++;
	// 		}
	// 		setTime({ time: newTime });
	// 		if (newTime === 46 && isRest) {
	// 			newTime = 0; 
	// 			newCycle++;
	// 			setTime({ time: newTime });
	// 			setCycle({ cycle: newCycle});
	// 			setTimerClass({ class: classes.timerGreen });
	// 			isRest=false;
	// 		}
	// 		if (newTime === 16 && !isRest) {
	// 			newTime = 0;
	// 			setTime({ time: newTime });
	// 			setTimerClass({ class: classes.timerRed });
	// 			isRest=true;
	// 		}
	// 		if (newCycle === 10) {
	// 			newCycle=0;
	// 			setCycle({ cycle: newCycle });
	// 			clearInterval(timerInterval);
	// 			setTimerClass({ class: classes.timerRed})
	// 		}
	// 	}
	// 	const timerInterval = setInterval(hiitCounter, 1000);
	// }

	// const buttonText = isRunning ? "Stop" : "Start";
	console.log(isRunning, "outside bottom")

	return (
		<div className={classes.timer}>
			<button
				onClick={() => start()}
			>
				Start
			</ button>
			<button
				onClick={stop}
			>
				Stop
			</button>
			<div className={timerClass.class}>
				{time}
			</div>
			<HIITMessage cycle={cycle} />
		</div>
	)
}

export default timer;