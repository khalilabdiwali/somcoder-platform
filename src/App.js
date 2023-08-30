import React from 'react'
import Head from './components/Head'
import Courses from './components/Courses'
import Home from './components/Home'
import { BrowserRouter, Route , Routes } from "react-router-dom"
import About from './components/About'
import Footer from './components/footer'
import Contact from './components/Contact'
import Team from './components/Team'
import Login from './components/login'
import PaymentPage from './components/PaymentPage'
import Pricing from './components/Pricing'
import Notfound from './components/Notfound';

function App() {

  return (
    <div >
     <BrowserRouter>
     <Head />
      <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/about' element={<About />}/>
          <Route  path='/Courses' element={<Courses />} />
          <Route  path='/Team' element={<Team />} />
          <Route  path='/Contact' element={<Contact />} />
          <Route  path='/PaymentPage' element={<PaymentPage />} />
          <Route  path='/Pricing' element={<Pricing />} />
          <Route  path='/login' element={<Login />} />
          <Route  path='*' element={<Notfound />} />

      </Routes>
      <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App