// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAMp-o3T3sH42Ofb-bdGpF8Hv3aGHFV_FU",
  authDomain: "frontend-project-129d8.firebaseapp.com",
  projectId: "frontend-project-129d8",
  storageBucket: "frontend-project-129d8.appspot.com",
  messagingSenderId: "282545592375",
  appId: "1:282545592375:web:a008ebbb6c50f3dc8047b2",
  measurementId: "G-S3NCXHH1HL"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth }
