// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqGL_3Cc0Z7wK51Qv5JQvE2_ksMVzU2Nw",
  authDomain: "tvs-apache-motosoul.firebaseapp.com",
  projectId: "tvs-apache-motosoul",
  storageBucket: "tvs-apache-motosoul.appspot.com",
  messagingSenderId: "762344460883",
  appId: "1:762344460883:web:f134a1019f3804fc7b2ca6",
  measurementId: "G-X9SZDMF2YL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);