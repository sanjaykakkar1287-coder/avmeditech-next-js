import React from "react";
import styles from "./WhyChooseUs.module.css";
import HeroButtons from "@/Components/buttons/HeroButtons";
export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.left}>
          <span className={styles.badge}>
            <span className={styles.badgeDot}></span>
            WHY AV MEDITECH
          </span>

          <h2 className={styles.heading}>
            Why Choose AV Meditech for the{" "}
            <span className={styles.highlight}>
              Best Cataract IOL in India?
            </span>
          </h2>

          <p className={styles.description}>
            If you're searching for the best IOL for cataract surgery in India,
            AV Meditech has the perfect solution for your vision needs. Contact
            us today to explore our range of premium cataract lenses and
            experience the future of ophthalmic excellence!
          </p>
<HeroButtons />
          
        </div>

        {/* Right Column */}
        <div className={styles.right}>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>

              <div>
                <h3 className={styles.itemTitle}>High-Quality Optics</h3>
                <p className={styles.itemText}>
                  Ensuring clear, distortion-free vision.
                </p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>

              <div>
                <h3 className={styles.itemTitle}>
                  Enhanced Visual Clarity
                </h3>
                <p className={styles.itemText}>
                  Reducing post-surgery glare and halos.
                </p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>

              <div>
                <h3 className={styles.itemTitle}>
                  Trusted by Leading Ophthalmologists
                </h3>
                <p className={styles.itemText}>
                  Recommended for superior patient outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}