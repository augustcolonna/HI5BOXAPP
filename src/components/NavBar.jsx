import React from "react";
import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HomeIcon from "@mui/icons-material/Home";
import "../stylesheets/navbar.scss";

function NavBar() {
	return (
		<div className="nav-container">
			<BottomNavigation className="nav" showLabels>
				<BottomNavigationAction
					component={Link}
					to="/profile"
					label="Home"
					icon={<HomeIcon />}
				/>
				<BottomNavigationAction
					component={Link}
					to="/fitness"
					label="Fitness"
					icon={<FitnessCenterIcon />}
				/>
				<BottomNavigationAction
					component={Link}
					to="/football"
					label="football"
					icon={<SportsSoccerIcon />}
				/>
				<BottomNavigationAction
					component={Link}
					to="/hockey"
					label="Hockey"
					icon={<SportsHockeyIcon />}
				/>
			</BottomNavigation>
		</div>
	);
}

export default NavBar;
