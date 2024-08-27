
// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvnGak3NEVpjfmLQU4WjFBlpuAlj0GAmo",
  authDomain: "wherecubeapp.firebaseapp.com",
  projectId: "wherecubeapp",
  storageBucket: "wherecubeapp.appspot.com",
  messagingSenderId: "210335628198",
  appId: "1:210335628198:android:789f7f3cdc559d446d2d67"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };

