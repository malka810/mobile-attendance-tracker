import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA8oKzu4Tpt-I1YFXF727GdJ-rCQFQuEmk",
  authDomain: "mobile-attendance-tracke-724c5.firebaseapp.com",
  projectId: "mobile-attendance-tracke-724c5",
  storageBucket: "mobile-attendance-tracke-724c5.firebasestorage.app",
  messagingSenderId: "651581755122",
  appId: "1:651581755122:web:d2f63ca883355546ee4a6b",
  measurementId: "G-DMMVV05NNQ"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)