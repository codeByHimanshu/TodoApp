const Todos = ({ todos }) => {
  function markComplete(todo) {
    todo.completed = true;
  }
return (
    <div className="p-3 m-2">
        <table className="min-w-full bg-slate-50">
            <thead>
                <tr>
                    <th className="py-2">Title</th>
                    <th className="py-2">Description</th>
                    <th className="py-2">Status</th>
                   
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, index) => (
                    <tr>
                        <td className="border px-4 py-2">{todo.title}</td>
                        <td className="border px-4 py-2">{todo.description}</td>
                        <td className="border px-4 py-2">
                            <button className="bg-blue-500 p-2 rounded-xl " onClick={() => markComplete(todo)}>
                                {todo.completed ? "Completed" : "Mark as completed"}
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
};

export default Todos;
