"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Welcome.module.css";

const words = [
  "Healthcare Experts",
  "Eye Surgeons",
  "Ophthalmologists",
  "Vision Experts",
  "Medical Partners",
];

export default function Welcome() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const closeOverlay = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>

      <div className={styles.popup}>

        {/* LOGO */}
        <div className={styles.logo}>
          <Image
            src="/images/logo/LOGO2.PNG"
            alt="AV Meditech Logo"
            width={180}
            height={80}
            priority
          />
        </div>

        {/* TITLE */}
        <h1 className={styles.title}>
          Welcome to <br />
          <span>AV Meditech</span>
        </h1>

        {/* ROTATING TEXT */}
        <div className={styles.rotateBox}>
          <p className={styles.rotateLabel}>
            Designed for
          </p>

          <h3
            key={wordIndex}
            className={styles.rotateWord}
          >
            {words[wordIndex]}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p className={styles.description}>
          Delivering world-class ophthalmic solutions for
          surgeons, hospitals and vision experts. Please select
          your preferred experience.
        </p>

        {/* BUTTONS */}
        <div className={styles.buttons}>

          {/* PATIENT */}
          <Link
            href="/patients"
            className={styles.primaryBtn}
            onClick={closeOverlay}
          >
            <span>I'm Patient</span>
            <span aria-hidden="true">→</span>
          </Link>


          {/* VISITOR */}
          <Link
            href="/"
            className={styles.secondaryBtn}
            onClick={closeOverlay}
          >
            <span>Continue as Visitor</span>
            <span aria-hidden="true">→</span>
          </Link>

        </div>

      </div>

    </div>
  );
}