import React from 'react'
import Todos from './Todos'

const TodoList = ({todos, setTodos}) => {

    const sortedTodos = todos.slice().sort((a,b)=> Number(a.done)- Number(b.done))
  return (
    <div className='w-1/2 border mx-auto mt-10 rounded-xl shadow-lg'>
      {sortedTodos.map(item=><Todos key={item.name} item={item} todos={todos} setTodos={setTodos}  />)}
    </div>
  )
}

export default TodoList
