import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "max-design-cm.firebaseapp.com",
  projectId: "max-design-cm",
  storageBucket: "max-design-cm.appspot.com",
  messagingSenderId: "148886079920",
  appId: "1:148886079920:web:b9d90e9beb0e61511bee75",
  measurementId: "G-W44MP8VXL6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
const analytics = getAnalytics(app);
