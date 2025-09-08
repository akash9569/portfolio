// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwMbsml_pdG1MF2gyK17sKDsEgvFJbocw",
  authDomain: "portfolio-ee887.firebaseapp.com",
  projectId: "portfolio-ee887",
  storageBucket: "portfolio-ee887.firebasestorage.app",
  messagingSenderId: "208955998968",
  appId: "1:208955998968:web:af92263aefa32406e5f10d",
  measurementId: "G-8YXD6TTKMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it
const db = getFirestore(app);

// Export both the app and the db
export { app, db };