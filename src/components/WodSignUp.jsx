import React, { useState } from "react";
import { UserAuth } from "../contexts/AuthContext";
import Wod from "./Wod";

function WodSignUp() {
  const { user } = UserAuth();
  const [likes, setLikes] = useState(0);
  const [likedBy, setLikedBy] = useState([]);

  const likeWod = () => {
    setLikes(likes + 1);
    setLikedBy([...likedBy, user.displayName]);
  };

  return (
    <div>
      <Wod />
       <button onClick={likeWod}>Sign Up for the Class!</button>
    </div>
  );
}

export default WodSignUp;
