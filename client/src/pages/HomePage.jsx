import React from 'react'
import AddTodoForm from '../components/AddTodoForm'
import TodosList from '../components/TodosList'

const HomePage = () => {
  return (
    <main className='w-full flex flex-col items-center justify-center'>
        <h1 className='text-4xl mt-5'>Todo List</h1>
        <AddTodoForm />
        <TodosList />
    </main>
  )
}

export default HomePage