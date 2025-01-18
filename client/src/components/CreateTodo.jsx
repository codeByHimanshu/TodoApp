import { useEffect, useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function addTodo() {
    const response = await fetch("http://localhost:5000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description
      })
    });
    if (response.ok) {
      alert('todo created');
    } else {
      alert('todo creation failed');
    }
  }

  useEffect(() => {
    // Perform any side effects here if needed
  }, [title, description]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <>
      <div className="flex flex-col w-3/4 p-6 m-6 rounded-lg border border-gray-300 shadow-lg bg-white  mx-auto">
        <div className="text-2xl mb-4 font-bold text-center">
          <label className="block mb-2" /> Title
          <input
            className="p-2 m-2 border w-full rounded"
            type="text"
            placeholder="Enter the title"
            onChange={handleTitleChange}
          />
        </div>
        <div className="text-2xl mb-4 font-bold text-center">
          <label className="block mb-2" /> Description
          <input
            className="p-2 m-2 border w-full rounded"
            type="text"
            placeholder="Enter description"
            onChange={handleDescriptionChange}
          />
        </div>
        <button
          className="bg-blue-700 text-white rounded-xl p-3 m-3 w-full"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default CreateTodo;
