// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVup7V3aj-3cSOp5kX1ejzZgHTRF7L4oY",
  authDomain: "pair-80-dts-mini-project.firebaseapp.com",
  projectId: "pair-80-dts-mini-project",
  storageBucket: "pair-80-dts-mini-project.appspot.com",
  messagingSenderId: "27590358312",
  appId: "1:27590358312:web:1a4ec9d995bbe6c6cdcc1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };