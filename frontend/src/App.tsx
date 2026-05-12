import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Members from './pages/Members'

export default function App(){
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <h1>Congregation Manager</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/members">Members</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div>Welcome to the Congregation Manager</div>} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
