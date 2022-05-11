// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCf9eJ75TVR17Eqr3HBDIDRd4SUsUM5Zc",
    authDomain: "doctor-portal-b2266.firebaseapp.com",
    projectId: "doctor-portal-b2266",
    storageBucket: "doctor-portal-b2266.appspot.com",
    messagingSenderId: "886799194583",
    appId: "1:886799194583:web:4e22e698190811d97c9392"

    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth