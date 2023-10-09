import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import GoogleButton from "react-google-button";
import logo from "../assets/hi5Boxbig.png";
import "../stylesheets/register.scss";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const { createUser, googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password, displayName);
      navigate("/profile");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/profile");
    }
  });

  return (
    <div className="main-container">
      <div className="container">
        <div className="logo">
          <img className="animate__slideInDown" src={logo} alt="logo" />
        </div>
        <div className="content-container">
          <h1 className="form-title">Signup</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <div>
              <label className="form-labels">User Name</label>
              <input
                onChange={(event) => setDisplayName(event.target.value)}
                type="text"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-labels">Email</label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-labels">Password</label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="form-input"
              />
            </div>
            <div className="button-container">
              <button className="register-btn">Sign Up</button>
            </div>
          </form>
          <GoogleButton
            label="Sign up with Google"
            className="google-btn"
            onClick={handleGoogleSignIn}
          />
          <p className="change-register-method">
            Already have an account?
            <span>
              <Link to="/"> Login here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
