import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd-s_ItswSHeI7eM0pNrYzjdg4cF405XE",
  authDomain: "clone-d9b71.firebaseapp.com",
  projectId: "clone-d9b71",
  storageBucket: "clone-d9b71.appspot.com",
  messagingSenderId: "968845187573",
  appId: "1:968845187573:web:f812d7d14b6ce12e0ba8bc"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
