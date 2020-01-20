import React, {useState} from "react";
import classes from "./timer-container.module.css";
import HIITMessage from "../components/hiit-message/hiit-message";
import Timer from "../components/timer/timer";
import { DateTime } from "luxon";
import { workout, workoutList } from "../utils/enum";

const TimerWrapper = props => {

	const [ timerClass, setTimerClass ] = useState({ class: classes.timerRed });

	const [ workoutCycle, setWorkoutCycle ] = useState(0);

	const [ isRest, setIsRest] = useState(false);

	const [ isRunning, setIsRunning ] = useState(false);

  const [ startTimes, setStartTimes ] = useState([]);

	const [ stopTimes, setStopTimes ] = useState([]);

	const [start, setStart] = useState();

	let elapsedTime = null;

	
  if (startTimes.length > 0 && stopTimes.length > 0) {
		for (let i = 0; i < stopTimes.length; i++) {
			elapsedTime ?
				elapsedTime = elapsedTime.plus(stopTimes[i].diff(startTimes[i]))
				:
				elapsedTime = stopTimes[0].diff(startTimes[0])
    }
	}

  const handleStartPause = () => {
		if (isRunning) {
      setIsRunning(false);
      setStopTimes([...stopTimes, DateTime.local()]);
		} else {
			const now = DateTime.local()
			setStart(now);
      setIsRunning(true);
      setStartTimes([...startTimes, now]);
		}
	}

	const handleReset = () => {
		// if the arg is true, current page will load without the browser cache
		window.location.reload(false); 
	}

	const handleClear = () => {
		const now = DateTime.local();
		let cycle = workoutCycle;
		if (workoutCycle === workoutList.length) {
			setIsRunning(false);
		}
		if (isRest) {
			setIsRest(false);
		} else {
			cycle++;
			setWorkoutCycle(cycle);
			setIsRest(true);
		}
		setStart(now);
		setStartTimes([now]);
		setStopTimes([]);
	}
	
	return (
		<div className={classes.timer}>
			<button
				onClick={() => handleStartPause()}
			>
				Start / Pause
			</ button>
			<button
				onClick={() => handleReset()}
			>
				Reset
			</button>
			<div className={timerClass.class}>
				<Timer 
					start={start}
					isRest={isRest}
					isRunning={isRunning}
					startTimes={startTimes}
					stopTimes={stopTimes}
					elapsedTime={elapsedTime}
					clear={() => handleClear()}
				/>
			</div>
			<HIITMessage cycle={workoutCycle} isRest={isRest} />
		</div>
	)
}

export default TimerWrapper;
