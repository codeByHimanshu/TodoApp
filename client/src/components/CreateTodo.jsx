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
useEffect(()=>{
  // Perform any side effects here if needed
},[title,description])

function handleTitleChange(e){
 setTitle(e.target.value)
}

function handleDescriptionChange(e){
 setDescription(e.target.value)
}
  return (
    <>
  
    <div className="flex flex-row">

    </div>
      <div className=" flex flex-col  p-6 m-6 box-border bg-green-500">
    <div>
        <label className=" m-8 font-bold" /> title
          <input 
          className="p-3 m-3 border w-3/4 ml-auto" type="text" placeholder="enter the title" 
          onChange={handleTitleChange}
          />
         
      </div>
      <div>
        <label className="m-2 font-bold" /> description
          <input
           className="p-3 m-3 border w-3/4 ml-auto" type="text" placeholder="enter description"
           onChange={handleDescriptionChange}
         />
      
      </div>

      <button className="bg-blue-700 white rounded-xl p-3 m-3 w-fit white"
      onClick={addTodo}
      >addTodo</button>
    </div>
    </>
  );
};
export default CreateTodo;
