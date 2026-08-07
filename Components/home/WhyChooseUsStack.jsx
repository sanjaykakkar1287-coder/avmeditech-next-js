"use client";

import React, { useState, useEffect, useCallback } from "react";
import styles from "./WhyChooseUsStack.module.css";

export default function WhyChooseUsStack() {
  const [currentPillar, setCurrentPillar] = useState(1);
  const [flippedCards, setFlippedCards] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [isPaused, setIsPaused] = useState(false);

  const totalCards = 4;

  // Advance to next card in stack
  const handleNextPillar = useCallback(() => {
    setCurrentPillar((prev) => {
      if (prev >= totalCards) {
        // Auto reset when reaching the end
        setFlippedCards({ 1: false, 2: false, 3: false, 4: false });
        return 1;
      } else {
        setFlippedCards((prevFlipped) => ({
          ...prevFlipped,
          [prev]: true,
        }));
        return prev + 1;
      }
    });
  }, [totalCards]);

  // Reset entire card stack
  const resetCards = () => {
    setFlippedCards({ 1: false, 2: false, 3: false, 4: false });
    setCurrentPillar(1);
  };

  // User manually triggered next button
  const userTriggerNext = () => {
    handleNextPillar();
  };

  // Auto-cycle timer with hover pause functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNextPillar();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, handleNextPillar]);

  return (
    <section 
      id="why-choose-us" 
      className={styles.section}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.mainGrid}>

        {/* Card Stack Area */}
        <div className={styles.cardCol}>
          <div className={styles.bookContainer}>
            
            {/* CARD 04 */}
            <div 
              className={`${styles.flipCard} ${flippedCards[4] ? styles.flipped : ""}`} 
              style={{ zIndex: 10 }}
            >
              <div>
                <div className={styles.cardHeader}>
                  <div className={`${styles.badgeNum} ${styles.bgSky}`}>
                    04
                  </div>
                  <span className={`${styles.tagPill} ${styles.tagSky}`}>
                    Network
                  </span>
                </div>
                <h3 className={styles.cardTitle}>Nationwide Presence</h3>
                <p className={styles.cardDesc}>
                  We ensure seamless access to high-quality ophthalmic solutions across the country with a strong distribution network.
                </p>
              </div>
              <div className={styles.cardFooter}>
                <span>AV Meditech Reach</span>
                <span>Countrywide Accessibility</span>
              </div>
            </div>

            {/* CARD 03 */}
            <div 
              className={`${styles.flipCard} ${flippedCards[3] ? styles.flipped : ""}`} 
              style={{ zIndex: 20 }}
            >
              <div>
                <div className={styles.cardHeader}>
                  <div className={`${styles.badgeNum} ${styles.bgBlue}`}>
                    03
                  </div>
                  <span className={`${styles.tagPill} ${styles.tagBlue}`}>
                    Guidance
                  </span>
                </div>
                <h3 className={styles.cardTitle}>Expert Support</h3>
                <p className={styles.cardDesc}>
                  Our team of skilled professionals provides comprehensive guidance, ensuring integration and optimal use of our ophthalmic solutions.
                </p>
              </div>
              <div className={styles.cardFooter}>
                <span>Clinical Guidance</span>
                <span>Continuous Partnership</span>
              </div>
            </div>

            {/* CARD 02 */}
            <div 
              className={`${styles.flipCard} ${flippedCards[2] ? styles.flipped : ""}`} 
              style={{ zIndex: 30 }}
            >
              <div>
                <div className={styles.cardHeader}>
                  <div className={`${styles.badgeNum} ${styles.bgIndigo}`}>
                    02
                  </div>
                  <span className={`${styles.tagPill} ${styles.tagIndigo}`}>
                    Compliance
                  </span>
                </div>
                <h3 className={styles.cardTitle}>Global Quality Standards</h3>
                <p className={styles.cardDesc}>
                  We adhere to international benchmarks, ensuring reliable, safe, and high-performance ophthalmic solutions.
                </p>
              </div>
              <div className={styles.cardFooter}>
                <span>International Certification</span>
                <span>High Performance</span>
              </div>
            </div>

            {/* CARD 01 */}
            <div 
              className={`${styles.flipCard} ${flippedCards[1] ? styles.flipped : ""}`} 
              style={{ zIndex: 40 }}
            >
              <div>
                <div className={styles.cardHeader}>
                  <div className={`${styles.badgeNum} ${styles.bgSky}`}>
                    01
                  </div>
                  <span className={`${styles.tagPill} ${styles.tagSky}`}>
                    Core Pillar
                  </span>
                </div>
                <h3 className={styles.cardTitle}>Commitment to Excellence</h3>
                <p className={styles.cardDesc}>
                  We prioritize quality, innovation, and precision to deliver the best ophthalmic solutions for eye care professionals.
                </p>
              </div>
              <div className={styles.cardFooter}>
                <span>Precision Focused</span>
                <span>Innovative Eye Care</span>
              </div>
            </div>

          </div>
        </div>

        {/* Text Information Column */}
        <div className={styles.infoCol}>
          
          <div className={styles.glassPill}>
            <span className={styles.pulseDot}>
              <span className={styles.pingAnimation}></span>
              <span className={styles.staticDot}></span>
            </span>
            WHY CHOOSE US
          </div>

          <h2 className={styles.mainHeading}>
            Empowering Ophthalmic Care with
            <span className={styles.gradientHighlight}> Uncompromised Quality</span>
          </h2>

          <p className={styles.mainSubtext}>
            We combine cutting-edge precision engineering with nationwide support to deliver world-class ophthalmic solutions for eye care professionals.
          </p>

          <div className={styles.progressWrapper}>
            <div className={styles.progressInfo}>
              <span>
                Pillar <span className={styles.counterHighlight}>{currentPillar}</span> of 4
              </span>
              <span className={styles.autoStatus}>
                {isPaused ? "Paused" : "Auto-cycling (Hover to Pause)"}
              </span>
            </div>
            <div className={styles.trackBar}>
              <div 
                className={styles.fillBar}
                style={{ width: `${(currentPillar / totalCards) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button 
              onClick={userTriggerNext} 
              className={styles.primaryBtn}
            >
              <span>Next Pillar</span>
              <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button 
              onClick={resetCards} 
              className={styles.secondaryBtn}
            >
              <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Reset Stack</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}