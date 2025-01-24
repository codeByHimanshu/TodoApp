import { useEffect, useState } from 'react'



function TodoById() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <>
      <h1 className="font-bold mb-4 flex justify-between w-full mt-6 text-3xl">Create Your Todo List</h1>
      <div className='mt-10'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setSelectedId(1)}>Todo 1</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => setSelectedId(2)}>Todo 2</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => setSelectedId(3)}>Todo 3</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => setSelectedId(4)}>Todo 4</button>
         <Todo id={selectedId} />
         
      </div>
    </>
  )

  function Todo ({ id }) {
    const [todo, setTodo] = useState({})

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`http://localhost:5000/get?id=${id}`)
        const data = await response.json()
        setTodo(data)
      }

   fetchData()
    }, [id])

    console.log(todo, id)
    return (
      
      <div>
        <h2>Todo ID: {id}</h2>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
      </div>
    )
  }
}

export default TodoById
