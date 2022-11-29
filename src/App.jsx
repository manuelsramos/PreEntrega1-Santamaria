import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { NavComponent } from './Components/NavBar/NavBar'

const saludoContainer = 'Welcome to Home Container'

function App() {
  

  return (
  <div>

    <ItemListContainer  />

    <NavComponent />
  </div>    
  )
}

export default App
