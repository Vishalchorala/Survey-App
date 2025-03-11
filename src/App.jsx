import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Footer from './components/Footer'
import Results from './pages/Results'

function App() {

  const [responses, setResponses] = useState({})

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/survey' element={<Survey setResponses={setResponses} />} />
          <Route path='/results' element={<Results responses={responses} />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
