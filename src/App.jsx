import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MiNavbar } from './components/MiNavbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart";
import CartContextProvider from "./contexts/CartContext";
import Checkout from "./components/Checkout";
import { OrdersProvider } from "./contexts/OrdersContext";
import Orders from "./components/Orders";
import User from "./components/User";
import { UserProvider } from "./contexts/UserContext";
import OrderDetailContainer from "./components/OrderDetailContainer";

const App = () => {
  return (
    
    <BrowserRouter>
      <UserProvider>
        <CartContextProvider>
          <OrdersProvider>
            <MiNavbar />
              <Routes>
                  <Route path='/' element={<ItemListContainer />} />
                  <Route path='/categoria/:idCategory' element={<ItemListContainer />} />
                  <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                  <Route path="/orders/:orderId" element={<OrderDetailContainer />} />
                  <Route path='/carrito' element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/user" element={<User />} />
              </Routes>
            <Footer />
          </OrdersProvider>
        </CartContextProvider>
      </UserProvider>
    </BrowserRouter>
    
  )
}

export default App
