const CreateTodo = () => {

  function addTodo(){
    const response = fetch('http://localhost:5000/create')
    
  }

  return (
    <>
  
    <div>
        <h1 className="text-2xl font-bold mb-4">Create Your Todo List</h1>

    </div>
      <div className=" flex flex-col w-2/4 p-6 m-6 box-border bg-green-500">
    <div>
        <label className=" m-8 font-bold">
          title :
        </label>
          <input className="p-3 m-3 border w-3/4 ml-auto" type="text" placeholder="enter the title" />
      </div>
      <div>
        <label className="m-2 font-bold">
          description :
        </label>
          <input className="p-3 m-3 border w-3/4 ml-auto" type="text" placeholder="enter description" />
      </div>

      <button className="bg-blue-700 white rounded-xl p-3 m-3 w-fit white"
      onClick={addTodo}
      >addTodo</button>
    </div>
    </>
  );
};
export default CreateTodo;
