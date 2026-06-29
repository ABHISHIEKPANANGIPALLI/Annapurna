import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Menu from '../Pages/Menu'
import Lunch from '../Pages/Lunch'
import Dinner from '../Pages/Dinner'
import Sweets from '../Pages/Sweets'
import Contact from '../Pages/Contact'
import Curries from '../Pages/Curries'
import Pappus from '../Pages/Pappus'
import Pachadis from '../Pages/Pachadis'
import Sambar from '../Pages/Sambar'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/lunch" element={<Lunch />} />
      <Route path="/dinner" element={<Dinner />} />
      <Route path="/Sweets" element={<Sweets />} />
      <Route path="/curries" element={<Curries/>} />
      <Route path="/pappus" element={<Pappus/>} />
      <Route path="/pachadis" element={<Pachadis/>} />
      <Route path="/sambar" element={<Sambar/>} />

    </Routes>
  )
}

export default AppRoutes