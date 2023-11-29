// src/helpers/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { 
//   FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_APP_ID,
//   FIREBASE_MEASUREMENT_ID
// } from "@env"
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: FIREBASE_API_KEY,
//   authDomain: FIREBASE_AUTH_DOMAIN,
//   projectId: FIREBASE_PROJECT_ID,
//   storageBucket: FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
//   appId: FIREBASE_APP_ID,
//   measurementId: FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDyrfzdIdQ2H4OO657Tnl9_weIXEZlWTSg",
  authDomain: "easy-life-8ae8a.firebaseapp.com",
  projectId: "easy-life-8ae8a",
  storageBucket: "easy-life-8ae8a.appspot.com",
  messagingSenderId: "921679062881",
  appId: "1:921679062881:web:ef796a80dfe61b98788720",
  measurementId: "G-EPSSN8KRFH"
};

// Initialize Firebase
// export const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, firebaseAuth, providerGoogle, db};