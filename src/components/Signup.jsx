import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const { createUser } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/profile')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

 
  return (
    <div>
      <div className="relative flex flex-col justify-center min-w-screen max-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-green-700">
            Signup
          </h1>
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-2">
              <label
            
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
               
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
              onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <Link to="#" className="text-xs text-green-600 hover:underline">
              Forget Password?
            </Link>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <Link to="/" className="font-medium text-green-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
