import { useEffect, useState } from 'react'
import  CreateTodo  from './components/CreateTodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  const [todos,setTodos]=useState([])

useEffect(()=>{

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/get')
    const data = await response.json()
    setTodos(data)
   
    
  }
  fetchData()
},[])


console.log(todos);


  return (
    <>
    
    <h1 className="font-bold mb-4 flex justify-between w-full mt-6 text-3xl">Create Your Todo List</h1>
    <div className='mt-10'>

      <CreateTodo />
      <Todos todos={todos} />
    </div>
    </>
  )
}

export default App
