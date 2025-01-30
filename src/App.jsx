import React, { useState } from 'react'
import './App.css'
import { Todoprovider } from './contexts/TodoContext'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(), ...todo},...prev])
  }

  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  return (
    <Todoprovider value={{todos,addTodo, updateTodo, deleteTodo, toggleComplete}}>
   <div className='bg-[#172842] min-h-screen py-8'>
    <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
      <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
        Manage your todos
      </h1>
      <div className='mb-4'>
        {/*todo form goes here */}
      </div>
      <div className='flex flex-wrap gap-y-3'>
        {/* LOop and add item  */}
      </div>
    </div>
   </div>
  </Todoprovider>
  )
}

export default App
