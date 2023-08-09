import React from "react";
import NavBar from "./NavBar";
import VerticalTabs from "../components/VerticalTabs";

export default function Fitness() {
	// const mondayClasses = [
	// 	{ class: "Open WOD Basic", time: "10:00 - 11:00" },
	// 	{ class: "Open WOD Beginner", time: "18:00 - 19:00" },
	// 	{ class: "Open WOD Basic", time: "19:15 - 20:15" },
	// ];

	// const tuesdayClasses = [
	// 	{ class: "Functional Bodybuilding", time: "18:00: -19:00" },
	// 	{ class: "Gymnastic & Bodyweight", time: "19:15 - 20:15" },
	// ];

	// const wednesdayClasses = [
	// 	{ class: "Open WOD Basic", time: "10:00 - 11:00" },
	// 	{ class: "Open WOD Beginner", time: "18:00 - 19:00" },
	// 	{ class: "Open WOD Basic", time: "19:15 - 20:15" },
	// ];

	// const thursdayClasses = [
	// 	{ class: "Open WOD Endurance", time: "18:00 - 19:00" },
	// 	{ class: "Open WOD Advanced", time: "19:15 - 20:15" },
	// ];

	// const fridayClasses = [
	// 	{ class: "Open WOD Basic", time: "16:30 - 17:30" },
	// 	{ class: "Open WOD Basic", time: "17:45 - 18:45" },
	// 	{ class: "Core & Recovery", time: "19:00 - 19:30" },
	// ];

	// const saturdayClasses = [{ class: "Open WOD Team", time: "14:00 - 15:00" }];

	// const sundayClasses = [{ class: "Open WOD Team", time: "11:00 - 12:00" }];

	return (
		<div>
			<VerticalTabs />
			<NavBar />
		</div>
	);
}
