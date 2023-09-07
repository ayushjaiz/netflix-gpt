// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCY3MWCfUDvIuKT9FnwZy_H8CkskKtRa7A",
    authDomain: "netflixgpt-46a01.firebaseapp.com",
    projectId: "netflixgpt-46a01",
    storageBucket: "netflixgpt-46a01.appspot.com",
    messagingSenderId: "371193197044",
    appId: "1:371193197044:web:75f8459738d8c10b8e49a1",
    measurementId: "G-F6BJKWKYSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();