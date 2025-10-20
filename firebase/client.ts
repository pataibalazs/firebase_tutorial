// Import the functions you need from the SDKs you need
import { getApps } from "firebase/app";
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWQwnoDW8zUEu-jG3n1v-1rAeD1CaJEkg",
  authDomain: "fire-homes-course-fdeda.firebaseapp.com",
  projectId: "fire-homes-course-fdeda",
  storageBucket: "fire-homes-course-fdeda.firebasestorage.app",
  messagingSenderId: "240315610551",
  appId: "1:240315610551:web:4147450aca2568f0f66432",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, storage };
