import React, { useEffect, useState } from 'react';
import './css/conocimientos.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getConocimiento } from '../store/slices/conocimientos.slice';
const Conocimientos = () => {
    
    const dispatch=useDispatch()
    const lenguaje=useSelector(state=>state.conocimientoSlice)
    useEffect(()=>{
        dispatch(getConocimiento())
    },[])
        
    return (
        <div className='conocimientos'>
            <div  className="cajaCono">
                <div data-aos="fade-right"className="infConocimiento">
                    <h2>CONOCIMIENTOS .</h2>
           <p> Hola! Soy Edward, un apasionado desarrollador Full Stack y amante de la tecnología. Mi enfoque principal es aprender de manera autodidacta y mejorar constantemente mis habilidades. Estoy emocionado por la oportunidad de formar parte de tu equipo y contribuir con entusiasmo y dedicación a cada proyecto que se me encomiende. Mi objetivo es aportar soluciones innovadoras y brindar un alto rendimiento en cada desafío.</p>
            </div>
            <div data-aos="fade-left" className="imgConocimiento">
                {
                    lenguaje?.map((item)=>(
                        <img key={item.imagen} src={item.imagen} alt="" />
                    ))
                }
            </div>
            </div>
            
        </div>
    );
};

export default Conocimientos;