import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCHZJRt9iNj49XPSlwp1czH4Jybdn9GfuQ",
    authDomain: "fir-hosting-auth.firebaseapp.com",
    projectId: "fir-hosting-auth",
    storageBucket: "fir-hosting-auth.appspot.com",
    messagingSenderId: "100354185053",
    appId: "1:100354185053:web:0f2df773138e98ce173ab4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;