import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgV862fNMqND5PP7dL0paRnj71wBUEcko",
  authDomain: "clone-30dbb.firebaseapp.com",
  projectId: "clone-30dbb",
  storageBucket: "clone-30dbb.appspot.com",
  messagingSenderId: "872076817484",
  appId: "1:872076817484:web:dff97c150373667bf270e9",
  measurementId: "G-1E5H8SN087",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
