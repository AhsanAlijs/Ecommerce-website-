// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBRdPt-XFybrP8abLS9IFpz-SsuI5hiMNc",
    authDomain: "ecommerce-shop-4ba78.firebaseapp.com",
    projectId: "ecommerce-shop-4ba78",
    storageBucket: "ecommerce-shop-4ba78.appspot.com",
    messagingSenderId: "82824908697",
    appId: "1:82824908697:web:c2c45c2eb5496e8dc70d08",
    measurementId: "G-H141QFBVYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)