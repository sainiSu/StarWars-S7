// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmD5g-Ws4ljW93-iTN9M7ZF5_OHII5NBM",
  authDomain: "suman-30f1a.firebaseapp.com",
  projectId: "suman-30f1a",
  storageBucket: "suman-30f1a.appspot.com",
  messagingSenderId: "171770651366",
  appId: "1:171770651366:web:c6ebf5157dfee570ef1127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;