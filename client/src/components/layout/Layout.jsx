import React from 'react'
import Navbar from '../navbar/Navbar'

const Layout = ({children}) => {
  return (
    <>
      <header className='w-[100%]'>
        <Navbar/>
      </header>
      <div>
        {children}
      </div>
    </>
)
}

export default Layout