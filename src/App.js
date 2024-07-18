import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Aos from "aos"
import "aos/dist/aos.css"

export default function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Skills />
        <Contact />

      </div>
    </>
  )
}

