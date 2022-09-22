import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2h0Ux0YoFq3K0Ugv31oy21G9GMWsvaKI",
  authDomain: "notes-ec6a7.firebaseapp.com",
  databaseURL: "https://notes-ec6a7-default-rtdb.firebaseio.com",
  projectId: "notes-ec6a7",
  storageBucket: "notes-ec6a7.appspot.com",
  messagingSenderId: "838357738572",
  appId: "1:838357738572:web:dd4b23de6c636a714a00e9"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
