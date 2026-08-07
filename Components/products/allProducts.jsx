"use client";

import React from "react";
import styles from "./allProducts.module.css";

export default function AllProducts() {
  return (
    <section className={styles.section}>
      {/* Background Decorative Glows */}
      <div className={styles.auroraGlow1} aria-hidden="true" />
      <div className={styles.auroraGlow2} aria-hidden="true" />

      <div className={styles.container}>

        {/* HEADER BLOCK */}
        <div className={styles.headerBlock}>
          <div className={styles.badgePill}>
            <span className={styles.pulseDot}></span>
            AV MEDITECH SURGICAL PORTFOLIO
          </div>
          <h2 className={styles.mainHeading}>
            Explore Our <span className={styles.gradientText}>Surgical Categories</span>
          </h2>
          <p className={styles.headerSubtext}>
            Comprehensive ophthalmic surgical devices, intraocular optics, specialized consumables, and advanced therapeutic laser systems.
          </p>
        </div>

        {/* STATIC GRID LAYOUT FOR ALL CARDS */}
        <div className={styles.cardsGrid}>

          {/* CARD 1: IOL Systems */}
          <div className={styles.glassCard}>
            <div className={styles.cardTop}>
              <div className={styles.imageWrapper}>
                <img
                  src="iol-systems.png"
                  alt="Intraocular Lens Systems"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.tagRow}>
                <div className={styles.iconBox}>
                  <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className={styles.tagLabel}>Cataract Optics</span>
              </div>
              <h3 className={styles.cardTitle}>Intraocular Lens Systems (IOL)</h3>
              <p className={styles.cardDesc}>
                A complete portfolio of premium monofocal, toric, and trifocal foldable acrylic lenses engineered for zero spherical aberration, capsular bag stability, and clear visual outcomes.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <a href="#iol-intraocular-lens" className={styles.categoryBtn}>
                <span>View Category Products</span>
                <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* CARD 2: Ophthalmic Surgical Consumables */}
          <div className={styles.glassCard}>
            <div className={styles.cardTop}>
              <div className={styles.imageWrapper}>
                <img
                  src="surgical-consumables.png"
                  alt="Ophthalmic Surgical Consumables"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.tagRow}>
                <div className={styles.iconBox}>
                  <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <span className={styles.tagLabel}>Surgical Tools &amp; Solutions</span>
              </div>
              <h3 className={styles.cardTitle}>Ophthalmic Surgical Consumables</h3>
              <p className={styles.cardDesc}>
                Essential everyday surgical supplies including ultra-sharp blades, purified viscoelastic solutions, specialized cannulas, micro-forceps, and single-use pack sets.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <a href="#consumables" className={styles.categoryBtn}>
                <span>View Category Products</span>
                <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* CARD 3: Vitreoretinal Devices & Instruments */}
          <div className={styles.glassCard}>
            <div className={styles.cardTop}>
              <div className={styles.imageWrapper}>
                <img
                  src="vitreoretinal.png"
                  alt="Vitreoretinal Devices & Instruments"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.tagRow}>
                <div className={styles.iconBox}>
                  <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <span className={styles.tagLabel}>Posterior Segment</span>
              </div>
              <h3 className={styles.cardTitle}>Vitreoretinal Devices &amp; Instruments</h3>
              <p className={styles.cardDesc}>
                Advanced 25G and 27G vitrectomy instruments, high-speed cutters, silicone oils, heavy liquids, and illumination probes designed for retina surgeries.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <a href="#vitreoretinal" className={styles.categoryBtn}>
                <span>View Category Products</span>
                <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* CARD 4: Phaco Machines & Systems */}
          <div className={styles.glassCard}>
            <div className={styles.cardTop}>
              <div className={styles.imageWrapper}>
                <img
                  src="phaco-equipment.png"
                  alt="Phaco Machines & Systems"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.tagRow}>
                <div className={styles.iconBox}>
                  <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <span className={styles.tagLabel}>Phacoemulsification</span>
              </div>
              <h3 className={styles.cardTitle}>Phaco Machines &amp; Systems</h3>
              <p className={styles.cardDesc}>
                Cutting-edge phacoemulsification consoles featuring adaptive fluidic controls, real-time pressure balancing, and ergonomic handpieces for cataract removal.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <a href="#phaco-equipment" className={styles.categoryBtn}>
                <span>View Category Products</span>
                <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* CARD 5: Plasmapp Sterilizer */}
          <div className={styles.glassCard}>
            <div className={styles.cardTop}>
              <div className={styles.imageWrapper}>
                <img
                  src="plasmapp-sterilizer.png"
                  alt="Plasmapp Sterilizer"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.tagRow}>
                <div className={styles.iconBox}>
                  <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className={styles.tagLabel}>Low-Temperature Sterilization</span>
              </div>
              <h3 className={styles.cardTitle}>Plasmapp Sterilizer</h3>
              <p className={styles.cardDesc}>
                Advanced low-temperature plasma sterilization system for rapid, safe, and effective sterilization of delicate ophthalmic and surgical instruments.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <a href="#plasmapp-sterilizer" className={styles.categoryBtn}>
                <span>View Category Products</span>
                <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* CARD 6: ECP System */}
          <div className={styles.glassCard}>
            <div className={styles.cardTop}>
              <div className={styles.imageWrapper}>
                <img
                  src="ecp-system.png"
                  alt="ECP System"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.tagRow}>
                <div className={styles.iconBox}>
                  <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className={styles.tagLabel}>Glaucoma Laser Therapy</span>
              </div>
              <h3 className={styles.cardTitle}>ECP System</h3>
              <p className={styles.cardDesc}>
                Endoscopic Cyclophotocoagulation (ECP) laser system designed for precise glaucoma treatment with minimally invasive surgical procedures.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <a href="#ecp-system" className={styles.categoryBtn}>
                <span>View Category Products</span>
                <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* CARD 7: Dry Eyes Treatment */}
          <div className={`${styles.glassCard} ${styles.centerCardDesktop}`}>
            <div className={styles.cardTop}>
              <div className={styles.imageWrapper}>
                <img
                  src="dry-eyes.png"
                  alt="Dry Eyes Treatment"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.tagRow}>
                <div className={styles.iconBox}>
                  <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  </svg>
                </div>
                <span className={styles.tagLabel}>Dry Eye Therapy</span>
              </div>
              <h3 className={styles.cardTitle}>Dry Eyes Treatment</h3>
              <p className={styles.cardDesc}>
                Advanced light-based thermal therapy system for effective meibomian gland dysfunction (MGD) and chronic dry eye management.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <a href="#dry-eyes" className={styles.categoryBtn}>
                <span>View Category Products</span>
                <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM CTA PANEL */}
        <div className={styles.ctaPanel}>
          <h3 className={styles.ctaHeading}>
            Need Assistance Selecting the Right Equipment?
          </h3>
          <p className={styles.ctaSubtext}>
            Our clinical specialists are ready to help customize product bundles and provide technical specifications for your practice.
          </p>
          <div className={styles.ctaButtonGroup}>
            <a href="#contact" className={styles.ctaPrimaryBtn}>
              Request Catalog
            </a>
            <a href="#contact" className={styles.ctaSecondaryBtn}>
              Speak to a Specialist
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}