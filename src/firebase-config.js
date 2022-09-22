import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {collection} from ""

const firebaseConfig = {
    apiKey: "AIzaSyB3wo8uJGaAXtzReJKk_HhsHPGX8dbog-E",
    authDomain: "fir-crud-2d185.firebaseapp.com",
    projectId: "fir-crud-2d185",
    storageBucket: "fir-crud-2d185.appspot.com",
    messagingSenderId: "784719299281",
    appId: "1:784719299281:web:4ac7c01c857339bc8abbf0",
    measurementId: "G-T39XH26721"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)