import React from "react";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./utils/PrivateRoute";
import Fitness from "./components/Fitness";
import Football from "./components/Football";
import Hockey from "./components/Hockey";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

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
            path="/fitness"
            element={
              <PrivateRoute>
                <Fitness />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/football"
            element={
              <PrivateRoute>
                <Football />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/hockey"
            element={
              <PrivateRoute>
                <Hockey />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
