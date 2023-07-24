// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD81B-q3upb9AB4TeZadeySIbrT40cRdRU",
  authDomain: "study-manager-4aa19.firebaseapp.com",
  projectId: "study-manager-4aa19",
  storageBucket: "study-manager-4aa19.appspot.com",
  messagingSenderId: "214308823265",
  appId: "1:214308823265:web:ee24d2582ce43ecc1497a0",
  measurementId: "G-CJJMRVCR5X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
