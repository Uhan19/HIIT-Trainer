import React from "react";
import classes from "./workout-list-display.module.css"
import { workoutList } from "../../utils/enum";

const workoutListDisplay = () => (
  <div className={classes["list-container"]}>
    {workoutList.map((cycle, index) => {
      let num = workoutList.indexOf(cycle) + 1;
      return (
        <div
          className={classes["list-item"]}
          key={index}
        >
          {`${num}. ${cycle}`}
        </div>
      )
    })}
  </div>
);

export default workoutListDisplay;