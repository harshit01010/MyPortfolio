import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Meta from './Meta'

const Layout = ({children}) => {
  return (
    <div>
      <Meta />
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}

export default Layout