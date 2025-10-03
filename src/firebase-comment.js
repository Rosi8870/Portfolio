import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEsccmrqL2FJ12gP74jnDW4I6OjX-hKI4",
  authDomain: "engaged-root-400115.firebaseapp.com",
  projectId: "engaged-root-400115",
  storageBucket: "engaged-root-400115.appspot.com", // ✅ fixed
  messagingSenderId: "796072622562",
  appId: "1:796072622562:web:8d7b7554fcd8832803e1bb"
};

// Initialize Firebase app (optional: you can omit name if it's the only app)
const app = initializeApp(firebaseConfig); // or use 'comments-app' if you're using multiple apps
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
