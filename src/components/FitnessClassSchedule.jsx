import React from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
// import { UserAuth } from "../contexts/AuthContext";
import { db, auth } from "../firebase";
import "../stylesheets/fitness.scss";

function FitnessClassSchedule(props) {
  const { workout, selectSpecificWorkout } = props;
  const [showWorkout, setShowWorkout] = useState(false);
  // Add workout states
  const [addWorkoutTitle, setAddWorkoutTitle] = useState("");
  const [addWorkoutTime, setAddWorkoutTime] = useState("");
  const workoutsCollection = collection(db, "myWorkouts");

  const onSubmitWorkout = async () => {
    try {
      await addDoc(workoutsCollection, {
        title: addWorkoutTitle,
        time: addWorkoutTime,
        userId: auth?.currentUser?.uid,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

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
                <p
                  className="workout-title"
                  onChange={(event) => setAddWorkoutTitle(event.target.value)}
                >
                  {workout.title}
                </p>
                <p
                  className="workout-time"
                  onChange={(event) => setAddWorkoutTime(event.target.value)}
                >
                  {workout.time}
                </p>
                <button onClick={onSubmitWorkout}>Add Workout</button>
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
