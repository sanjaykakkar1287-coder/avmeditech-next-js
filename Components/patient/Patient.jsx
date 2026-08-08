"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Patient.module.css";
import PatientConditions from "./PatientConditions";
const rotatingWords = ["Vision", "Eyes", "Future", "Confidence"];

export default function Patient() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade/slide out first, then swap word and fade back in
      setIsVisible(false);

      const swapTimeout = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 300);

      return () => clearTimeout(swapTimeout);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className={styles.hero} aria-label="Patient hero section">
      <div className={styles.container}>
        {/* Left content */}
        <div className={styles.content}>
          <span className={styles.badge}>For Patients</span>

          <h1 className={styles.heading}>
            Better{" "}
            <span className={styles.rotatingWrap}>
              <span
                className={`${styles.rotatingWord} ${
                  isVisible ? styles.rotatingWordVisible : styles.rotatingWordHidden
                }`}
              >
                {rotatingWords[wordIndex]}
              </span>
            </span>{" "}
            Starts Here
          </h1>

          <p className={styles.description}>
            Learn about common eye conditions, treatment options and modern
            solutions designed to help you make informed decisions about your
            eye health.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="/eye-conditions" className={styles.primaryBtn}>
              Explore Eye Conditions
            </Link>
            <Link href="/treatments" className={styles.secondaryBtn}>
              Explore Treatment Options
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className={styles.visual}>
          <div className={styles.blobOne} aria-hidden="true" />
          <div className={styles.blobTwo} aria-hidden="true" />

          <div className={styles.imageFrame}>
            <Image
              src="/images/patient/patient-hero.jpg"
              alt="Ophthalmologist consulting with a patient during an eye examination"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
    <PatientConditions />
</>
  );
}