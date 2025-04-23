// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv8AUDRx2CH6ongnMrI05PY4qwwlcwS8g",
  authDomain: "hackhtahonpracticereact.firebaseapp.com",
  projectId: "hackhtahonpracticereact",
  storageBucket: "hackhtahonpracticereact.firebasestorage.app",
  messagingSenderId: "987837455685",
  appId: "1:987837455685:web:d54bac7e555826d2b2322c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);

export { fireDb, auth };