import React, {useState} from "react";
import classes from "./timer-container.module.css";
import HIITMessage from "../components/hiit-message/hiit-message";
import Timer from "../components/timer/timer";
import { DateTime } from "luxon";

const TimerWrapper = props => {

	const [ timerClass, setTimerClass ] = useState({ class: classes.timerRed });

	const [ workoutCycle, setWorkoutCycle ] = useState({ cycle: 1 })

	const [ isRunning, setIsRunning ] = useState(false);

  const [ startTimes, setStartTimes ] = useState([]);

	const [ stopTimes, setStopTimes ] = useState([]);

	// useEffect(() => {
		
	// })

  let start = DateTime.local();
	let elapsedTime = null;

	
  if (startTimes.length > 0 && stopTimes.length > 0) {
		for (let i = 0; i < stopTimes.length; i++) {
			elapsedTime ?
				elapsedTime = elapsedTime.plus(stopTimes[i].diff(startTimes[i]))
				:
				elapsedTime = stopTimes[0].diff(startTimes[0])
    }
	}
	
	if (workoutCycle === 2) {
		elapsedTime = null;
	}
	console.log(elapsedTime)

  const handleStartPause = () => {
		if (isRunning) {
      setIsRunning(false);
      setStopTimes([...stopTimes, DateTime.local()]);
		} else {
      setIsRunning(true);
      setStartTimes([...startTimes, DateTime.local()]);
		}
	}

	const handleReset = () => {
		window.location.reload(false); 
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
					setWorkoutCycle={setWorkoutCycle}
					isRunning={isRunning}
					startTimes={startTimes}
					stopTimes={stopTimes}
					elapsedTime={elapsedTime}
				/>
			</div>
			{/* <HIITMessage cycle={cycle} /> */}
		</div>
	)
}

export default TimerWrapper;
