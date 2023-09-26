import React from "react";
import "./css/conoceme.css";
import fondoC from "../img/react.jpg";
const Conoceme = () => {
  return (
    <div  className="conoceme">
      <div  className="capa">
        <div className="cajaConoceme">
          <div className="img">
            <img data-aos="zoom-in" src={fondoC} alt="" />
          </div>
          <div data-aos="fade-left" className="inf">
            <h1>Hola!</h1>
            <h4>Soy Edward Yllanes Quirari</h4>
            <div className="todo-conoceme">
              <p>Programador </p>
              <div className="opciones">
                <span>FRONT-END</span>
                <span>BACK-END</span>
                <span>FULL-STACK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conoceme;
