import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const BasicLayout = () => {
  return (
    <>
    <div className="content">
    <Header />
        <Outlet/>
    </div>
    <Footer /></>
  )
}

export default BasicLayout