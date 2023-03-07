import firebase from "firebase";
require("@firebase/firestore");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABJDeE0sB6GQpmdUCJ2CxViL3L2w2sHKM",
  authDomain: "e-library-app-4a9ec.firebaseapp.com",
  projectId: "e-library-app-4a9ec",
  storageBucket: "e-library-app-4a9ec.appspot.com",
  messagingSenderId: "752005964836",
  appId: "1:752005964836:web:4ac777d69b697d573564b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
