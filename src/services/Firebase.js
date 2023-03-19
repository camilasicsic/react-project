// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB_TZTUaioo3mueTVqA_ECQ6SBuOe_rlBE",
  authDomain: "react-coder-firebase.firebaseapp.com",
  projectId: "react-coder-firebase",
  storageBucket: "react-coder-firebase.appspot.com",
  messagingSenderId: "663392125860",
  appId: "1:663392125860:web:d0fe409002dceecc413731"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app;
}

export const db = getFirestore(app);
export const storage = getStorage(app);
export const authentication = getAuth(app);

export const userSignOut = () => {
  signOut(authentication);
}