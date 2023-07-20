import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav__links">    
          <ul>
            <li>
              <NavLink className="nav__link logo" > <img alt='logo' src='./logo.png' width={350}></img> </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to='/'>Inicio</NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to='./categoria/educativo'>Educativos</NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to='./categoria/entretenimiento'>Entretenimiento</NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to='./categoria/asistencia'>Asistencia</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav__links nav__links--right">
          <ul>
            <li>
              <NavLink className="nav__link nav__link--cart" to='./cart'><CartWidget/></NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
