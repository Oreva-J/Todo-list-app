import React, { useState } from 'react'
import Todos from './Todos'

const Todo = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo("")
        

    }
  return (
    <div>
        {todos.map(item=><Todos key={item} item={item} />)}
        
      <form onSubmit={handleSubmit}
      className='flex flex-col w-1/2 items-center border mx-auto' action="">

        <input onChange={e=>setTodo(e.target.value)} type="text" value={todo}
        className='ring w-1/4'/>

        <button>Submit</button>

      </form>
    </div>
  )
}

export default Todo
