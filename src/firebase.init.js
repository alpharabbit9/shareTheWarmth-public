// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB75u2X-uoJlTK-vJpinft_zUjVHMKYixQ",
  authDomain: "sharewarmth-ffadc.firebaseapp.com",
  projectId: "sharewarmth-ffadc",
  storageBucket: "sharewarmth-ffadc.firebasestorage.app",
  messagingSenderId: "543167069865",
  appId: "1:543167069865:web:4e24affc6300a59650b3b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);