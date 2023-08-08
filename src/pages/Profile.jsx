import React from "react";

import { UserAuth } from "../contexts/AuthContext";

import NavBar from "../components/NavBar";

export default function Profile() {
	const { user } = UserAuth();

	return (
		<div className="max-w-screen mx-auto my-10 p-4">
			<h1>Hello, {user && user.displayName}!</h1>
			<p>email: {user && user.email} </p>

			<div>
				<NavBar />
			</div>
		</div>
	);
}
