import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Pagenotfound from './pages/page_not_found/Pagenotfound'
import Signin from './pages/authentication/Signin'
import Signup from './pages/authentication/Signup'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/*' element={<Pagenotfound />} />
    </Routes>
    </>
  )
}

export default App