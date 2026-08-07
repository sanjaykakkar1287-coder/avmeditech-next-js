"use client";

import React from "react";
import styles from "./About.module.css";
import HeroButtons from "@/Components/buttons/HeroButtons";

export default function AboutUsSection() {
  return (
    <section id="about-us" className={styles.section}>
      <div className={styles.container}>

        {/* SECTION HEADER BADGE */}
        <div className={styles.headerRow}>
          <div className={styles.badgePill}>
            <span className={styles.pulseDot}></span>
            ABOUT AV MEDITECH
          </div>
          <span className={styles.subtitle}>
            Exclusive Ophthalmic Distributor &bull; India
          </span>
        </div>

        {/* MAIN EDITORIAL GRID */}
        <div className={styles.mainGrid}>

          {/* LEFT COLUMN: Main Story & Narrative */}
          <div className={styles.leftCol}>
            <h1 className={styles.mainHeading}>
              Bridging Global Innovation with{" "}
              <span className={styles.gradientText}>Surgical Excellence</span>{" "}
              in India
            </h1>

            <p className={styles.leadText}>
              <strong className={styles.strongText}>AV Meditech</strong> serves as the exclusive importer and distributor of cutting-edge products designed for Ophthalmic surgeries within India. Our product portfolio comprises items sourced from reputable global brands, ensuring a high standard of quality and precision that eases complex procedures for skilled surgeons.
            </p>

            <p className={styles.bodyText}>
              Our dedication to maintaining exceptional quality is a steadfast commitment aligned with our core vision. With a proven track record and a focus on incorporating the latest innovations while adhering to best practices, we offer a comprehensive array of devices designed to guarantee optimal treatment outcomes for patients nationwide.
            </p>

            {/* Core Brand Principles Horizontal List */}
            <div className={styles.principlesGrid}>
              <div className={styles.principleItem}>
                <div className={styles.principleNumSky}>01</div>
                <div>
                  <h4 className={styles.principleTitle}>100% Transparency</h4>
                  <p className={styles.principleDesc}>
                    Built on integrity and clear client communication.
                  </p>
                </div>
              </div>

              <div className={styles.principleItem}>
                <div className={styles.principleNumBlue}>02</div>
                <div>
                  <h4 className={styles.principleTitle}>Pan-India Network</h4>
                  <p className={styles.principleDesc}>
                    Seamless procurement through dedicated promoters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Glass Feature Hub Panel + Consumables Showcase */}
          <div className={styles.rightCol}>
            <div className={styles.glowAura}></div>

            <div className={styles.featureCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardHeaderLabel}>Surgical Consumables</span>
                <span className={styles.greenDot}></span>
              </div>

              <h3 className={styles.cardTitle}>
                High-Precision Tools for Every Ophthalmic Procedure
              </h3>

              <p className={styles.cardDesc}>
                Many of our offerings are integral consumables required for every surgery, creating a consistent and reliable supply chain across India at competitive prices.
              </p>

              {/* Product Tag Pills */}
              <div>
                <span className={styles.offeringsLabel}>Key Offerings</span>
                <div className={styles.tagGroup}>
                  <span className={styles.productTag}>Intraocular Lenses</span>
                  <span className={styles.productTag}>Surgical Blades &amp; Knives</span>
                  <span className={styles.productTag}>Precision Forceps</span>
                  <span className={styles.productTag}>Viscoelastic Solutions</span>
                  <span className={styles.productTag}>Ophthalmic Cannulas</span>
                  <span className={styles.productTag}>Vitreo-Retina Devices</span>
                  <span className={styles.productTag}>Phaco Equipment</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <span>Trusted Nationwide</span>
                <span>100% Quality Assurance</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: VALUE STRIP */}
        <div className={styles.valueStrip}>
          <div className={styles.stripLeft}>
            <div className={styles.iconBadge}>
              <svg className={styles.stripIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className={styles.stripTitle}>Innovative &amp; Forward-Looking</h4>
              <p className={styles.stripDesc}>
                Our team remains ahead of competitors in the dynamic field of ophthalmic surgery products.
              </p>
            </div>
          </div>

          <HeroButtons text="Get In Touch"/>
        </div>

      </div>
    </section>
  );
}