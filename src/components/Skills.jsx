import React from 'react'

const skills = [
  {title:'Backend', tags:['Java 17','Spring Boot','Spring WebFlux','Spring Security']},
  {title:'Data & Messaging', tags:['PostgreSQL','MongoDB','Redis','Kafka']},
  {title:'Frontend', tags:['Angular','TypeScript','RxJS']},
]

export default function Skills(){
  return (
    <section id="skills" className="page-section">
      <h2 className="section-title">Core Skills</h2>
      <p className="section-sub">A broad technical toolkit built across payment systems, mobile apps, and web platforms.</p>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-card reveal">
            <div className="skill-card-title">{s.title}</div>
            <div className="skill-tags"><ul>{s.tags.map((t, j)=>(<li key={j}><span className="skill-tag">{t}</span></li>))}</ul></div>
          </div>
        ))}
      </div>
    </section>
  )
}
