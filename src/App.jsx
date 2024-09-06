import React from 'react'
// import Home from './components/Home'
// import Form from './components/Form'
import Todo from './components/Todo'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen ring'>
      <Header />
      {/* <Home /> */}
      <Todo />
      {/* <Footer /> */}
    </div>
  )
}

export default App
