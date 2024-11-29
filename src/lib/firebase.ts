import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPsdSg8xirj_iCu8B-v5mpOVMPbXzsyEI",
  authDomain: "awarenesscoin-bf206.firebaseapp.com",
  projectId: "awarenesscoin-bf206",
  storageBucket: "awarenesscoin-bf206.firebasestorage.app",
  messagingSenderId: "53114012379",
  appId: "1:53114012379:web:9495434ffb060773ef02fe",
  measurementId: "G-3QX8L728W8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);