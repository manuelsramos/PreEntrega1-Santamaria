
//import './App.css'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { NavComponent } from './Components/NavBar/NavBar'

const greetingsContainer = 'Welcome to Home Container'

function App() {
  

  return (
  <div>

    <NavComponent />
    <ItemListContainer greetings={greetingsContainer} />
 
  </div>    
  )
}

export default App
