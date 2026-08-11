"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./IolBenefitsSection.module.css";

/**
 * NOTE ON FONTS
 * Three type roles: serif display (Fraunces), body sans (IBM Plex Sans),
 * mono utility (IBM Plex Mono) for labels. Loaded via @import in the CSS
 * module as a drop-in — for production, prefer next/font instead.
 */

const BOOKS = [
  {
    id: "vision",
    label: "Vision Benefits",
    accent: "var(--iol-blue)",
    pages: [
      {
        tag: "Clarity",
        title: "Superior Visual Clarity",
        text: "Our best IOL for cataract surgery in India provides crystal-clear vision, reducing glare, halos, and distortion for better contrast and sharpness.",
        icon: (
          <>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </>
        ),
      },
      {
        tag: "Freedom",
        title: "Minimal Dependence on Glasses",
        text: "With premium multifocal and trifocal IOLs, patients enjoy excellent near, intermediate, and distance vision without needing glasses.",
        icon: (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        ),
      },
      {
        tag: "Correction",
        title: "Correction of Astigmatism",
        text: "Our toric IOLs correct astigmatism, ensuring sharper vision for patients with corneal irregularities.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
      },
    ],
  },
  {
    id: "comfort",
    label: "Comfort & Longevity",
    accent: "var(--iol-teal)",
    pages: [
      {
        tag: "Night Drive",
        title: "Enhanced Night Vision",
        text: "AV Meditech's advanced IOL technology minimizes halos and glare, providing clear night vision in low-light conditions.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />,
      },
      {
        tag: "Longevity",
        title: "Durability & Long-Term Health",
        text: "Our IOLs are made from biocompatible materials, ensuring safety, longevity, and improved eye health post-surgery.",
        icon: (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        ),
      },
      {
        tag: "Comfort",
        title: "Faster Recovery & Comfort",
        text: "Smooth implantation and precise optical performance support a quick recovery and comfortable adaptation post-surgery.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
      },
    ],
  },
];

/**
 * One book-style card: a stack of pages that flips forward — on a timer,
 * on click of the arrow, or via the dots — like a page turning in a book.
 * Pages are stacked with cyclic z-index; the departing page rotates away
 * on its left edge while the next page (already sitting underneath) is
 * revealed. Auto-advance pauses on hover/focus and is skipped entirely
 * under prefers-reduced-motion.
 */
function BookFlipCard({ label, accent, pages }) {
  const [current, setCurrent] = useState(0);
  const [turningIndex, setTurningIndex] = useState(null);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const turnTimeoutRef = useRef(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const advance = useCallback(() => {
    setTurningIndex((activeTurn) => {
      if (activeTurn !== null) return activeTurn; // a flip is already mid-way, ignore
      return null;
    });
    setCurrent((from) => {
      if (reducedMotionRef.current) {
        return (from + 1) % pages.length;
      }
      setTurningIndex(from);
      window.clearTimeout(turnTimeoutRef.current);
      turnTimeoutRef.current = window.setTimeout(() => {
        setCurrent((c) => (c + 1) % pages.length);
        setTurningIndex(null);
      }, 700);
      return from;
    });
  }, [pages.length]);

  useEffect(() => {
    if (paused) return undefined;
    intervalRef.current = window.setInterval(advance, 4400);
    return () => window.clearInterval(intervalRef.current);
  }, [advance, paused]);

  useEffect(() => () => window.clearTimeout(turnTimeoutRef.current), []);

  const jumpTo = (idx) => {
    if (idx === current) return;
    window.clearTimeout(turnTimeoutRef.current);
    setTurningIndex(null);
    setCurrent(idx);
  };

  return (
    <div
      className={styles.bookCard}
      style={{ "--card-accent": accent }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={styles.bookHeader}>
        <span className={styles.bookLabel}>{label}</span>
        <button
          type="button"
          className={styles.bookNextBtn}
          onClick={advance}
          aria-label={`Show next benefit in ${label}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="15" height="15">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className={styles.bookViewport}>
        {pages.map((page, i) => {
          const n = pages.length;
          const relative = (i - current + n) % n;
          const zIndex = n - relative;
          const isTurning = i === turningIndex;
          return (
            <div
              key={page.tag}
              className={`${styles.bookPage} ${isTurning ? styles.turning : ""}`}
              style={{ zIndex }}
              aria-hidden={i !== current}
            >
              <div className={styles.bookPageSpine} />
              <div className={styles.bookPageIconWrap}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.bookPageIcon}>
                  {page.icon}
                </svg>
              </div>
              <span className={styles.bookPageTag}>{page.tag}</span>
              <h3 className={styles.bookPageTitle}>{page.title}</h3>
              <p className={styles.bookPageText}>{page.text}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.bookDots}>
        {pages.map((page, i) => (
          <button
            key={page.tag}
            type="button"
            className={`${styles.bookDot} ${i === current ? styles.bookDotActive : ""}`}
            onClick={() => jumpTo(i)}
            aria-label={`Go to ${page.tag}`}
            aria-current={i === current}
          />
        ))}
      </div>
    </div>
  );
}

/** Left visual: an animated 2D "diagnostic" eye graphic with a sweeping scan line. */
function FocusVisual() {
  return (
    <div className={styles.visualCard}>
      <div className={styles.visualHeaderRow}>
        <span className={styles.visualLabel}>Intraocular Lens System</span>
        <span className={styles.visualStatus}>
          <span className={styles.visualStatusDot} />
          Precision Focus
        </span>
      </div>

      <div className={styles.visualStage}>
        <span className={`${styles.reticle} ${styles.reticleTL}`} />
        <span className={`${styles.reticle} ${styles.reticleTR}`} />
        <span className={`${styles.reticle} ${styles.reticleBL}`} />
        <span className={`${styles.reticle} ${styles.reticleBR}`} />

        <div className={styles.scanLine} />

        <div className={styles.ringOuter} />
        <div className={styles.ringInner} />
        <div className={styles.orbitDot} />

        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.eyeIcon}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          <circle cx="12" cy="12" r="3" className={styles.eyePupil} />
        </svg>
      </div>

      <div className={styles.visualFooter}>
        <span className={styles.visualFooterLabel}>Real-time optical calibration</span>
        <div className={styles.calibrationTrack}>
          <div className={styles.calibrationFill} />
        </div>
      </div>
    </div>
  );
}

export default function IolBenefitsSection() {
  return (
    <section className={styles.iolBenefitsSection}>
      <div className={styles.iolBenefitsContainer}>
        {/* HEADER */}
        <div className={styles.iolBenefitsHeader}>
          <div className={styles.iolHeaderBadge}>
            <span className={styles.iolBadgeDot} />
            Clinical advantages
          </div>
          <h2 className={styles.iolBenefitsTitle}>
            Why patients choose the <span className={styles.gradientHighlight}>right lens</span> for cataract surgery in India
          </h2>
          <p className={styles.iolBenefitsSubtitle}>
            Selecting the best lens for cataract surgery in India is essential for clear vision and
            long-term eye health. At AV Meditech, our advanced IOLs ensure visual clarity and smooth
            recovery.
          </p>
        </div>

        {/* MAIN LAYOUT: visual left, book-flip cards right */}
        <div className={styles.iolBenefitsGrid}>
          <FocusVisual />

          <div className={styles.booksColumn}>
            {BOOKS.map((book) => (
              <BookFlipCard key={book.id} label={book.label} accent={book.accent} pages={book.pages} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}