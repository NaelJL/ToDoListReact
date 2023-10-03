import { useState } from "react"
import { nanoid } from "nanoid"
import ListItems from "./components/ListItems"

function App() {

  const [toDoList, setToDoList] = useState([])

  const [todo, setTodo] = useState("")

  const [showValidation, setShowValidation] = useState(false)

  function deleteItem(id){
    setToDoList(toDoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e){
    e.preventDefault()

    if(todo === ""){
      setShowValidation(true)
      return
    }

    setToDoList([...toDoList, {id: nanoid(), content: todo}])
    setTodo("")
    setShowValidation(false)
  }

  return (
    <>
      <main className="h-screen bg-slate-800 flex justify-center ">
        <article className="maw-w-4xl mx-auto pt-20 px-6">
          <h1>To Do List</h1>
          
          <form onSubmit={handleSubmit} className="mb-10">
            <label htmlFor="item" className="text-slate-50">
              Add a task
            </label>
            <input 
              value={todo}
              onChange={e => setTodo(e.target.value)}
              type="text" 
              className="mt-1 block rounded w-80"
            />
            {showValidation && (
              <p className="text-red-400 text-xs mt-2">Add content first</p>
            )}
            <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">
              Add
            </button>
          </form>
          <ul>
            {toDoList.length === 0 && (
              <li className="text-slate-50 text-md my-4">No tasks.</li>
            )}
            {toDoList.length > 0 && toDoList.map((item) => (
              <ListItems 
                key={item.id} 
                itemData={item} 
                deleteItem={() => deleteItem(item.id)} 
              />
            ))}
          </ul>
        </article>
      </main>
    </>
  )
}

export default App
