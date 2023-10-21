// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const auth = getAuth();
auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ1fgIdK_862j1A4OeovjZ-EXeXQGpHos",
  authDomain: "internetgpt-f81c7.firebaseapp.com",
  projectId: "internetgpt-f81c7",
  storageBucket: "internetgpt-f81c7.appspot.com",
  messagingSenderId: "459954564105",
  appId: "1:459954564105:web:b7c649c746131f86aa5cd8",
  measurementId: "G-XFTJTFNCZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
