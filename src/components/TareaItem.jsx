import React, { useState } from 'react'


function TareaItem({tarea, listaTareas, setListaTareas, tareaCompletada, setTareaCompletada}) {

    const [terminado, setTerminado] = useState(false)
    const [respuesta, setRespuesta] = useState('')
    

    async function consultarApi(texto) {
      try {
        const response = await fetch('http://localhost:5005', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            prompt: `Explicame de manera sencilla como ${texto}?`
          })
        });
        const data = await response.json()
        console.log(data.bot)
        setRespuesta(data.bot)
        
      } catch (error) {
        console.log(error)
      }
    }

    function eliminarTarea(task){
        const nuevasTareas = listaTareas.filter(tarea => tarea !== task )
        setListaTareas(nuevasTareas)
    }

    function tareaTerminada(){
        setTareaCompletada(tareaCompletada + 1)
        setTerminado(true)
    }

    function crearPregunta(task){
        consultarApi(task)
    }

    const html = respuesta
    
  return (
  <>
    <div className='p-3 bg-gray-200 rounded-lg shadow-md w-full flex justify-between items-center'>
      <div className='flex gap-3'>
        <button
        onClick={tareaTerminada} 
        className={`rounded-3xl text-white font-bold px-3 py-1 bg-green-500 transition-all duration-700 hover:bg-green-600 ${terminado ? 'scale-0 opacity-0 transition-all duration-500' : 'scale-100 opacity-100'}`}>✓</button>
        <button
        onClick={() => crearPregunta(tarea)}
        className="rounded-full text-white font-bold  px-3 py-1 transition-color duration-700 bg-cyan-700 hover:bg-cyan-800 "> ? </button>
      </div>
    
      <p className={`font-bold text-stone-600 uppercase text-center px-2 ${terminado && 'line-through'}` }>{tarea}</p>
      <button
      onClick={() => eliminarTarea(tarea)} 
      className="rounded-full text-white font-bold  px-3 py-1 transition-color duration-700 bg-red-500 hover:bg-red-600 "> X </button>
    </div>

    <div
    className='text-sm text-gray-500 mb-1'
     dangerouslySetInnerHTML={{ __html: html }} />
  </>
  )
}

export default TareaItem
