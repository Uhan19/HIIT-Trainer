import React, { useState } from 'react';
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Timer from "../components/timer/timer";

import classes from './App.module.css';

const App = () => {

  const [ time, setTime ] = useState({ time: "00:00" });

	const [ cycle, setCycle ] = useState({ cycle: 1})
  
  return(
    <div className={classes.App}>
      <Header />
			<Timer
        time={time.time}
        setTime={setTime}
        cycle={cycle.cycle}
				setCycle={setCycle}
      />
      <Footer />
    </div>
  )
}

export default App;
