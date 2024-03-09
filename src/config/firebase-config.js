// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOmbYpXS_LXNf4fIGLmURVgSAlEyL34HY",
  authDomain: "expense-tracker-c811f.firebaseapp.com",
  projectId: "expense-tracker-c811f",
  storageBucket: "expense-tracker-c811f.appspot.com",
  messagingSenderId: "373525816352",
  appId: "1:373525816352:web:633175997194d2c14a8845",
  measurementId: "G-058WGEME6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
//firebase login
//firebase init
//firebase deploy