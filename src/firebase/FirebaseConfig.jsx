// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqLBIFyKu2NIPsEMoHynHNk7yKJRRngkY",
  authDomain: "myecom-bf75a.firebaseapp.com",
  projectId: "myecom-bf75a",
  storageBucket: "myecom-bf75a.appspot.com",
  messagingSenderId: "185885568213",
  appId: "1:185885568213:web:6914b76ea6e5b173cc865c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }