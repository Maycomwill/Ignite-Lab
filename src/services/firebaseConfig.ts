import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDH5fcFTi6ynFO07tiBYHTup16rM0X4mjk",
  authDomain: "caderneta-digital-f5170.firebaseapp.com",
  projectId: "caderneta-digital-f5170",
  storageBucket: "caderneta-digital-f5170.appspot.com",
  messagingSenderId: "96086700983",
  appId: "1:96086700983:web:0b741196feb8fcc168ae32",
  measurementId: "G-ZFGWM3G4YL"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);