// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRDjIC0uKv7l0nrL0nThch8Su3eQRvCvQ",
  authDomain: "terrabuild-79413.firebaseapp.com",
  projectId: "terrabuild-79413",
  storageBucket: "terrabuild-79413.appspot.com",
  messagingSenderId: "626144437599",
  appId: "1:626144437599:web:8fd1fec731e50dce8f82ea",
  measurementId: "G-BJ7FZ9FKZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {db}