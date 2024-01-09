// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-dream-estate.firebaseapp.com",
  projectId: "mern-dream-estate",
  storageBucket: "mern-dream-estate.appspot.com",
  messagingSenderId: "208668628605",
  appId: "1:208668628605:web:4ea7dd2d61762a74f4c314",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
