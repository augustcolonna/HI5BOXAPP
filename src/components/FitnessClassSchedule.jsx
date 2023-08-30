import React from "react";
import { useState } from "react";
import "../stylesheets/fitness.scss";

function FitnessClassSchedule(props) {
  const { workout, selectSpecificWorkout } = props;
  const [showWorkout, setShowWorkout] = useState(false);
  // Add workout states

  const toggleClassSchedule = () => {
    setShowWorkout(!showWorkout);
  };

  return (
    <div className="daily-workout-info">
      <h3 className="daily-schedule">{workout.day}</h3>
      <button
        className="daily-btn"
        onClick={() => {
          selectSpecificWorkout(workout._id);
          toggleClassSchedule();
        }}
      >
        {showWorkout ? "Less" : "See Schedule"}
      </button>
      {showWorkout ? (
        <div className="workout-details">
          {workout.workout.map((workout) => {
            return (
              <div className="title-time-container" key={workout._id}>
                <p className="workout-title">{workout.title}</p>
                <p className="workout-time">{workout.time}</p>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FitnessClassSchedule;
