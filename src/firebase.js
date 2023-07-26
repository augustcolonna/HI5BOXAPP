// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7S-cdbJPk0Rjbm9bSKwvK1IahgxG3kN4",
  authDomain: "hi5boxapp.firebaseapp.com",
  projectId: "hi5boxapp",
  storageBucket: "hi5boxapp.appspot.com",
  messagingSenderId: "466375421019" ,
  appId: "1:466375421019:web:49b786f14ce208e217637e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
