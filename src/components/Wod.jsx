import React, { useEffect } from "react";
import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, list, getDownloadURL } from "firebase/storage";
import "../stylesheets/wod.scss";
import { UserAuth } from "../contexts/AuthContext";

function Wod() {
  const [wodUpload, setWodUpload] = useState(null);
  const [workoutList, setWorkoutList] = useState([]);
  const imageRef = ref(storage, "images/");
  const { user } = UserAuth();

  const uploadWod = async () => {
    if (wodUpload === null) {
      alert("Please select a file to upload");
      return;
    } else {
      const imageRef = ref(storage, `images/${wodUpload + Date.now()}`);
      console.log(imageRef);
      await uploadBytes(imageRef, wodUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setWorkoutList((prev) => [...prev, url]);
        });
      });
    }
  };

  useEffect(() => {
    list(imageRef).then((res) => {
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          setWorkoutList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="wod-container">
      <h2>Todays Workout</h2>
      {user.email === "august.colonna@gmail.com" && (
        <div className="wod-information">
          <label className="wod-label">Upload Todays Workout:</label>
          <input
            className="wod-input"
            type="file"
            onChange={(event) => {
              setWodUpload(event.target.files[0]);
            }}
          />
          <button className="add-wod-btn" onClick={uploadWod}>
            Add Todays Workout
          </button>
        </div>
      )}

      {workoutList.map((url) => {
        return (
          <div className="wod-img-container" key={url.path_}>
            <img className="wod-img" src={url} alt={"wod"} />
          </div>
        );
      })}
    </div>
  );
}

export default Wod;
