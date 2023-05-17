import { useState } from 'react'
import AgregarTarea from './components/AgregarTarea'
import Tareas from './components/Tareas'


function App() {
  
  const [listaTareas, setListaTareas] = useState([])

  return (
    <>
      <div className='mt-10 p-10 flex  mx-auto  gap-10 w-[85%] '>
        <AgregarTarea 
        listaTareas={listaTareas}
        setListaTareas ={setListaTareas}/>
        <Tareas
        listaTareas={listaTareas}
        setListaTareas ={setListaTareas}/>
      </div>
    </>
  )
}

export default App
