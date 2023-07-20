import './App.css';
import Cart from './components/Cart';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart/> } />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer /> } />
          
            
          {/* <Route path='*' element={<Error/>} /> esto tiene que ser el error 404 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
