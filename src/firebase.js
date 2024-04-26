// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI8x47W47kAM0Hmj0sMk8hfGSN4DpQIgQ",
  authDomain: "next--yt.firebaseapp.com",
  projectId: "next--yt",
  storageBucket: "next--yt.appspot.com",
  messagingSenderId: "36988010454",
  appId: "1:36988010454:web:5615afa3b9baffe06eae77",
  measurementId: "G-TZ087JKEMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);