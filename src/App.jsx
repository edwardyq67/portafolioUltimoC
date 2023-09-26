import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes,Route } from 'react-router-dom'
import AppNavbar from './componentes/AppNavbar'
import Conoceme from './paginacion/Conoceme'
import Conocimientos from './paginacion/Conocimientos'
import Proyectos from './paginacion/Proyectos'
import Contactame from './paginacion/Contactame'
import Loading from './componentes/Loading'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  const loading = useSelector((state) => state.isLoading);
  
  
  return (
    <div className="App">
      <HashRouter>
      {loading && <Loading />}
        <AppNavbar/>
        <div className="paginacion">
          <section id='seccion1'>
          <Conoceme/>
        </section>
        <section id='seccion2'>
          <Conocimientos/>
        </section>
        <section id='seccion3'>
          <Proyectos/>
        </section>
        <section id='seccion4'>
          <Contactame/>
        </section>
        </div>
        
      </HashRouter>
    </div>
  )
}

export default App
