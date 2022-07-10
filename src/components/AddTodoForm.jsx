import React, { useEffect } from 'react'
import { useGlobalContext } from '../globalContext'
import axios from '../axios'

const AddTodoForm = () => {
  const { description, setDescription } = useGlobalContext()

  useEffect(() => {
    setDescription('')
  }, [])

  const handleAdd = async event => {
    event.preventDefault()
    if (description != '') {
      try {
        await axios.post('/', {
          description: description
        })
        window.location.reload(true)
      } catch (error) {
        console.error(error.message)
      }
    } else {
      alert('Error: Type something!')
    }
  }

  return (
    <form
      className='
      flex items-center justify-center gap-5
      w-full
      py-6 text-md'
    >

      <input
        required
        className='shadow-sm appearance-none
                  border border-gray-400 hover:border-blue-500 rounded
                  w-full p-2
                  text-gray-700 leading-tight
                  focus:outline-1 focus:outline-blue-400'
        id='todo-input'
        type="text"
        placeholder='Type your todo here...'
        maxlength='75'
        value={description}
        onChange={event => setDescription(event.target.value)}
      />

      <button
        className='bg-blue-500 hover:bg-blue-700
                  text-white font-bold
                  py-2 px-4 rounded
                  focus:outline-none focus:shadow-outline'
        type='submit'
        onClick={event => handleAdd(event)}
      >
        Add
      </button>

    </form>
  )
}

export default AddTodoForm