import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYJK6P2_Sm2BLRRUNhJdVlZzDFcbo1tF0",
    authDomain: "testeagendamento-ab852.firebaseapp.com",
    projectId: "testeagendamento-ab852",
    storageBucket: "testeagendamento-ab852.appspot.com",
    messagingSenderId: "1029443654522",
    appId: "1:1029443654522:web:9b125e96c455c1ef047cc3",
    measurementId: "G-S4KR4HRHSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
