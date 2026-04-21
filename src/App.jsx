import React, { useEffect } from 'react'
import './styles.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Freelance from './components/Freelance'
import Footer from './components/Footer'

function App(){

  useEffect(()=>{
    const els = Array.from(document.querySelectorAll('.reveal'))
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('active')
      })
    }, { threshold: 0.1 })
    els.forEach(e=>io.observe(e))
    return ()=> io.disconnect()
  }, [])

  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Freelance />
      </main>
      <Footer />
    </div>
  )
}

export default App

