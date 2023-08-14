import React from "react";

function FitnessClassSchedule(props) {
	const { session } = props;

	return (
		<div className="daily-schedule">
			<h2>{session.title}</h2>
			<p>{session.time}</p>
		</div>
	);
}

export default FitnessClassSchedule;
