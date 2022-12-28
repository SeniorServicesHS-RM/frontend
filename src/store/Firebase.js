// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS-z-v7y1ZySfCbz7bzNcifntCHPQvhHQ",
  authDomain: "seniorservice-e157b.firebaseapp.com",
  projectId: "seniorservice-e157b",
  storageBucket: "seniorservice-e157b.appspot.com",
  messagingSenderId: "107237685883",
  appId: "1:107237685883:web:f18d159466e5471bd2c0de",
  measurementId: "G-QNFH8LJ9NC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const analytics = getAnalytics(app);
