// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-bd273.firebaseapp.com",
  projectId: "mern-estate-bd273",
  storageBucket: "mern-estate-bd273.appspot.com",
  messagingSenderId: "1073641846012",
  appId: "1:1073641846012:web:316f2d9ec1520d7c9e1379"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);