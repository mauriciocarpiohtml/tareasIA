import React from 'react'
import TareaItem from './TareaItem'
import { useState } from 'react'

function Tareas({listaTareas, setListaTareas}) {

    const [tareaCompletada, setTareaCompletada] = useState(0)


  return (
    <div className={`bg-white flex flex-col items-center p-6 rounded-lg shadow-lg w-[50%] ${listaTareas.length > 0 ? 'h-auto' : 'h-64'}`}>
      <h3 className='text-stone-500 text-center font-bold  text-xl'>Tu lista de tareas</h3>
      <p className='text-stone-700 mt-3'>Haz completado {tareaCompletada} de <span className="font-bold text-emerald-600">{listaTareas.length} tareas</span></p>
      <input 
        type="text" 
        placeholder="Buscar tarea"
        className='p-3 rounded-lg w-full border-2 border-gray-300 mt-5 mb-3'
       />
       
       <div className='flex flex-col gap-5 mt-1 w-full '>
        {listaTareas.map(tarea => (
                        <TareaItem
                        key={tarea}
                        tarea={tarea}
                        listaTareas={listaTareas}
                        setListaTareas={setListaTareas}
                        tareaCompletada={tareaCompletada}
                        setTareaCompletada={setTareaCompletada}/>
        ))}
       </div>
    </div>
  )
}

export default Tareas
