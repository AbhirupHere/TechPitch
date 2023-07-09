// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAG9mWTDBzizw9R6zmGCg1YkoofiH5el8",
  authDomain: "blog-app-auth-69976.firebaseapp.com",
  projectId: "blog-app-auth-69976",
  storageBucket: "blog-app-auth-69976.appspot.com",
  messagingSenderId: "340165811735",
  appId: "1:340165811735:web:2541a3dc66083a23c44652",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
