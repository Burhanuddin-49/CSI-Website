import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const SharedLayout = () => {
  return (
    <div className='layout'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default SharedLayout