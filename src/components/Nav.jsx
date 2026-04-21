import React from 'react'

export default function Nav(){
  return (
    <nav>
      <a className="nav-brand" href="#">MRF</a>
      <button className="nav-toggle" aria-label="Open menu">☰</button>
      <div className="nav-links">
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#freelance">Freelance</a>
      </div>
    </nav>
  )
}
