// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd2e5Rx16niIMw6ie4aEuBYC5cDV8N-Xo",
  authDomain: "feitosabarber.firebaseapp.com",
  projectId: "feitosabarber",
  storageBucket: "feitosabarber.appspot.com",
  messagingSenderId: "135027420342",
  appId: "1:135027420342:web:0778dba84595b23e850a17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
