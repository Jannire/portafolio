import { useState } from 'react'

function Educacion() {

  return (
    <div className="pb-5">
      <p className="text-center text-2xl mt-4 mb-5">
        Educación
      </p>
      <div className="flex justify-center text-center mb-5">

        <div className="flex-none w-2/6 rounded-lg py-3 hover:bg-gray-700">
          <p className=""> UNIVERSIDAD DE LIMA </p>
          <p className="text-gray-400">2019 - 2024 | Ingeniería de Sistemas</p>
        </div>
        <div className="flex-none w-2/6 rounded-lg py-3 hover:bg-gray-700">
          <p > Asociación Cultural Peruano-Británica</p>
          <p className="text-gray-400">2017 | Inglés Avanzado</p>
        </div>
      </div>
    </div>
  )
}

export default Educacion
