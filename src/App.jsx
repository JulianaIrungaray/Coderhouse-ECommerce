import './App.css';
import Cart from './components/Cart';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Footer from './components/Footer';
import Error from './components/Error';
import { Checkout } from './components/Checkout';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart/> } />
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer /> } />
              <Route path="/checkout" element={<Checkout />} />
              <Route path='*' element={<Error/>} /> 
            </Routes> 
            <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
