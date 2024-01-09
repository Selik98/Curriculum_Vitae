// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8b918j0cabSq4ZYz3tHNPgnYER3jJq4o",
  authDomain: "cv-matias-kiesel.firebaseapp.com",
  projectId: "cv-matias-kiesel",
  storageBucket: "cv-matias-kiesel.appspot.com",
  messagingSenderId: "452826638683",
  appId: "1:452826638683:web:98ed3b7f0147def13c127e",
  measurementId: "G-C0XSZL665M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export default app;