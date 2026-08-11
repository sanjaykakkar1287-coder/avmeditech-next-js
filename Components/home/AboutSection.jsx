"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./AboutSection.module.css";

/**
 * NOTE ON STATS
 * The numbers in STATS below ("15+", "20+", "500+") are placeholders to
 * show the layout — swap them for AV Meditech's real, verifiable figures
 * before this goes live.
 */
const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "20+", label: "Global Brands" },
  { value: "500+", label: "Surgeons Served" },
];

const PILLARS = [
  {
    title: "Exclusive Distribution",
    text: "Bringing internationally recognized ophthalmic products to healthcare professionals across India.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeWidth="1.5" d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9z" />
      </>
    ),
  },
  {
    title: "Trusted Quality",
    text: "Carefully selected premium products designed to deliver precision, safety, and reliability in every procedure.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Innovation",
    text: "Supporting surgeons with advanced ophthalmic technologies that improve efficiency and patient outcomes.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 18h6M10 21h4M12 3a6 6 0 00-3.4 10.9c.5.35.9.9.9 1.5V16a.6.6 0 00.6.6h3.8a.6.6 0 00.6-.6v-.6c0-.6.4-1.15.9-1.5A6 6 0 0012 3z" />
      </>
    ),
  },
];

/** Reveals each ref'd element once it scrolls into view. */
function useRevealOnScroll(count) {
  const refs = useRef([]);
  const [visible, setVisible] = useState(() => new Array(count).fill(false));

  useEffect(() => {
    const els = refs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number(entry.target.dataset.index);
          setVisible((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [count]);

  return [refs, visible];
}

export default function AboutSection() {
  const [refs, visible] = useRevealOnScroll(PILLARS.length);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* LEFT: CONTENT */}
        <div className={styles.content}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            About AV Meditech
          </span>

          <h2 className={styles.heading}>
            Delivering excellence in <span className={styles.highlight}>ophthalmic care</span>
          </h2>

          <p className={styles.description}>
            AV Meditech is the exclusive importer and distributor of cutting-edge ophthalmic
            surgical products in India. We collaborate with globally trusted brands to provide
            innovative, high-quality solutions that help ophthalmic surgeons perform procedures
            with confidence, precision, and efficiency.
          </p>

          <p className={styles.description}>
            Our commitment to quality goes beyond products — we strive to support healthcare
            professionals with advanced technologies, reliable service, and comprehensive
            ophthalmic solutions that contribute to better surgical outcomes and improved
            patient care across the country.
          </p>

          <div className={styles.statStrip}>
            {STATS.map((stat, i) => (
              <div className={styles.stat} key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
                {i < STATS.length - 1 && <span className={styles.statDivider} aria-hidden="true" />}
              </div>
            ))}
          </div>

          <Link href="/about" className={styles.button}>
            Read More
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16" className={styles.buttonArrow}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* RIGHT: PILLAR CARDS ON A LIGHT BEAM */}
        <div className={styles.pillars}>
          <div className={styles.beam}>
            <span className={styles.beamGlow} />
          </div>

          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              ref={(el) => (refs.current[i] = el)}
              data-index={i}
              className={`${styles.card} ${visible[i] ? styles.isVisible : ""}`}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <div className={styles.cardIconWrap}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.cardIcon}>
                  {pillar.icon}
                </svg>
              </div>
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}