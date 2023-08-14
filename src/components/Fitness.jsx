import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import classSchedule from "../class-schedule.json";
import FitnessClassSchedule from "./FitnessClassSchedule";

export default function Fitness() {
	const [classes, setClasses] = useState(classSchedule);
	const [showClasses, setShowClasses] = useState(false);

	const toggleClassSchedule = () => {
		setShowClasses(!showClasses);
	};

	return (
		<div>
			<h1>Class Schedules</h1>

			<button onClick={toggleClassSchedule}>
				{showClasses ? "Hide" : "Monday Schedule"}
			</button>

			{showClasses &&
				classes
					.filter((session) => {
						return session.day === "Monday";
					})
					.map((session) => {
						return <FitnessClassSchedule key={session._id} session={session} />;
					})}

			<button onClick={toggleClassSchedule}>
				{showClasses ? "Hide" : "Tuesday Schedule"}
			</button>

			{showClasses &&
				classes
					.filter((session) => {
						return session.day === "Tuesday";
					})
					.map((session) => {
						return <FitnessClassSchedule key={session._id} session={session} />;
					})}

			<NavBar />
		</div>
	);
}
