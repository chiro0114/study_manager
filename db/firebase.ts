import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore(app);
export const auth = getAuth(app);
