import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Navbar logo="My Navbar" />
        <Outlet/>
    </div>
  )
}

export default Layout
