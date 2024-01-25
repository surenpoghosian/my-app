import { NavBar } from './Pages/NavBar/NavBar';
import { Router } from './app/router/Router';
import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './App.module.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKVoLLj8iu0aaLfvLp1DtoUWaeFLNNEp0",
  authDomain: "my-aua-app.firebaseapp.com",
  projectId: "my-aua-app",
  storageBucket: "my-aua-app.appspot.com",
  messagingSenderId: "1036657888310",
  appId: "1:1036657888310:web:61d441b8f1b3c2cf63dc97",
  measurementId: "G-9E849S72Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const App: React.FC = () => {

return(
  <div>
    <NavBar/>
    <Router/>
  </div>
  )
  
}

export default App