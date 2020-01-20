import { useState, useEffect } from "react";
import { DateTime } from "luxon";

export const useCounter = (refresh = 100, isRunning, clear) => {
	const [ now, setNow ] = useState(getTime());
	
	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(
				() => setNow(getTime()),
				refresh
			)
		};
		if (clear) {
			clearInterval(interval)
		}
		return () => clearInterval(interval);
	}, [isRunning, refresh, setInterval, clearInterval, getTime, setNow])

	if (isRunning) {
		return now;
	};
	return null; 
}

const getTime = () => {
	return DateTime.local();
}

export default useCounter;
