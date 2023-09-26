import React, { useEffect, useState } from 'react';
import './css/proyectos.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Proyectos = () => {
    const [proyecto,setProyecto]=useState([])
    const[linkGit,setLinkGit]=useState('')
    const[link,setLink]=useState('')
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('https://api-ropa1-uwg9-dev.fl0.io/portafolio/proyectos')
        .then(res=>setProyecto(res.data))
    },[])
    const dirigir=(proyecto)=>{
        if(proyecto.proyecto.id===1){
            setLink('https://soft-arithmetic-b3676b.netlify.app/?#/')
            setLinkGit('https://github.com/edwardyq67/e-comerRopa.git')
        }
        if(proyecto.proyecto.id===2){
            setLink('https://ornate-daffodil-d31ad9.netlify.app')
            setLinkGit('https://github.com/edwardyq67/trabajo5.git')
        }
        if(proyecto.proyecto.id===3){
            setLink('https://aquamarine-pasca-43c6f1.netlify.app')
            setLinkGit('https://github.com/edwardyq67/rick-repaso.git')
        }
        if(proyecto.proyecto.id===4){
            setLink('https://negova-ferreteria-y-accesorios.netlify.app')
            setLinkGit('https://github.com/edwardyq67/trabajoMaria.git')
        }
        if(proyecto.proyecto.id===5){
            setLink('https://luminous-madeleine-13484b.netlify.app')
            setLinkGit('https://github.com/edwardyq67/trabajoBformuralio.git')
        }
        
    }
    
    return (
        <div className='proyecto'>
            <div className="titulo">
                <h2>PROYECTOS .</h2>
            </div>
            
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="cajaProyect">
            
                  {
                    proyecto?.map(proyecto=>(
                        <div key={proyecto.titulo} className="infoProyecto">
                            
                            <div className="info">
                                <h3>{proyecto.titulo}</h3>
                                <p>{proyecto.descripcion}</p>
                                <div className="lenguajesusados">
                                    {proyecto.lenguajes?.map(lenguaje=>(
                                        <div key={lenguaje.imagen} className="imgLenguejeUsado">
                                            <img src={lenguaje.imagen} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <figure className="img">
                                <img src={proyecto.imgProyectos[0].url} alt="" />
                            <div className="capaProyecto">
                                <a href={link} target="_blank"><i onClick={()=>dirigir({proyecto})} className="fa-solid fa-eye"></i></a>
                                <i className="fa-brands fa-github"></i>
                                </div></figure>
                            
                        </div>
                        
                    ))
                }  
                
                
            </div>
        </div>
    );
};

export default Proyectos;