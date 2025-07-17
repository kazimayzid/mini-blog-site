// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1BWsmEBsZuPdWrDfHYXc10dlyiYLWJRk",
  authDomain: "mini-blog-site.firebaseapp.com",
  projectId: "mini-blog-site",
  storageBucket: "mini-blog-site.firebasestorage.app",
  messagingSenderId: "954364594917",
  appId: "1:954364594917:web:9d509b087512c619bbe20c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig