// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr8By1bXQEoxJv59rbrK1Yew9lCSW82hs",
  authDomain: "auth-yt-9624d.firebaseapp.com",
  projectId: "auth-yt-9624d",
  storageBucket: "auth-yt-9624d.appspot.com",
  messagingSenderId: "597907559036",
  appId: "1:597907559036:web:eed9629d298a053ad5eff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Test