import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'
import About from './pages/About'

export default function App(){
  return (
    <div className="app">
      <header className="site-header">
        <div className="brand">🌱 Eco-Footprint</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </main>
      <footer className="site-footer">Made for Hackathon ♻️</footer>
    </div>
  )
}
