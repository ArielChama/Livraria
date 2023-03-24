import React from 'react'
import Footer from '../Footer'
import Menu from '../Menu'

const Layout = ({ children }) => {
  return (
    <main>
      <Menu />
      <section className="container">
        {children}
      </section>
      <Footer />
    </main>
  )
}

export default Layout