// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeEdgARbpFbgykBkmMCHUy6TbgRgF7ugs",
  authDomain: "mariatodolist-app.firebaseapp.com",
  projectId: "mariatodolist-app",
  storageBucket: "mariatodolist-app.appspot.com",
  messagingSenderId: "317008065581",
  appId: "1:317008065581:web:3f4bd70a5e8ad849fb34a4",
  measurementId: "G-ZHR33L49F0",
  databaseUrl: "https://mariatodolist-app-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);