import React from "react";
import { useState } from "react";

function FitnessClassSchedule(props) {
	const { day, selectSpecificDay } = props;
	const [showClasses, setShowClasses] = useState(false);

	const toggleClassSchedule = () => {
		setShowClasses(!showClasses);
	};

	return (
		<div className="daily-schedule">
			<h2>{day.day}</h2>
			<button onClick={() => {
				selectSpecificDay(day.day)
				toggleClassSchedule();
			}}>{showClasses ? "Less" : "More" }</button>
		{showClasses ? (
			<div>
				<ul>
					<li>{day.title}</li>
					<li>{day.time}</li>
				</ul>
			</div>
		) : (
			""
		)}
		</div>
		
	);
}

export default FitnessClassSchedule;
