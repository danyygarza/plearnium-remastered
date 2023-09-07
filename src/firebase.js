// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvNPw5gpFfzZhlRSieQaJ4PUPX8eQq-e4",
  authDomain: "plearnium-remastered.firebaseapp.com",
  projectId: "plearnium-remastered",
  storageBucket: "plearnium-remastered.appspot.com",
  messagingSenderId: "979997207021",
  appId: "1:979997207021:web:b0c4e6e00a94075910dfe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;