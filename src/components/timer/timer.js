import React, { useState, useEffect } from "react";
import classes from "./timer.module.css";
import HIITMessage from "../hiit-message/hiit-message";

const timer = props => {
	const {
		showTimer,
		cycle,
		setCycle,
		time,
		setTime
	} = props;

	let isRest = true;

	const [ timerClass, setTimerClass ] = useState({ class: classes.timerRed });

	const [ paused, setPaused ] = useState({ paused: false })

	const startTimer = () => {
		let newTime = 0;
		let newCycle = cycle;
		const hiitCounter = () => {
			if (!paused.paused) {
				newTime++;
			}
			setTime({ time: newTime });
			if (newTime === 46 && isRest) {
				newTime = 0; 
				newCycle++;
				setTime({ time: newTime });
				setCycle({ cycle: newCycle});
				setTimerClass({ class: classes.timerGreen });
				isRest=false;
			}
			if (newTime === 16 && !isRest) {
				newTime = 0;
				setTime({ time: newTime });
				setTimerClass({ class: classes.timerRed });
				isRest=true;
			}
			if (newCycle === 10) {
				newCycle=0;
				setCycle({ cycle: newCycle });
				clearInterval(timerInterval);
				setTimerClass({ class: classes.timerRed})
			}
		}
		const timerInterval = setInterval(hiitCounter, 1000);
	}

	const pauseTimer = (e) => {
		e.preventDefault();
		paused.paused ? 
			setPaused({ paused: false })
			: 
			setPaused({ paused: true })
		console.log(paused)

	}
	return (
		<div className={classes.timer}>
			<button
				onClick={() => startTimer()}
			>
				Start timer
			</ button>
			<button
				onClick={(event) => pauseTimer(event)}
			>
				Pause/Resume
			</ button>
			<div className={timerClass.class}>
				{time}
			</div>
			<HIITMessage cycle={cycle} />
		</div>
	)
}

export default timer;