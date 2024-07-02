import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const SharedComponent = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default SharedComponent
