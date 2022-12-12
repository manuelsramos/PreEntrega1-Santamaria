import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { NavComponent } from './Components/NavBar/NavBar'

const greetingsContainer = 'Welcome to Home Container'

function App() {


  return (
    <BrowserRouter>
      <NavComponent />
      <Routes>
        <Route path='/' element={<ItemListContainer greetings={greetingsContainer} />} />
        {/* <Route path='/detail' element={ />} /> */}
        {/* <Route path='/' element={<ItemListContainer greetings={greetingsContainer} />} /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
