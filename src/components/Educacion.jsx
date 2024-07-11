import { useState } from 'react'

function Educacion() {

  return (
    <div className="bg-slate-700">
      <p className="text-center text-2xl mt-3 mb-3">
        Educación
      </p>
      <div className="flex justify-center text-center mb-5">

        <div className="flex-none w-2/6 ">
          <p className=""> UNIVERSIDAD DE LIMA </p>
          <p>2019 - Presente | Ingeniería de Sistemas</p>
        </div>
        <div className="flex-none w-2/6">
          <p > Asociación Cultural Peruano-Británica</p>
          <p>2017 | Inglés Avanzado</p>
        </div>
      </div>
    </div>
  )
}

export default Educacion
