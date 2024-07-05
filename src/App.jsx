import { useState } from 'react'
//import "./Style.css"
//import './App.css'
import EXP from './components/EXP'
import Intro from './components/intro'
import Educacion from './components/Educacion'
import Skills from './components/skills'
import Contacto from './components/contacto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="divide-y">
        <Intro/>
        <EXP/>
        <Educacion/>
        <Skills/>
        <Contacto/>
      </div>
    </>
  )
}

export default App
