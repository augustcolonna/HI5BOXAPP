import React from "react";

function Profile() {
  return (
    <div className="max-w-screen mx-auto my-10 p-4">
      <h1>Profile Page</h1>
      <p>User email: </p>
      <button className='"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"'>
        Logout
      </button>
    </div>
  );
}

export default Profile;
