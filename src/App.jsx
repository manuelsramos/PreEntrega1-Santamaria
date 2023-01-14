import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer'
import { NavComponent } from './Components/NavBar/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './Context/Cartcontext'
import CartContainer from './containers/CartContainer/CartContainer'
import { NoIdComponent } from './Components/NoIdComponent/NoIdComponent'

const greetingsContainer = 'Welcome, just in time!'

function App() {


  return (

    < CartContextProvider>
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route path='/' element={<ItemListContainer greetings={greetingsContainer} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greetings={greetingsContainer} />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />

          <Route path='*' element={<NoIdComponent />} />
          {/* <Route path='*' element={<Navigate to='/' />} /> */}



        </Routes>
      </BrowserRouter>
    </CartContextProvider>

  )
}

export default App
