import { useState } from 'react'

function EXP() {

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-1/2 gap-5">
        
        <div className="bg-gray-700 bg-opacity-30  drop-shadow-md grid grid-cols-6 rounded-lg gap-7 py-3 px-1">
          <div className="text-gray-400 place-self-start justify-self-end col-span-2">
            Mayo 2022 – Abril 2023
          </div>
          <div className="col-span-4">
            <h1 className="text-pinky font-bold mb-3"> UNIVERSIDAD DE LIMA – Practicante de Procesos BPM</h1>
            <ul className="list-disc">
              <li> Diseño y despliegue de procesos BPM/BPMN </li>
              <li>Mejora de procesos BPM/BPMN</li>
              <li>Desarrollo de formularios en Javascript</li>
              <li>Automatización de tareas y lectura de correos con RPA
                (Selenium, SOAP, WebScraping, Python)</li>
              <li>Investigación de despliegue en BPM Bonitasoft (Backend Java, Javascript)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/30 backdrop-blur-sm grid grid-cols-2 rounded-lg gap-7">
          <div className="bg-gray-900 place-self-start justify-self-end">
            Abril 2023 - Presente
          </div>
          <div>
            <h1>UNIVERSIDAD DE LIMA – Asistente de Cátedra</h1>
            <ul className="list-disc">
              <li>Apoyo a los profesores en cursos de Introducción a la Programación e Informática para la Gestión</li>
              <li>Realización de talleres de repaso en programación</li>
              <li>Realización de clases de apoyo y revisión de código</li>
              <li>Aclaración de dudas de los ejercicios en exámenes</li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default EXP
