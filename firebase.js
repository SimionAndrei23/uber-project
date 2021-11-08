import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA2PmS8ZaPJ8jF_nRG3Fki-Vv-UN3VpdEA",
    authDomain: "uber-log-6dfc5.firebaseapp.com",
    projectId: "uber-log-6dfc5",
    storageBucket: "uber-log-6dfc5.appspot.com",
    messagingSenderId: "1077710396192",
    appId: "1:1077710396192:web:76961dcf979b37938e9545",
    measurementId: "G-QD1BL0TWJL"
  };

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider() // For the popup

const auth = getAuth() // To check if the user is connected or no

export { app, provider, auth}
  