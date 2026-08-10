"use client";

import { useEffect, useState, useCallback } from "react";
import styles from "./CategoryTabs.module.css";

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
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance logic
  const handleNext = useCallback(() => {
    setActiveCategory((prev) => {
      const currentIndex = CATEGORIES.indexOf(prev);
      const nextIndex = (currentIndex + 1) % CATEGORIES.length;
      return CATEGORIES[nextIndex];
    });
  }, []);

  // Interval timer for continuous rotation (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  return (
    <section className={styles.categoryEcosystemSection}>
      <div className={styles.ecosystemContainer}>
        
        {/* Header */}
        <div className={styles.ecosystemHeader}>
          <span className={styles.categoryBadge}>
            <span className={styles.badgeDot}></span>
            AV MEDITECH SURGICAL PORTFOLIO
          </span>
          <h2 className={styles.ecosystemTitle}>
            Comprehensive Ophthalmic<span className={styles.gradientHighlight}> Solutions</span>
          </h2>
          <p className={styles.ecosystemSub}>
            Explore our full line of state-of-the-art medical equipment, surgical consumables, and advanced intraocular technology.
          </p>
        </div>

        {/* Navigation Pills */}
        <div 
          className={styles.categoryNavWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <nav className={styles.categoryNav}>
            
            <button 
              className={activeCategory === "iol" ? styles.catPillActive : styles.catPill} 
              onClick={() => setActiveCategory("iol")}
            >
              <span className={styles.catIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
              </span>
              <span>IOL- Intraocular Lens</span>
              <span className={styles.pillProgress}></span>
            </button>

            <button 
              className={activeCategory === "consumables" ? styles.catPillActive : styles.catPill} 
              onClick={() => setActiveCategory("consumables")}
            >
              <span className={styles.catIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </span>
              <span>Consumables</span>
              <span className={styles.pillProgress}></span>
            </button>

            <button 
              className={activeCategory === "vitreoretinal" ? styles.catPillActive : styles.catPill} 
              onClick={() => setActiveCategory("vitreoretinal")}
            >
              <span className={styles.catIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
              </span>
              <span>Vitreoretinal</span>
              <span className={styles.pillProgress}></span>
            </button>

            <button 
              className={activeCategory === "phaco" ? styles.catPillActive : styles.catPill} 
              onClick={() => setActiveCategory("phaco")}
            >
              <span className={styles.catIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </span>
              <span>Phaco Equipments</span>
              <span className={styles.pillProgress}></span>
            </button>

            <button 
              className={activeCategory === "plasmapp" ? styles.catPillActive : styles.catPill} 
              onClick={() => setActiveCategory("plasmapp")}
            >
              <span className={styles.catIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </span>
              <span>Plasmapp Sterilizer</span>
              <span className={styles.pillProgress}></span>
            </button>

            <button 
              className={activeCategory === "ecp" ? styles.catPillActive : styles.catPill} 
              onClick={() => setActiveCategory("ecp")}
            >
              <span className={styles.catIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </span>
              <span>ECP System</span>
              <span className={styles.pillProgress}></span>
            </button>

            <button 
              className={activeCategory === "dryeye" ? styles.catPillActive : styles.catPill} 
              onClick={() => setActiveCategory("dryeye")}
            >
              <span className={styles.catIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
              </span>
              <span>Dry Eye</span>
              <span className={styles.pillProgress}></span>
            </button>

          </nav>
        </div>

        {/* Display Stage Panels */}
        <div className={styles.displayStage}>
          
          {/* Panel: IOL */}
          <div className={activeCategory === "iol" ? styles.categoryPanelActive : styles.categoryPanel}>
            <div className={styles.bentoGrid}>
              <div className={styles.bentoMain}>
                <span className={styles.tag}>Flagship Solution</span>
                <h3>Intraocular Lens Technology</h3>
                <p>At AV Meditech, we provide premium-quality IOLs designed to enhance vision, minimize glare, and reduce dependence on glasses post-surgery. Engineered with precision optics for high contrast sensitivity and long-term durability.</p>
                <div className={styles.featurePills}>
                  <span>Monofocal IOLs</span>
                  <span>Multifocal IOLs</span>
                  <span>Trifocal IOLs</span>
                  <span>Toric IOLs</span>
                </div>
              </div>
              <div className={styles.bentoSide}>
                <div className={styles.glowCard}>
                  <span className={styles.statValue}>100%</span>
                  <span className={styles.statDesc}>Precision Optical Quality</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statValue}>UV</span>
                  <span className={styles.statDesc}>Full Chromophore Protection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel: Consumables */}
          <div className={activeCategory === "consumables" ? styles.categoryPanelActive : styles.categoryPanel}>
            <div className={styles.bentoGrid}>
              <div className={styles.bentoMain}>
                <span className={styles.tag}>Surgical Essentials</span>
                <h3>Surgical Consumables & Viscoelastics</h3>
                <p>Formulated to maintain anterior chamber stability and protect ocular tissues during surgery, alongside precision-engineered blades for smooth, clean incisions.</p>
                <div className={styles.featurePills}>
                  <span>Ophthalmic Viscoelastics</span>
                  <span>Surgical Blades & Knives</span>
                  <span>Cannulas & Tubing</span>
                </div>
              </div>
              <div className={styles.bentoSide}>
                <div className={styles.glowCard}>
                  <span className={styles.statValue}>High</span>
                  <span className={styles.statDesc}>Chamber Protection</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statValue}>0.1mm</span>
                  <span className={styles.statDesc}>Micro-Precision Blades</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel: Vitreoretinal */}
          <div className={activeCategory === "vitreoretinal" ? styles.categoryPanelActive : styles.categoryPanel}>
            <div className={styles.bentoGrid}>
              <div className={styles.bentoMain}>
                <span className={styles.tag}>Posterior Segment</span>
                <h3>Vitreoretinal Equipment & Instruments</h3>
                <p>State-of-the-art instruments designed for precision vitreoretinal surgery, delivering maximum control and optimal surgical outcomes.</p>
                <div className={styles.featurePills}>
                  <span>Vitreous Cutters</span>
                  <span>Micro-Surgical Forceps</span>
                  <span>Silicone Oils & Gases</span>
                </div>
              </div>
              <div className={styles.bentoSide}>
                <div className={styles.glowCard}>
                  <span className={styles.statValue}>27G+</span>
                  <span className={styles.statDesc}>Ultra-Fine Micro-Incision</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel: Phaco */}
          <div className={activeCategory === "phaco" ? styles.categoryPanelActive : styles.categoryPanel}>
            <div className={styles.bentoGrid}>
              <div className={styles.bentoMain}>
                <span className={styles.tag}>Cataract Systems</span>
                <h3>Phacoemulsification Systems</h3>
                <p>Advanced phacoemulsification platforms engineered to offer dynamic fluidics management, energy efficiency, and total chamber control.</p>
                <div className={styles.featurePills}>
                  <span>Smart Fluidics</span>
                  <span>Ultrasound Handpieces</span>
                  <span>Foot Pedals</span>
                </div>
              </div>
              <div className={styles.bentoSide}>
                <div className={styles.glowCard}>
                  <span className={styles.statValue}>Dynamic</span>
                  <span className={styles.statDesc}>Real-Time Fluidics Control</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel: Plasmapp */}
          <div className={activeCategory === "plasmapp" ? styles.categoryPanelActive : styles.categoryPanel}>
            <div className={styles.bentoGrid}>
              <div className={styles.bentoMain}>
                <span className={styles.tag}>Infection Control</span>
                <h3>Plasmapp Low-Temperature Sterilizers</h3>
                <p>Rapid, eco-friendly plasma sterilization technology engineered specifically for sensitive ophthalmic and surgical instruments.</p>
                <div className={styles.featurePills}>
                  <span>Low Temperature</span>
                  <span>Fast Cycle Times</span>
                  <span>Zero Toxic Residue</span>
                </div>
              </div>
              <div className={styles.bentoSide}>
                <div className={styles.glowCard}>
                  <span className={styles.statValue}>Fast</span>
                  <span className={styles.statDesc}>Rapid Turnaround Sterilization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel: ECP */}
          <div className={activeCategory === "ecp" ? styles.categoryPanelActive : styles.categoryPanel}>
            <div className={styles.bentoGrid}>
              <div className={styles.bentoMain}>
                <span className={styles.tag}>Glaucoma Care</span>
                <h3>Endoscopic Cyclophotocoagulation (ECP)</h3>
                <p>Micro-endoscopic laser systems providing direct visualization and targeted ablation for advanced glaucoma treatment and ocular surgery.</p>
                <div className={styles.featurePills}>
                  <span>Laser Integration</span>
                  <span>High-Res Endoscopy</span>
                  <span>Targeted Ablation</span>
                </div>
              </div>
              <div className={styles.bentoSide}>
                <div className={styles.glowCard}>
                  <span className={styles.statValue}>Micro</span>
                  <span className={styles.statDesc}>Direct Endoscopic View</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel: Dry Eye */}
          <div className={activeCategory === "dryeye" ? styles.categoryPanelActive : styles.categoryPanel}>
            <div className={styles.bentoGrid}>
              <div className={styles.bentoMain}>
                <span className={styles.tag}>Ocular Surface</span>
                <h3>Dry Eye Diagnostics & Therapy</h3>
                <p>Innovative diagnostic systems and advanced light-based therapy devices to accurately diagnose and manage ocular surface disorders.</p>
                <div className={styles.featurePills}>
                  <span>Tear Film Analysis</span>
                  <span>IPL Therapy</span>
                  <span>Meibography</span>
                </div>
              </div>
              <div className={styles.bentoSide}>
                <div className={styles.glowCard}>
                  <span className={styles.statValue}>Non-Invasive</span>
                  <span className={styles.statDesc}>Comprehensive Tear Analysis</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}