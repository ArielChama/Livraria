import React, { Children } from 'react'
import Footer from '../Footer'
import Menu from '../Menu'

const Layout = ({ children }) => {
  return (
    <main className="container">
      <Menu />
      {children}
      <Footer />
    </main>
  )
}

export default Layout