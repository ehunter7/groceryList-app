// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrrdEIZYq4NfWwN27g8OwVHcMEgSEHcys",
  authDomain: "groceryapp-dev-979f0.firebaseapp.com",
  projectId: "groceryapp-dev-979f0",
  storageBucket: "groceryapp-dev-979f0.appspot.com",
  messagingSenderId: "1006250842533",
  appId: "1:1006250842533:web:06474d333fd7a87976704c",
  measurementId: "G-LFEGC4P0KV",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth, firebaseConfig, firebase };

// const analytics = getAnalytics(app);
