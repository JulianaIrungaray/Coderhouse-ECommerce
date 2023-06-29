import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget.js';
import logo from '../NavBar/logo.png';
import './NavBar.css'; 


const NavBar = () => {

  return (
    <>
    <Navbar className="navBg" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo}  alt="Ghibli Store Logo" className="logo-img"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Inicio">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/Categorias">Categorias</Nav.Link>
            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
      <Outlet></Outlet>{/*Actúa como un marcador de posición para renderizar el componente asociado a la ruta actual en la que te encuentras. */}
    </section>
    </>
  )
}
export default NavBar;