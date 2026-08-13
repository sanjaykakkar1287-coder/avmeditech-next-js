"use client";

import React from "react";
import styles from "./OurPartnersMarquee.module.css";

const partners = [
  {
    id: 2,
    name: "R-Evolution",
    logo: "/images/partnerslogo/2.jpg",
  },
  {
    id: 3,
    name: "Vitreq",
    logo: "/images/partnerslogo/3.jpg",
  },
  {
    id: 4,
    name: "Revo Smart",
    logo: "/images/partnerslogo/4.jpg",
  },
  {
    id: 5,
    name: "Plasmapp",
    logo: "/images/partnerslogo/5.jpg",
  },
  {
    id: 6,
    name: "Endo Optiks",
    logo: "/images/partnerslogo/6.jpg",
  },
  {
    id: 7,
    name: "BVI",
    logo: "/images/partnerslogo/7.jpg",
  },
];

export default function OurPartnersMarquee() {
  const handleImageError = (e, partnerName) => {
    const parent = e.currentTarget.parentElement;

    if (parent) {
      e.currentTarget.style.display = "none";

      const fallbackText = document.createElement("span");

      fallbackText.className =
        styles.partnerFallbackText;

      fallbackText.innerText = partnerName;

      parent.appendChild(fallbackText);
    }
  };

  return (
    <section className={styles.section}>

      <div className={styles.auraGlow}></div>

      <div className={styles.container}>

        <div className={styles.partnersRow}>

          {/* =====================================
              LEFT — IMAGE
          ===================================== */}

          <div className={styles.imageColumn}>

            <div className={styles.imageWrapper}>

              <img
                src="/images/team/partner.jpg"
                alt="AV Meditech Partners"
                className={styles.teamImage}
              />

              <div className={styles.imageOverlay}></div>

              <div className={styles.imageBadge}>
                <span></span>
                Global Partnerships
              </div>

            </div>

          </div>


          {/* =====================================
              RIGHT — CONTENT
          ===================================== */}

          <div className={styles.contentColumn}>

            <div className={styles.header}>

              <div className={styles.badge}>
                <span className={styles.badgeDot}></span>
                GLOBAL COLLABORATIONS
              </div>

              <h2 className={styles.title}>
                Trusted by Industry Leaders &{" "}
                <span className={styles.highlight}>
                  Global Partners
                </span>
              </h2>

              <p className={styles.description}>
                Empowering ophthalmic surgeons across India
                through strategic partnerships with world-class
                medical technology institutions.
              </p>

            </div>


            {/* =====================================
                PARTNER LOGOS
            ===================================== */}

            <div className={styles.partnersGrid}>

              {partners.map((item) => (

                <div
                  key={item.id}
                  className={styles.partnerCard}
                >

                  <img
                    src={item.logo}
                    alt={item.name}
                    onError={(e) =>
                      handleImageError(
                        e,
                        item.name
                      )
                    }
                    className={styles.partnerImg}
                  />

                </div>

              ))}

            </div>


            {/* =====================================
                FOOTER
            ===================================== */}

            <div className={styles.footer}>

              <span>ISO Certified</span>

              <span className={styles.footerDot}></span>

              <span>
                Nationwide Distribution
              </span>

              <span className={styles.footerDot}></span>

              <span>
                20+ Years Excellence
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}