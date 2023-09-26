import React, { useState } from 'react';
import './css/contactame.css'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { thunkEnvio } from '../store/slices/mensaje.slice';
const Contactame = () => {
    
    const {register,handleSubmit}=useForm()
    const dispatch=useDispatch()
    const submit=(data)=>{
        dispatch(thunkEnvio(data))
        alert('mensaje enviado, gracias')
    }
    
    return (
        
        <div className='contactame'>
            <div className="tituloContactame">
                <h2>CONTACTAME .</h2>
            </div>
            
            <div data-aos="zoom-out"data-aos-duration="2000" className="formulario">
                <form onSubmit={handleSubmit(submit)}>
                <div className="input">
                    <label htmlFor="name">NOMBRE: </label>
                    <input id='name' type="text" autoComplete='off' required {...register("nombre")}/>
                </div>
                <div className="input">
                    <label htmlFor="correo">CORREO: </label>
                    <input id='correo' type="email" autoComplete='off' required {...register("correo")}/>
                </div>
                <div className="input">
                    <label htmlFor="telefono">TELEFONO: </label>
                    <input id='telefono' type="text" autoComplete='off' required {...register("telefono")}/>
                </div>
                <div className="input">
                    <label htmlFor="asunto">ASUNTO: </label>
                    <input id='asunto' type="text" autoComplete='off' required {...register("asunto")}/>
                </div>
                <div className="buton">
                    <button>ENVIAR</button>
                </div>
                
            </form>
            </div>
            <div className="masContactame">
                <div 
     data-aos-duration="2000" className="iMas">
                    <a href="https://api.whatsapp.com/send?phone=916628409&text=hola, soy programador junior Full-Stack" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
               <div 
     data-aos-duration="2000" className="iMas">
                <a href="mailto:edwardyq200167@gmail.com "target="_blank"><i className="fa-solid fa-envelope"></i> </a> 
               </div>
              
            </div>
            
        </div>
    );
};

export default Contactame;