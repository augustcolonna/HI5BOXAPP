import React from "react";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./utils/PrivateRoute";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import MySchedule from "./pages/MySchedule";

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
