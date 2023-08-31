import React from "react";

function Dashboard() {
  const [wodUpload, setWodUpload] = useState(null);
  const [workoutList, setWorkoutList] = useState([]);

  const imageRef = ref(storage, "images/");
  const uploadWod = () => {
    if (wodUpload === null) return;
    const imageRef = ref(storage, `images/${wodUpload.name + Date.now()}`);
    console.log(imageRef);
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
    <div>
      <input
        type="file"
        onChange={(event) => {
          setWodUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadWod}>Add Todays Workout</button>
    </div>
  );
}

export default Dashboard;
