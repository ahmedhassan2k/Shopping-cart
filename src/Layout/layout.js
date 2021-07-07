import React from 'react'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className='layout'>

            <span>{children}</span>

            <Footer />
        </div>
    )
}

export default Layout