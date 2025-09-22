import { auth, db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Register user
export const registerUser = async (
  fullName: string,
  email: string,
  password: string,
  role: string,
  userCode?: string,
  phoneNumber?: string
) => {
  // Firebase Authentication
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const uid = cred.user.uid;

  // Save additional user info in Firestore
  await setDoc(doc(db, "users", uid), {
    uid,
    fullName,
    email,
    role,
    userCode: userCode || null,
    phoneNumber: phoneNumber || null,
    status: "active",
    createdAt: new Date(),
  });

  return cred.user;
};

// Login user + get Firestore data
export const loginUser = async (email: string, password: string) => {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  const uid = cred.user.uid;

  const userDoc = await getDoc(doc(db, "users", uid));
  if (!userDoc.exists()) throw new Error("User not found in Firestore");

  const data = userDoc.data();
  return data; // includes role, fullName, userCode, phoneNumber, etc.
};

// Logout
export const logoutUser = () => signOut(auth);
