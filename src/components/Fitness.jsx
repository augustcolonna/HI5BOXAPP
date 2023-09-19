import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import workoutSchedule from "../class-schedule.json";
import FitnessClassSchedule from "./FitnessClassSchedule";
import WodSignUp from "./WodSignUp";
import "../stylesheets/fitness.scss";

function Fitness() {
  const [workout, setWorkout] = useState(workoutSchedule);
  const [showWod, setShowWod] = useState(false);

  function selectSpecificWorkout(workoutId) {
    const filterWorkout = workout.filter((workout) => {
      return workout._id === workoutId;
    });
    setWorkout(filterWorkout);
  }

  const toggleWodSignUp = () => {
    setShowWod(!showWod);
  };

  return (
    <div className="schedule-container">
      <h1>Workout Schedule</h1>
      <button onClick={toggleWodSignUp}>Sign Up for Todays Workout!</button>
      {showWod && <WodSignUp />}

      <div className="workout-schedule">
        {!showWod &&
          workoutSchedule.map((workout) => {
            return (
              <FitnessClassSchedule
                key={workout._id}
                workout={workout}
                selectSpecificWorkout={selectSpecificWorkout}
              />
            );
          })}
      </div>
      <NavBar />
    </div>
  );
}

export default Fitness;
