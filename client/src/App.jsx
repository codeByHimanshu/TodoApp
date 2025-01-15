import { useState } from 'react'
import  CreateTodo  from './components/CreateTodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  const [todos,setTodos]=useState({})
 fetch('http://localhost:5000/get')
    .then(async function (res){
      const json = res.json(todos)
      setTodos(json.todos);
    })

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  )
}

export default App
