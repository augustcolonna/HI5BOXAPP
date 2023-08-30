import React, { useEffect } from "react";
import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, list, getDownloadURL } from "firebase/storage";

function Wod() {
  const [wodUpload, setWodUpload] = useState(null);
  const [workoutList, setWorkoutList] = useState([]);

  const imageRef = ref(storage, "images/");
  const uploadWod = () => {
    if (wodUpload === null) return;
    const imageRef = ref(storage, `images/${wodUpload.name + Date.now()}`);
    uploadBytes(imageRef, wodUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setWorkoutList((prev) => [...prev, url]);
      });
    });
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
      <input
        type="file"
        onChange={(event) => {
          setWodUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadWod}>Add Todays Workout</button>
      {workoutList.map((url) => {
        return (
          <div key={url.path_}>
            <img src={url} alt={"wod"} />
          </div>
        );
      })}
    </div>
  );
}

export default Wod;
