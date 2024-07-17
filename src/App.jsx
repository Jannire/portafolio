import { useState, useEffect, useRef } from 'react'
//import "./Style.css"
//import './App.css'
import EXP from './components/EXP'
import Intro from './components/intro'
import Educacion from './components/Educacion'
import Skills from './components/skills'
import Contacto from './components/contacto'

function App() {
  const colorRef = useRef(null);
  useEffect(() => {
    const updateMousePos = (ev) => {
      if (!colorRef.current) return;
      const { clientX, clientY } = ev;
      console.log(clientX, clientY);
      colorRef.current.style.setProperty("--x", `${clientX}px`);
      colorRef.current.style.setProperty("--y", `${clientY}px`);
    }

    window.addEventListener("mousemove", updateMousePos);
    return () => {
      window.addEventListener("mousemove", updateMousePos);
    }
  }, [])




  return (
    <>
      <style jsx>{`
      #bodyColor{
          background: radial-gradient(500px at var(--x) var(--y), rgba(251, 114, 185, 0.30), transparent 80%)
        }
      `}</style>
      <div id="bodyColor" ref={colorRef} className="absolute z-10 top-0 left-0">

        <div className="divide-y">
          <Intro />
          <EXP />
          <Educacion />
          <Skills />
          <Contacto />
        </div>
      </div>
    </>
  )
}

export default App
