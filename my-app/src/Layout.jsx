import React from 'react'
import { Outlet } from "react-router-dom"
import HomePage from './Components.jsx/Navbar'
import Footer from './Components.jsx/Footer'

const Layout = () => {
  return (
    <>
    
      {/* Navbar */}
      <HomePage />

      {/* Page Content */}
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Layout
