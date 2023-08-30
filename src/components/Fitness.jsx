import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import workoutSchedule from "../class-schedule.json";
import FitnessClassSchedule from "./FitnessClassSchedule";
import "../stylesheets/fitness.scss";

function Fitness() {
  const [workout, setWorkout] = useState(workoutSchedule);

  function selectSpecificWorkout(workoutId) {
    const filterWorkout = workout.filter((workout) => {
      return workout._id === workoutId;
    });
    setWorkout(filterWorkout);
  }

  return (
    <div className="schedule-container">
      <h1>Workout Schedule</h1>
      <div className="workout-schedule">
        {workoutSchedule.map((workout) => {
          return (
            <FitnessClassSchedule
              key={workout._id}
              workout={workout}
              selectSpecificWorkout={selectSpecificWorkout}
            />
          );
        })}
        <Link to="/profile">
          <button>Sign Up for Todays Workout!</button>{" "}
        </Link>
      </div>
      <NavBar />
    </div>
  );
}

export default Fitness;
