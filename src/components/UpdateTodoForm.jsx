import React from "react";
import axios from "../axios";
import { useGlobalContext } from "../globalContext";

const UpdateTodoForm = () => {
  const { showUpdateTodoForm, setShowUpdateTodoForm, selectedTodo, setSelectedTodo } = useGlobalContext()

  const handleUpdate = async event => {
    event.preventDefault()
    console.log(selectedTodo.description)
    try {
      await axios.put(`/${selectedTodo.id}`, {
        description: selectedTodo.description
      })
      window.location.reload(true)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      {showUpdateTodoForm ? (
        <section className="w-full">
          <div
            className="bottom-1/4 right-1/4 left-1/4 z-50
                      flex items-center justify-center absolute          
                      outline-none focus:outline-none"
          >
            <div className="w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="flex flex-col border-0 rounded-lg shadow-lg  w-full bg-white outline-none focus:outline-none">

                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Update Todo
                  </h3>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    className='shadow-sm appearance-none
                              border border-gray-400 hover:border-blue-500 rounded
                              w-full p-2
                              text-gray-700 leading-tight
                              focus:outline-1 focus:outline-blue-400'
                    value={selectedTodo.description}
                    maxLength='75'
                    onChange={event => {
                      setSelectedTodo({
                        id: selectedTodo.id,
                        description: event.target.value
                      })
                    }}
                    type="text"
                  />
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                  {/* cancel button */}
                  <button
                    className="bg-red-500 hover:bg-red-700
                              text-sm text-white font-bold
                              p-3 m-1
                              rounded shadow hover:shadow-lg
                              outline-none focus:outline-none 
                              ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowUpdateTodoForm(false)}
                  >
                    Cancel
                  </button>

                  {/* update button */}
                  <button
                    className="bg-emerald-500 hover:bg-emerald-700
                              text-sm text-white font-bold
                              p-3 m-1
                              rounded shadow hover:shadow-lg
                              outline-none focus:outline-none
                              ease-linear transition-all duration-150"
                    type="button"
                    onClick={event => {
                      setShowUpdateTodoForm(false)
                      handleUpdate(event)
                    }}
                  >
                    Update
                  </button>
                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </section>
      ) : null}
    </>
  );
}

export default UpdateTodoForm