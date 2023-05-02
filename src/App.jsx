import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer'
import { NavComponent } from './Components/NavBar/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './Context/Cartcontext'
import CartContainer from './containers/CartContainer/CartContainer'
import { NoIdComponent } from './Components/NoIdComponent/NoIdComponent'
import BuyOrder from './Components/BuyOrder/BuyOrder'

const greetingsContainer = 'Welcome to Watched Store'

function App() {


  return (

    < CartContextProvider>
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route path='/' element={<ItemListContainer greetings={greetingsContainer} name='home' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greetings={greetingsContainer} />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/buy-order' element={<BuyOrder />} />

          <Route path='*' element={<NoIdComponent />} />



        </Routes>
      </BrowserRouter>
    </CartContextProvider>

  )
}

export default App

