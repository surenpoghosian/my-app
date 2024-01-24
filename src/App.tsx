import { NavBar } from './Components/NavBar/NavBar';
import { Router } from './app/router/Router';
import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './App.module.css'

const App: React.FC = () => {

return(
  <div>
    <NavBar/>
    <Router/>
  </div>
  )
  
}

export default App