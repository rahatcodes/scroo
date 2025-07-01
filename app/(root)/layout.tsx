import Navbar from '@/components/Navbar'
import React from 'react'

const Layout = ({ children }:{ children: React.ReactNode }) => {
  return (

    <Navbar/>
    <div>Children</div>
  )
}

export default Layout