import * as React from 'react'
import { NavBar } from './Pages/NavBar/NavBar';
import { Router } from './app/router/Router';
import { MobileMenu } from './Pages/NavBar/MobileNavBar';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import styles from './App.module.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const firebaseConfig = {
  apiKey: "AIzaSyBKVoLLj8iu0aaLfvLp1DtoUWaeFLNNEp0",
  authDomain: "my-aua-app.firebaseapp.com",
  projectId: "my-aua-app",
  storageBucket: "my-aua-app.appspot.com",
  messagingSenderId: "1036657888310",
  appId: "1:1036657888310:web:61d441b8f1b3c2cf63dc97",
  measurementId: "G-9E849S72Z3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const App: React.FC = () => {

return(
  <div>
    <SpeedInsights/>
    <Analytics/>
    <div className={styles.navBar}>
      <NavBar/>
    </div>

    <div className={styles.mobileNavBar}>
      <MobileMenu/>
    </div>
    <Router/>
  </div>
  )
  
}

export default App