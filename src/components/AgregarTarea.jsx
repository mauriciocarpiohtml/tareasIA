import { useState } from "react"

function AgregarTarea({listaTareas, setListaTareas}) {

  const [tarea, setTarea] = useState('')

  function handleFormulario(e){
    e.preventDefault()
    if(tarea === ''){
        alert('faltan campos por rellenar')
        return
    }
    setListaTareas([...listaTareas, tarea])
    setTarea('')
  }
  return (
    <div className='bg-white flex flex-col justify-center items-center p-7 rounded-lg shadow-lg w-[50%] max-h-64 h-64'>

      <h3 className='text-stone-500 text-center font-bold mt-1 text-xl'>Crea una nueva tarea</h3>
      <p className='text-stone-700 mt-3'>Escribe tu tarea y <span className="font-bold text-emerald-600">Enviala</span></p>

      <form 
      className="w-full mb-3 mt-5"
      onSubmit={handleFormulario}>
        <input 
        type="text" 
        placeholder="Llorar con la llorona"
        className='p-3 rounded-lg w-full border-2 border-gray-300'
        value={tarea}
        onChange={(e) => setTarea(e.target.value)} />
        <input 
         type="submit" 
         className="bg-emerald-600 text-white font-bold text-center p-3 mt-5 rounded-lg w-full uppercase cursor-pointer transition-colors duration-500 hover:bg-emerald-800"
         value='Crear Tarea' />
      </form>
    </div>
  )
}

export default AgregarTarea
