import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import LogoutIcon from "@mui/icons-material/Logout";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

function NavBar() {
	const { logout } = UserAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate("/");
			console.log("You have successfully logged out");
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div>
			<BottomNavigation showLabels>
				<BottomNavigationAction label="Fitness" icon={<FitnessCenterIcon />} />
				<BottomNavigationAction label="Soccer" icon={<SportsSoccerIcon />} />
				<BottomNavigationAction label="Hockey" icon={<SportsHockeyIcon />} />
				<BottomNavigationAction
					label="Logout"
					onClick={handleLogout}
					icon={<LogoutIcon />}
				/>
			</BottomNavigation>
		</div>
	);
}

export default NavBar;
