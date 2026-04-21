import React from 'react'

export default function Hero(){
  return (
    <div className="ide-window">
      <div className="window-topbar">
        <div className="window-controls">
          <span className="wc-close" />
          <span className="wc-min" />
          <span className="wc-max" />
        </div>
        <div className="tab-bar">
          <div className="tab active">mrf-cv — index.html</div>
          <div className="tab">styles.css</div>
        </div>
      </div>
      <div className="editor-body">
        <div className="sidebar">
          <div className="icon">📁</div>
          <div className="icon">🔧</div>
          <div className="icon">⚙️</div>
        </div>
        <div className="editor-main">
          <section className="hero">
            <div className="hero-label">Full-Stack Engineer · Cikarang, Jawa Barat</div>
            <h1 className="hero-name">Muhammad<br/>Rizki Fani</h1>
            <p className="hero-title">Building payment systems end-to-end</p>
            <img className="avatar" src="/assets/avatar.svg" alt="avatar" />
            <p className="hero-summary">Full-Stack Engineer experienced in designing and delivering end-to-end payment platforms at DOKU — Indonesia's leading payment technology company.</p>
            <div className="hero-contacts">
              <a className="contact-pill" href="mailto:rizkifani11@gmail.com">rizkifani11@gmail.com</a>
              <a className="contact-pill" href="https://linkedin.com/in/muhammad-rizki-fani" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="contact-pill" href="#">Cikarang, Jawa Barat</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
