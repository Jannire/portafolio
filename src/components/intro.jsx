import { useState } from 'react'

function Intro() {

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-10 mb-7 mx-20">
        <div className="place-self-center text-xl">
          Jannire Trujillo
        </div>
        <div>
          <p>
            Estudiante de decimo ciclo de
            Ingeniería de Sistemas en la
            Universidad de Lima en Quinto
            Superior. Conocimientos en desarrollo
            web full stack, desarrollo, diseño móvil
            y automatización con RPA. Desarrollo
            en framework React, programación
            de videojuegos y diseño de procesos
            BPM.
          </p>
          <br />
          <p>
            Capacidades de trabajo en equipo,
            solución de problemas, pensamiento
            crítico y liderazgo. Interesada en áreas
            de desarrollo web full stack, móvil y
            automatización RPA.
          </p>
        </div>
      </div>
    </>
  )
}

export default Intro
