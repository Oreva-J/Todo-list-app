import React from 'react'

const Blog = ({title, message, author, id}) => {

    const handleClick = ()=>{
        return <h1>Now you know</h1>
    }
  return (
    <div>
        
            { id >= 4? <div>
                <h1>{title} </h1>
                <p>email</p>
                <p>{message}</p>
                <p>Author Name: {author}</p>
                </div> : ""
            }

            <button onClick={handleClick}>Click me</button>
     
    </div>
  )
}

export default Blog
