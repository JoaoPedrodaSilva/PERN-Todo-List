import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [description, setDescription] = useState('')
    const [allTodos, setAllTodos] = useState([])
    const [showUpdateTodoForm, setShowUpdateTodoForm] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState({})

    return (
        <AppContext.Provider
            value={{
                description, setDescription,
                allTodos, setAllTodos,
                showUpdateTodoForm, setShowUpdateTodoForm,
                selectedTodo, setSelectedTodo
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export { AppContext, AppProvider }