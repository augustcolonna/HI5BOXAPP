import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import MySchedule from "./components/MySchedule";

function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<Signin />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
					<Route
						path="/profile"
						element={
							<PrivateRoute>
								<Profile />
							</PrivateRoute>
						}
					></Route>
					<Route
						path="/schedule"
						element={
							<PrivateRoute>
								<MySchedule />
							</PrivateRoute>
						}
					></Route>
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
