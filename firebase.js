
import { initializeApp } from "firebase/app";
import {  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDn0k7V7YN9gU-B_4V3tHth9K9SPipiLjA",
  authDomain: "giggr-messenger-1dea7.firebaseapp.com",
  projectId: "giggr-messenger-1dea7",
  storageBucket: "giggr-messenger-1dea7.appspot.com",
  messagingSenderId: "916230819971",
  appId: "1:916230819971:web:aad6e132fb2d3e3ec6cbb6",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}