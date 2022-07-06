import React from 'react'
import { useGlobalContext } from '../globalContext'
import axios from '../axios'
import { useEffect } from 'react'


const TodosList = () => {
    const {allTodos, setAllTodos} = useGlobalContext()
    
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
      <div className='w-full h-full overflow-y-auto overflow-x-hidden'>
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
                      return(                  
                          <tr key={todo.id} className='h-9 hover:bg-blue-100'>
                              <td className="border border-slate-300">
                                  {todo.description}
                              </td>
                              <td className="border border-slate-300">
                                  <button
                                      className="rounded p-1 
                                                bg-yellow-500 hover:bg-yellow-600 text-white font-bold
                                                focus:outline-none focus:shadow-outline"
                                  >
                                    Update
                                  </button>
                              </td>
                              <td className="border border-slate-300">
                                <button
                                  className="rounded p-1
                                            bg-red-500 hover:bg-red-700 text-white font-bold
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