import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sub from '../pages/Sub'
import Todo from '../pages/Todo'


const RoutesTree = () => {
    return (
        < div >
            <Routes>
                <Route path='/' element={<Todo />} />
                <Route path='subTask' element={<Sub />} />
            </Routes>
        </div >
    )
}

export default RoutesTree