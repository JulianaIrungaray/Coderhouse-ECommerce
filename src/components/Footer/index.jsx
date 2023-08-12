import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a
          className="social-link"
          href="https://github.com/JulianaIrungaray?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/juliana-irungaray/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          className="social-link"
          href="https://www.instagram.com/jukiirungaray/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Todos los derechos reservados | Desarrollado por Juliana Irungaray
      </div>
    </footer>
  );
};

export default Footer;
