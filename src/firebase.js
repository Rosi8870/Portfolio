import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAEsccmrqL2FJ12gP74jnDW4I6OjX-hKI4",
  authDomain: "engaged-root-400115.firebaseapp.com",
  projectId: "engaged-root-400115",
  storageBucket: "engaged-root-400115.appspot.com", // ✅ FIXED
  messagingSenderId: "796072622562",
  appId: "1:796072622562:web:8d7b7554fcd8832803e1bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };