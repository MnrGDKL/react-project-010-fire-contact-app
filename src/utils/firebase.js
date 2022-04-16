// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUlVgOC8L4saYvDazc0GWYvgk5dVL0LhU",
  authDomain: "fire-contact-app-f626b.firebaseapp.com",
  databaseURL: "https://fire-contact-app-f626b-default-rtdb.firebaseio.com",
  projectId: "fire-contact-app-f626b",
  storageBucket: "fire-contact-app-f626b.appspot.com",
  messagingSenderId: "778912440311",
  appId: "1:778912440311:web:49a0ef07e8ef5602d658f2"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;