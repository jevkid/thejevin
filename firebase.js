// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWri0Ys7Aaa58cV0tir5lNNePBCNdEScg",
  authDomain: "portfolio-2b1d1.firebaseapp.com",
  projectId: "portfolio-2b1d1",
  storageBucket: "portfolio-2b1d1.appspot.com",
  messagingSenderId: "150197317523",
  appId: "1:150197317523:web:8d55680527ef0526dc4266",
  measurementId: "G-N32M96TL8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);