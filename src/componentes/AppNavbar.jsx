import React from "react";
import "./css/appNavbar.css";
const AppNavbar = () => {
  return (
    <div className="AppNavbar">
      <header data-aos="fade-down">
        <div className="container">
          <div className="btn-menu">
            <label htmlFor="btn-menu" className="icon-menu">
              <i className="fa-solid fa-bars"></i>
            </label>
          </div>
          <div className="logo">
            <h1>EYQ</h1>
          </div>
          <nav className="menu">
            <a href="#seccion1">INICIO</a>
            <a href="#seccion2">CONOCIMIENTOS</a>
            <a href="#seccion3">PROYECTOS</a>
            <a href="#seccion4">CONTACTAME</a>
          </nav>
        </div>
      </header>
      <div className="capa"></div>
      <input type="checkbox" id="btn-menu" />
      <div className="container-menu">
        <div className="cont-menu">
          <nav>
            <a href="#seccion1">INICIO</a>
            <a href="#seccion2">CONOCIMIENTOS</a>
            <a href="#seccion3">PROYECTOS</a>
            <a href="#seccion4">CONTACTAME</a>
          </nav>
          <label htmlFor="btn-menu" className="icon-equis">
            <i className="fa-solid fa-x"></i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
