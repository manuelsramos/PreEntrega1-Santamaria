import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer'
import { NavComponent } from './Components/NavBar/NavBar'

const greetingsContainer = 'Welcome to our shelter'

function App() {


  return (
    <BrowserRouter>
      <NavComponent />
      <Routes>
        <Route path='/' element={<ItemListContainer greetings={greetingsContainer} />} />
        <Route path='/category/dogs' element={<ItemListContainer greetings={greetingsContainer} />} />
        <Route path='/category/cats' element={<ItemListContainer greetings={greetingsContainer} />} />
        {/* <Route path='/detail' element={ />} /> */}
        {/* <Route path='/' element={<ItemListContainer greetings={greetingsContainer} />} /> */}

        <Route path='*' elemet={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
