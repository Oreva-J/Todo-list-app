import React, { useState } from 'react'
import Blog from './Blog'

const Home = () => {
    let [count, setCount] = useState(0)
    let [num, setNum] = useState(1)

    const increase = function() {
       setCount(count+num)
    }
    const decrease = function() {
        setCount(count-num)
    }
   
    const increment = ()=>{
        setNum(num+1)
        return 
    }
    const decrement = ()=>{
        setNum(num-1)
        return 
    }
    

    const users = [
        {id: 1, name: "Oreva", email: "oreva@gmail.com", password: 1234},
        {id: 2, name: "DML", email: "dml@gmail.com", password: 1234},
    ]
      
  return (
    <div className=' p-20 text-4xl'>
        {users.map(user=> user.id >=2? <p key={user.id}> Name: {user.name} Email: {user.email} </p> : <p key={user.id}> element id- {user.id} did not return </p>)}


        {users.map(user=><Blog key={user.id} title={user.name} author={user.email} message={user.password} id={user.id} />)}

        <div>
            <h1>Increament and decrement</h1>
            <p>Value: {count} </p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button><br />
            <p>{num}</p>
            <button onClick={increment}>I-set </button>
            <button onClick={decrement}>D-Set  </button>
        </div>
        
        
    </div>
  )
}

export default Home
