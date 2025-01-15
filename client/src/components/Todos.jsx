
const Todos = ({ todos }) => {

    return <div className="p-4">
    {todos.map(function(todo){
            return <div>
                    <h1 className="text-xl font-bold">{todo.title}</h1>
                    <h1 className="text-lg text-gray-600">{todo.description}</h1>
                    <button>{todo.completed == true ? "completed" : "mark as completed"}</button>
                </div>
            
    })}
    </div>
    
    
}

export default Todos