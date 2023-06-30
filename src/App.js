import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Inicio from './components/NavBar/Inicio/Inicio.js';
import Nosotros from './components/NavBar/Nosotros/Nosotros.js';
import Categorias from './components/NavBar/Categorias/Categorias.js';
import Contacto from './components/NavBar/Contacto/Contacto.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>}> {/*Elemento padre*/}
            <Route path='Inicio' element={<Inicio/>}/>
            <Route path='Nosotros' element={<Nosotros/>}/>
            <Route path='Categorias' element={<Categorias/>}/>
            <Route path='Contacto' element={<Contacto/>}/>
            
           
            <Route path='*' element={<Navigate replace to="/"/>}/>
          </Route> 
        </Routes>
        <ItemListContainer greeting="¡Bienvenido(a)! Este e-commerce será sobre ventas de productos de Studio Ghibli" />
      </BrowserRouter>
    </div>
  );
}

export default App;
