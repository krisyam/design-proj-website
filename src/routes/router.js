import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/case-study" element={<Home />} />
                <Route path="/team" element={<Home />} />
            </Routes>
        </>
    )
}

export default MainRouter
