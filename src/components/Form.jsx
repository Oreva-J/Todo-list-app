import { useState } from "react"

export default function Form({todos, setTodos}){
    const [todo, setTodo] = useState({name: "" , done: false})

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo({name: "" , done: false})
    }
    
    return(
        <form onSubmit={handleSubmit}
      className='flex w-1/2 h-28 items-center justify-around mx-auto shadow-lg ' action="">

        <input onChange={e=>setTodo({name: e.target.value, done: false})} type="text" value={todo.name} placeholder="Enter todo"
        className=' w-[80%] font-semibold text-xl focus:outline-none '/>

        <button className="bg-yellow-600 w-20 h-12 rounded">Add</button>
       
      </form>
    )
}