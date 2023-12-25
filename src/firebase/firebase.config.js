// Import the functions you need from the SDKs you need
// require("dotenv").config();

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.FIREBASE_API_KEY,
  apiKey: "AIzaSyCU2rDAkw_gbmO6diWRJerq77LjJ1rkj20",
  authDomain: "budget-bookshelf.firebaseapp.com",
  projectId: "budget-bookshelf",
  storageBucket: "budget-bookshelf.appspot.com",
  messagingSenderId: "682202136997",
  appId: "1:682202136997:web:0c6617369474f531bda84c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;