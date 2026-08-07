"use client";

import { useState, useEffect, useCallback } from "react";

export default function IolShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalItems = 4;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  // Auto-rotation timer with hover pause capability
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <section 
      className="iol-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="iol-container">
        
        <div className="section-header">
          <span className="category-badge">
            <span className="badge-dot"></span>
            PRECISION OPHTHALMIC OPTICS
          </span>
          <h2 className="section-title">
            Choosing the Best Lens for Cataract<span className="gradient-highlight"> Surgery in India</span>
          </h2>
          <p className="section-intro">
            Cataract surgery is a crucial procedure that restores clear vision by replacing the eye's clouded lens with an intraocular lens (IOL). Selecting the best lens for cataract surgery in India is essential for achieving optimal visual clarity and long-term eye health. At AV Meditech, we provide premium-quality IOLs designed to enhance vision, minimize glare, and reduce dependence on glasses post-surgery.
          </p>
        </div>

        <div className="showcase-grid">
          
          <div className="selector-column">
            <h3 className="column-label">Best IOL Solutions for Clear Vision</h3>
            
            <div 
              className={`iol-pill ${activeIndex === 0 ? "active" : ""}`} 
              data-index="0"
              onClick={() => { setActiveIndex(0); setIsPaused(true); }}
            >
              <div className="progress-bar"></div>
              <div className="pill-content">
                <div className="pill-header">
                  <span className="pill-num">01</span>
                  <span className="pill-title">Monofocal IOLs</span>
                </div>
                <p className="pill-sub">Provides sharp vision at a single distance...</p>
              </div>
            </div>

            <div 
              className={`iol-pill ${activeIndex === 1 ? "active" : ""}`} 
              data-index="1"
              onClick={() => { setActiveIndex(1); setIsPaused(true); }}
            >
              <div className="progress-bar"></div>
              <div className="pill-content">
                <div className="pill-header">
                  <span className="pill-num">02</span>
                  <span className="pill-title">Multifocal IOLs</span>
                </div>
                <p className="pill-sub">Enables clear vision at multiple distances...</p>
              </div>
            </div>

            <div 
              className={`iol-pill ${activeIndex === 2 ? "active" : ""}`} 
              data-index="2"
              onClick={() => { setActiveIndex(2); setIsPaused(true); }}
            >
              <div className="progress-bar"></div>
              <div className="pill-content">
                <div className="pill-header">
                  <span className="pill-num">03</span>
                  <span className="pill-title">Trifocal IOLs</span>
                </div>
                <p className="pill-sub">Offers seamless vision at near, intermediate, and far...</p>
              </div>
            </div>

            <div 
              className={`iol-pill ${activeIndex === 3 ? "active" : ""}`} 
              data-index="3"
              onClick={() => { setActiveIndex(3); setIsPaused(true); }}
            >
              <div className="progress-bar"></div>
              <div className="pill-content">
                <div className="pill-header">
                  <span className="pill-num">04</span>
                  <span className="pill-title">Toric IOLs</span>
                </div>
                <p className="pill-sub">Corrects astigmatism, ensuring sharper vision...</p>
              </div>
            </div>
          </div>

          <div className="display-column">
            <div className="glass-stage">
              
              <div className={`stage-card ${activeIndex === 0 ? "active" : ""}`} data-stage="0">
                <span className="type-tag">Single Vision Focus</span>
                <h3>Monofocal IOLs</h3>
                <p className="card-desc">
                  Provides sharp vision at a single distance, ideal for patients comfortable using glasses for reading.
                </p>
                <div className="specs-box">
                  <h4>Precision Optical Standard</h4>
                  <p>Each of our lenses is designed with precision optics, offering high contrast sensitivity, reduced visual disturbances, and long-term durability.</p>
                </div>
              </div>

              <div className={`stage-card ${activeIndex === 1 ? "active" : ""}`} data-stage="1">
                <span className="type-tag">Multi-Distance Clarity</span>
                <h3>Multifocal IOLs</h3>
                <p className="card-desc">
                  Enables clear vision at multiple distances, reducing the need for glasses.
                </p>
                <div className="specs-box">
                  <h4>Precision Optical Standard</h4>
                  <p>Each of our lenses is designed with precision optics, offering high contrast sensitivity, reduced visual disturbances, and long-term durability.</p>
                </div>
              </div>

              <div className={`stage-card ${activeIndex === 2 ? "active" : ""}`} data-stage="2">
                <span className="type-tag">Active Lifestyle Focus</span>
                <h3>Trifocal IOLs</h3>
                <p className="card-desc">
                  Offers seamless vision at near, intermediate, and far distances, perfect for an active lifestyle.
                </p>
                <div className="specs-box">
                  <h4>Precision Optical Standard</h4>
                  <p>Each of our lenses is designed with precision optics, offering high contrast sensitivity, reduced visual disturbances, and long-term durability.</p>
                </div>
              </div>

              <div className={`stage-card ${activeIndex === 3 ? "active" : ""}`} data-stage="3">
                <span className="type-tag">Astigmatism Correction</span>
                <h3>Toric IOLs</h3>
                <p className="card-desc">
                  Corrects astigmatism, ensuring sharper and distortion-free vision.
                </p>
                <div className="specs-box">
                  <h4>Precision Optical Standard</h4>
                  <p>Each of our lenses is designed with precision optics, offering high contrast sensitivity, reduced visual disturbances, and long-term durability.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="quality-banner">
          <div className="quality-item">
            <span className="check-icon">✓</span>
            <span>Precision Optics</span>
          </div>
          <div className="quality-item">
            <span className="check-icon">✓</span>
            <span>High Contrast Sensitivity</span>
          </div>
          <div className="quality-item">
            <span className="check-icon">✓</span>
            <span>Reduced Visual Disturbances</span>
          </div>
          <div className="quality-item">
            <span className="check-icon">✓</span>
            <span>Long-Term Durability</span>
          </div>
        </div>

      </div>
    </section>
  );
}