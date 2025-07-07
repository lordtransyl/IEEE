// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"; // ✅ Add this

const firebaseConfig = {
  apiKey: "AIzaSyBy9BJXupdBXgJiIbwlQFTP2ypfApD4xSE",
  authDomain: "ieeenexo-tech2026.firebaseapp.com",
  projectId: "ieeenexo-tech2026",
  storageBucket: "ieeenexo-tech2026.appspot.com",
  messagingSenderId: "719142437431",
  appId: "1:719142437431:web:301b51b4710aa54f4bb5b2",
  measurementId: "G-Z9BQPHMQXY"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app); // ✅ Export auth
