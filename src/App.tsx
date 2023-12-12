
import Menu from './components/Menu'
import WelcomePage from './components/WelcomePage'
import './styling/App.css'
import React from 'react'
import {Helmet} from "react-helmet"



function App() {
  const menuItems = ['Our Analytics', 'About']
  

  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link 
          href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&display=swap" 
          rel="stylesheet"/>
      </Helmet>
      <div className="App">
        <Menu title = 'Book Website' menuItems = {menuItems} />
        <WelcomePage/> 
      </div>
    </div>
  )
}

export default App
