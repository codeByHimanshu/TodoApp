const Todos = ({ todos }) => {
  function markComplete(todo) {
    todo.completed = true;
  }
return (
    <div className="p-3 m-2">
        <table className="min-w-full bg-white border-2">
            <thead>
                <tr>
                    <th className="py-2">Title</th>
                    <th className="py-2">Description</th>
                    <th className="py-2">Status</th>
                   
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => (
                    <tr>
                        <td className="border px-4 py-2">{todo.title}</td>
                        <td className="border px-4 py-2">{todo.description}</td>
                        <td className="border px-4 py-2">
                            <button className="bg-blue-700 text-white p-2 rounded-xl " onClick={() => markComplete(todo)}>
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
