import React, { useState } from 'react'

import Form from './Form'
import TodoList from './TodoList'
import Footer from './Footer'

const Todo = () => {
    
    const [todos, setTodos] = useState([])

    const count = todos.filter((todo)=>todo.done).length;
    const totalTodos = todos.length

    
   
  return (
    <div className='mt-24 border' >
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
        
        <Footer count={count} totalTodos={totalTodos} />
    </div>
  )
}

export default Todo
