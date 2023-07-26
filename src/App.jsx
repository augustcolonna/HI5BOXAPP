import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import PrivateRoute from './components/PrivateRoute'
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";



function App() {
  return (
    <div className="App">
      <h1 className="text-center text-3xl text-green-700 font-bold mt-6">
        {" "}
        HI-5-BOX GYM{" "}
      </h1>
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
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
