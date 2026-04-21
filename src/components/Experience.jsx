import React from 'react'

const experiences = [
  {
    role: 'Senior Backend Engineer',
    company: 'DOKU',
    period: '2021 — Present',
    bullets: [
      'Built payment orchestration services',
      'Designed event-driven integrations with Kafka',
    ]
  }
]

export default function Experience(){
  return (
    <section id="experience" className="page-section">
      <h2 className="section-title">Experience</h2>
      {experiences.map((e, i)=> (
        <div className="experience-card reveal" key={i}>
          <div className="exp-header">
            <div className="exp-role">{e.role}</div>
            <div className="exp-company">{e.company} · <span className="exp-period">{e.period}</span></div>
          </div>
          <ul>
            {e.bullets.map((b, j)=>(<li key={j}>{b}</li>))}
          </ul>
        </div>
      ))}
    </section>
  )
}
