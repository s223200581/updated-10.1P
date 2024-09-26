import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdyWnc6--K_pDKko9PKRu5XuaOip6d2Ac",
  authDomain: "login-and-registration-p-22755.firebaseapp.com",
  projectId: "login-and-registration-p-22755",
  storageBucket: "login-and-registration-p-22755.appspot.com",
  messagingSenderId: "277330466932",
  appId: "1:277330466932:web:2e8334788a4910d43e9921",
  measurementId: "G-546VCMLT5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };