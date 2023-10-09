import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import GoogleButton from "react-google-button";
import logo from "../assets/hi5Boxbig.png";
import "../stylesheets/register.scss";

function Signin() {
  const { signIn, googleSignIn, user } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/profile");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="content-container">
          <h1 className="form-title">LOG IN</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <div>
              <label className="form-labels">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
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
              <button className="register-btn">Log in</button>
            </div>
          </form>
          <GoogleButton
            label="Log in with Google"
            className="google-btn"
            type="light"
            onClick={handleGoogleSignIn}
          />
          <p className="change-register-method">
            Dont have an account?{" "}
            <span>
              <Link to="/signup">Sign up here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
