import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCxs9x54uSc-S35h9Xjekpstorcn6MMNFM",
    authDomain: "city-shops.firebaseapp.com",
    projectId: "city-shops",
    storageBucket: "city-shops.appspot.com",
    messagingSenderId: "992265461180",
    appId: "1:992265461180:web:290d6391a5e377c0dddfb9",
    measurementId: "G-M3QZNMSD7K"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
