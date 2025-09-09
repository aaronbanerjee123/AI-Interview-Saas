// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);