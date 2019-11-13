import React, { useState } from 'react';
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import TimerWrapper from "./timer-container.js";

import classes from './App.module.css';

const App = () => {

  return(
    <div className={classes.App}>
      <Header />
			<TimerWrapper />
      <Footer />
    </div>
  )
}

export default App;
