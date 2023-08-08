import React from "react";

function MySchedule() {
	return (
		<div>
			<div className="classSchedule">
				<div>
					<h1>Upcomming Classes</h1>
				</div>
				<div className="myClasses">
					{/* this will need to be a .map to display a current users schedule - need to query the database to find all of their upcomming classes */}
					<ul>
						<li>Open Wod Basic, 4/8/2023</li>
						<li>Open Wod Basic, 4/8/2023</li>
						<li>Functional Bodybuilding, 4/8/2023</li>
					</ul>
				</div>
				<div className="addClass">
					<button className='"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"'>
						Open Wod Basic
					</button>
					<button className='"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"'>
						Open Wod Beginner
					</button>
					<button className='"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"'>
						Functional BodyBuilding
					</button>
					<button className='"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"'>
						Gymnastics & BodyWeight
					</button>
				</div>
			</div>
		</div>
	);
}

export default MySchedule;
