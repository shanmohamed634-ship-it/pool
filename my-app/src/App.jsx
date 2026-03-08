import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Frontpage from './Frontpage'
import ContactForm from './ContactForm'
// import PondDetails from "./pages/PondDetails";
import ViewDetails from './Components.jsx/ViewDetails'
import Features from './Components.jsx/Works'
import Specialization from './specilization'
import Home from './Components.jsx/Hero'
import Hero from './Components.jsx/Hero'
import PoolProjects from './Components.jsx/Pools'
import PondsArts from './Components.jsx/Ponds'
import CementArts from './Components.jsx/Cementarts'
import WhyChoose from './Components.jsx/Choose'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Frontpage/>}/>
          <Route path="contact" element={<ContactForm/>}/>
           <Route path="/details/:id" element={<ViewDetails />} />
           <Route path="/specialization" element={<Specialization/>} />
           <Route path="/home" element={<Frontpage/>}/>
           <Route path="/pools" element={<PoolProjects/>}/>
           <Route path="/ponds" element={<PondsArts/>}/>
           <Route path="/cement" element={<CementArts/>}/>
           <Route path="/about us" element={<WhyChoose/>}/>
           
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

