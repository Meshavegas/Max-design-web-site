import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "max-design-db.firebaseapp.com",
  projectId: "max-design-db",
  storageBucket: "max-design-db.appspot.com",
  messagingSenderId: "741638514436",
  appId: "1:741638514436:web:20cfe6be0697104fbb9251",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
