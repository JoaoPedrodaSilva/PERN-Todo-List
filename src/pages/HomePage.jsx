import React from 'react'
import AddTodoForm from '../components/AddTodoForm'
import TodosList from '../components/TodosList'
import UpdateTodoForm from '../components/UpdateTodoForm'

const HomePage = () => {
  return (
    <main className='flex flex-col items-center justify-start w-full h-full relative'>
      <h1 className='text-4xl mt-5'>Todo List</h1>
      <AddTodoForm />
      <TodosList />
      <UpdateTodoForm />
    </main>
  )
}

export default HomePage