import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJZJUmSFAvc-JPnmDGf_vVtVzSRiJbffI",
  authDomain: "teste-projeto-01-dfad6.firebaseapp.com",
  projectId: "teste-projeto-01-dfad6",
  storageBucket: "teste-projeto-01-dfad6.firebasestorage.app",
  messagingSenderId: "755302245486",
  appId: "1:755302245486:web:2d2bf7872acbeea307727f",
  measurementId: "G-B7PG9QMLE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);