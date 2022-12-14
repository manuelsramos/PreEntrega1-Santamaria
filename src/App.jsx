import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer'
import { NavComponent } from './Components/NavBar/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'

const greetingsContainer = 'Welcome to our shelter'

function App() {


  return (
    <BrowserRouter>
      <NavComponent />
      <Routes>
        <Route path='/' element={<ItemListContainer greetings={greetingsContainer} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greetings={greetingsContainer} />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />


        <Route path='*' elemet={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
