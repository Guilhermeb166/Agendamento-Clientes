import { initializeApp } from "../firebase/app.js";
import { getFirestore } from "../firebase/app.js";

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCd2e5Rx16niIMw6ie4aEuBYC5cDV8N-Xo",
    authDomain: "feitosabarber.firebaseapp.com",
    projectId: "feitosabarber",
    storageBucket: "feitosabarber.appspot.com",
    messagingSenderId: "135027420342",
    appId: "1:135027420342:web:0778dba84595b23e850a17",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
