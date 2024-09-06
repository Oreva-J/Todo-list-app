import React from 'react'

const Todos = ({item, todos, setTodos}) => {

    const handleDelete = (item)=>{
        return setTodos( todos.filter((i)=> i != item))
    }
    const handleComplete = (name)=>{
        setTodos(todos.map((todo)=> todo.name === name ? {...todo , done: !todo.done} : todo ))

    }
    const classN = item.done? "line-through cursor-pointer" : "";
    
  return (
    <>
    <div className='text-xl font-semibold p-8 px-12 flex justify-between items-center  mt-2 '>
        <span className={`${classN} cursor-pointer`} onClick={()=>handleComplete(item.name)}>{item.name}</span>
        <button  onClick={()=>handleDelete(item)}
        className='w-14 h-8 rounded-md bg-yellow-600 text-white grid-cols-1 place-items-center cursor-pointer '>x</button>
        </div>
        <hr className='w-[90%] mx-auto'/>

        </>
  )
}

export default Todos
