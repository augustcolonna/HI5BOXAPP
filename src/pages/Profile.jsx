import React, { useEffect } from "react";
import { useState } from "react";
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NavBar from "../components/NavBar";

import "../stylesheets/profile.scss";

function Profile() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [myWorkouts, setMyWorkouts] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const workoutsCollection = collection(db, "myWorkouts");

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const data = await getDocs(workoutsCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        setMyWorkouts(filteredData);
      } catch (err) {
        console.log(err.message);
      }
    };
    getWorkouts();
  }, []);

  const cancelWorkout = async (id) => {
    const workoutDoc = doc(db, "myWorkouts", id);
    await deleteDoc(workoutDoc);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You have successfully logged out");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleNavigate = () => {
    try {
      navigate("/fitness");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-information">
        <h1>Hello, {user && user.displayName}!</h1>
        <p>email: {user && user.email} </p>
        <div>
          <Button
            id="positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{
              color: "#EEEDED",
              backgroundColor: "#3D703A",
            }}
            onClick={handleClick}
          >
            Dashboard
          </Button>
          <Menu
            id="positioned-menu"
            aria-labelledby="positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleNavigate}>My Classes</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
        <div className="gym-news">
          <h2>iframe instagram page here</h2>
        </div>
        <div>
          <h2>My Workouts this Week</h2>
          {myWorkouts.map((workout) => {
            return (
              <div key={workout.id}>
                <h3>{workout.title}</h3>
                <p>{workout.time}</p>
                <button onClick={() => cancelWorkout(workout.id)}>
                  Cancel
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Profile;
