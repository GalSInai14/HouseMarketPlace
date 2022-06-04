// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLY3IEpkjjDVyaG6JaeIBcM1bvx0WMaME",
  authDomain: "house-marketplace-app-89c81.firebaseapp.com",
  projectId: "house-marketplace-app-89c81",
  storageBucket: "house-marketplace-app-89c81.appspot.com",
  messagingSenderId: "1079727007546",
  appId: "1:1079727007546:web:ee56f414d2bb32312dd203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);