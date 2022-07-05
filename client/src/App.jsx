import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import HomePage from './pages/HomePage'

const App = () => {
    return (
        <BrowserRouter>
            {/* <Routes> */}
                <h1>App PAGE</h1>
                {/* <Route path='/' element={<HomePage />} /> */}
            {/* </Routes> */}
        </BrowserRouter>
    )
}

export default App