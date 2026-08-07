"use client";

import { useEffect, useState, useCallback } from "react";

const CATEGORIES = [
  "iol",
  "consumables",
  "vitreoretinal",
  "phaco",
  "plasmapp",
  "ecp",
  "dryeye",
];

export default function CategoryEcosystem() {
  const [activeCategory, setActiveCategory] = useState("iol");

  // Auto-advance logic
  const handleNext = useCallback(() => {
    setActiveCategory((prev) => {
      const currentIndex = CATEGORIES.indexOf(prev);
      const nextIndex = (currentIndex + 1) % CATEGORIES.length;
      return CATEGORIES[nextIndex];
    });
  }, []);

  // Interval timer for continuous rotation
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section className="category-ecosystem-section">
      <div className="ecosystem-container">
        
        <div className="ecosystem-header">
          <span className="category-badge">
            <span className="badge-dot"></span>
            AV MEDITECH SURGICAL PORTFOLIO
          </span>
          <h2 className="ecosystem-title">
            Comprehensive Ophthalmic<span className="gradient-highlight"> Solutions</span>
          </h2>
          <p className="ecosystem-sub">
            Explore our full line of state-of-the-art medical equipment, surgical consumables, and advanced intraocular technology.
          </p>
        </div>

        <div className="category-nav-wrapper">
          <nav className="category-nav" id="categoryNav">
            
            <button 
              className={`cat-pill ${activeCategory === "iol" ? "active" : ""}`} 
              data-category="iol"
              onClick={() => { setActiveCategory("iol"); }}
            >
              <span className="cat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
              </span>
              <span className="cat-label">IOL- Intraocular Lens</span>
              <span className="pill-progress"></span>
            </button>

            <button 
              className={`cat-pill ${activeCategory === "consumables" ? "active" : ""}`} 
              data-category="consumables"
              onClick={() => { setActiveCategory("consumables"); }}
            >
              <span className="cat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </span>
              <span className="cat-label">Consumables</span>
              <span className="pill-progress"></span>
            </button>

            <button 
              className={`cat-pill ${activeCategory === "vitreoretinal" ? "active" : ""}`} 
              data-category="vitreoretinal"
              onClick={() => { setActiveCategory("vitreoretinal"); }}
            >
              <span className="cat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
              </span>
              <span className="cat-label">Vitreoretinal</span>
              <span className="pill-progress"></span>
            </button>

            <button 
              className={`cat-pill ${activeCategory === "phaco" ? "active" : ""}`} 
              data-category="phaco"
              onClick={() => { setActiveCategory("phaco"); }}
            >
              <span className="cat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </span>
              <span className="cat-label">Phaco Equipments</span>
              <span className="pill-progress"></span>
            </button>

            <button 
              className={`cat-pill ${activeCategory === "plasmapp" ? "active" : ""}`} 
              data-category="plasmapp"
              onClick={() => { setActiveCategory("plasmapp"); }}
            >
              <span className="cat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </span>
              <span className="cat-label">Plasmapp Sterilizer</span>
              <span className="pill-progress"></span>
            </button>

            <button 
              className={`cat-pill ${activeCategory === "ecp" ? "active" : ""}`} 
              data-category="ecp"
              onClick={() => { setActiveCategory("ecp"); }}
            >
              <span className="cat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </span>
              <span className="cat-label">ECP System</span>
              <span className="pill-progress"></span>
            </button>

            <button 
              className={`cat-pill ${activeCategory === "dryeye" ? "active" : ""}`} 
              data-category="dryeye"
              onClick={() => { setActiveCategory("dryeye"); }}
            >
              <span className="cat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
              </span>
              <span className="cat-label">Dry Eye</span>
              <span className="pill-progress"></span>
            </button>

          </nav>
        </div>

        <div className="display-stage">
          
          <div className={`category-panel ${activeCategory === "iol" ? "active" : ""}`} id="panel-iol">
            <div className="bento-grid">
              <div className="bento-main">
                <span className="tag">Flagship Solution</span>
                <h3>Intraocular Lens Technology</h3>
                <p>At AV Meditech, we provide premium-quality IOLs designed to enhance vision, minimize glare, and reduce dependence on glasses post-surgery. Engineered with precision optics for high contrast sensitivity and long-term durability.</p>
                <div className="feature-pills">
                  <span>Monofocal IOLs</span>
                  <span>Multifocal IOLs</span>
                  <span>Trifocal IOLs</span>
                  <span>Toric IOLs</span>
                </div>
              </div>
              <div className="bento-side">
                <div className="stat-box glow-card">
                  <span className="stat-value">100%</span>
                  <span className="stat-desc">Precision Optical Quality</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">UV</span>
                  <span className="stat-desc">Full Chromophore Protection</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`category-panel ${activeCategory === "consumables" ? "active" : ""}`} id="panel-consumables">
            <div className="bento-grid">
              <div className="bento-main">
                <span className="tag">Surgical Essentials</span>
                <h3>Surgical Consumables & Viscoelastics</h3>
                <p>Formulated to maintain anterior chamber stability and protect ocular tissues during surgery, alongside precision-engineered blades for smooth, clean incisions.</p>
                <div className="feature-pills">
                  <span>Ophthalmic Viscoelastics</span>
                  <span>Surgical Blades & Knives</span>
                  <span>Cannulas & Tubing</span>
                </div>
              </div>
              <div className="bento-side">
                <div className="stat-box glow-card">
                  <span className="stat-value">High</span>
                  <span className="stat-desc">Chamber Protection</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">0.1mm</span>
                  <span className="stat-desc">Micro-Precision Blades</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`category-panel ${activeCategory === "vitreoretinal" ? "active" : ""}`} id="panel-vitreoretinal">
            <div className="bento-grid">
              <div className="bento-main">
                <span className="tag">Posterior Segment</span>
                <h3>Vitreoretinal Equipment & Instruments</h3>
                <p>State-of-the-art instruments designed for precision vitreoretinal surgery, delivering maximum control and optimal surgical outcomes.</p>
                <div className="feature-pills">
                  <span>Vitreous Cutters</span>
                  <span>Micro-Surgical Forceps</span>
                  <span>Silicone Oils & Gases</span>
                </div>
              </div>
              <div className="bento-side">
                <div className="stat-box glow-card">
                  <span className="stat-value">27G+</span>
                  <span className="stat-desc">Ultra-Fine Micro-Incision</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`category-panel ${activeCategory === "phaco" ? "active" : ""}`} id="panel-phaco">
            <div className="bento-grid">
              <div className="bento-main">
                <span className="tag">Cataract Systems</span>
                <h3>Phacoemulsification Systems</h3>
                <p>Advanced phacoemulsification platforms engineered to offer dynamic fluidics management, energy efficiency, and total chamber control.</p>
                <div className="feature-pills">
                  <span>Smart Fluidics</span>
                  <span>Ultrasound Handpieces</span>
                  <span>Foot Pedals</span>
                </div>
              </div>
              <div className="bento-side">
                <div className="stat-box glow-card">
                  <span className="stat-value">Dynamic</span>
                  <span className="stat-desc">Real-Time Fluidics Control</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`category-panel ${activeCategory === "plasmapp" ? "active" : ""}`} id="panel-plasmapp">
            <div className="bento-grid">
              <div className="bento-main">
                <span className="tag">Infection Control</span>
                <h3>Plasmapp Low-Temperature Sterilizers</h3>
                <p>Rapid, eco-friendly plasma sterilization technology engineered specifically for sensitive ophthalmic and surgical instruments.</p>
                <div className="feature-pills">
                  <span>Low Temperature</span>
                  <span>Fast Cycle Times</span>
                  <span>Zero Toxic Residue</span>
                </div>
              </div>
              <div className="bento-side">
                <div className="stat-box glow-card">
                  <span className="stat-value">Fast</span>
                  <span className="stat-desc">Rapid Turnaround Sterilization</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`category-panel ${activeCategory === "ecp" ? "active" : ""}`} id="panel-ecp">
            <div className="bento-grid">
              <div className="bento-main">
                <span className="tag">Glaucoma Care</span>
                <h3>Endoscopic Cyclophotocoagulation (ECP)</h3>
                <p>Micro-endoscopic laser systems providing direct visualization and targeted ablation for advanced glaucoma treatment and ocular surgery.</p>
                <div className="feature-pills">
                  <span>Laser Integration</span>
                  <span>High-Res Endoscopy</span>
                  <span>Targeted Ablation</span>
                </div>
              </div>
              <div className="bento-side">
                <div className="stat-box glow-card">
                  <span className="stat-value">Micro</span>
                  <span className="stat-desc">Direct Endoscopic View</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`category-panel ${activeCategory === "dryeye" ? "active" : ""}`} id="panel-dryeye">
            <div className="bento-grid">
              <div className="bento-main">
                <span className="tag">Ocular Surface</span>
                <h3>Dry Eye Diagnostics & Therapy</h3>
                <p>Innovative diagnostic systems and advanced light-based therapy devices to accurately diagnose and manage ocular surface disorders.</p>
                <div className="feature-pills">
                  <span>Tear Film Analysis</span>
                  <span>IPL Therapy</span>
                  <span>Meibography</span>
                </div>
              </div>
              <div className="bento-side">
                <div className="stat-box glow-card">
                  <span className="stat-value">Non-Invasive</span>
                  <span className="stat-desc">Comprehensive Tear Analysis</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}