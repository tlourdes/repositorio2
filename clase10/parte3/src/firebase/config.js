import app from "firebase/app";
import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDgSMm4VJuOMjNWit04MNmAZlepy54-Ekk",
  authDomain: "demofirebase-164fd.firebaseapp.com",
  projectId: "demofirebase-164fd",
  storageBucket: "demofirebase-164fd.firebasestorage.app",
  messagingSenderId: "548660856181",
  appId: "1:548660856181:web:831ea9754e6661fd59ff3c"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();