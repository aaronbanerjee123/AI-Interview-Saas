// Import the functions you need from the SDKs you need
import {initializeApp, getApp, getApps} from "firebase/app"
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyJxakqeXsffrSId2sFeijTqXYQiuLKQk",
  authDomain: "prep-43640.firebaseapp.com",
  projectId: "prep-43640",
  storageBucket: "prep-43640.firebasestorage.app",
  messagingSenderId: "1055648309283",
  appId: "1:1055648309283:web:bfa934d9daf8e56593d196",
  measurementId: "G-4BQNJTD82Y"
}; 

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);