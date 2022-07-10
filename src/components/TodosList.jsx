import React, { useEffect } from 'react'
import { useGlobalContext } from '../globalContext'
import axios from '../axios'

const TodosList = () => {
  const { allTodos, setAllTodos, setShowUpdateTodoForm, setSelectedTodo } = useGlobalContext()

  useEffect(() => {
    const getAllTodos = async () => {
      try {
        const allTodos = await axios.get('/')
        setAllTodos(allTodos.data.todos)
      } catch (error) {
        console.error(error.message)
      }
    }
    getAllTodos()
  }, [])

  const handleDelete = async id => {
    try {
      setAllTodos(allTodos.filter(todo => todo.id !== id))
      await axios.delete(`/${id}`)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className='w-full h-3/5 overflow-y-auto overflow-x-hidden'>
      <table className="w-full border-collapse border border-slate-400 text-xs text-center">
        <thead className='bg-blue-500 text-white break-words sticky top-0'>
          <tr className='h-9'>
            <th className="border border-slate-300">Todo Description</th>
            <th className="border border-slate-300">Edit</th>
            <th className="border border-slate-300">Delete</th>
          </tr>
        </thead>
        <tbody>
          {allTodos && allTodos.map(todo => {
            return (
              <tr key={todo.id} className='h-9 hover:bg-blue-100'>
                <td className="border border-slate-300 break-words">
                  {todo.description}
                </td>
                <td className="border border-slate-300">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 
                              rounded shadow hover:shadow-lg
                              p-1
                              text-xs text-white font-bold
                              focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => {
                      setShowUpdateTodoForm(true)
                      setSelectedTodo(todo)
                    }}
                  >
                    Update
                  </button>
                </td>
                <td className="border border-slate-300">
                  <button
                    className="bg-red-500 hover:bg-red-700 
                              rounded shadow hover:shadow-lg
                              p-1
                              text-xs text-white font-bold
                              focus:outline-none focus:shadow-outline"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TodosList