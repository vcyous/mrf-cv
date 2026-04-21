import React from 'react'

const gigs = [
  {title:'Mobile Payment Integration', client:'Startup X', year:2020},
]

export default function Freelance(){
  return (
    <section id="freelance" className="page-section">
      <h2 className="section-title">Freelance & Projects</h2>
      <div className="projects-grid">
        {gigs.map((g,i)=> (
          <div className="project-card reveal" key={i}>
            <div className="project-title">{g.title}</div>
            <div className="project-meta">{g.client} · {g.year}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
