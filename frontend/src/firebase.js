import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDnKQLHSjl0X6Lp1nBG4i4whHBV4QY8fUM",
  authDomain: "makeup-expiration-tracker.firebaseapp.com",
  projectId: "makeup-expiration-tracker",
  storageBucket: "makeup-expiration-tracker.firebasestorage.app",
  messagingSenderId: "9202552020",
  appId: "1:9202552020:web:a5b2628b4b29d406d83f41",
  measurementId: "G-ZMHGJ38SMY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };