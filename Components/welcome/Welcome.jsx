"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Welcome.module.css";

const words = [
  "Healthcare Professionals",
  "Eye Surgeons",
  "Ophthalmologists",
  "Vision Experts",
  "Medical Partners",
];

export default function Welcome() {
  const router = useRouter();

  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable page scroll
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    // Cleanup function to re-enable scroll when component unmounts
    return () => clearInterval(interval);
  }, [isVisible]);

  const handleProfessional = () => {
    document.body.style.overflow = "auto";
    router.push("/patient");
  };

  const handleVisitor = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (  
    <div className={styles.overlay}>
      <div className={styles.popup}>

        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src="/images/logo/LOGO2.PNG"
            alt="AV Meditech Logo"
            width={180}
            height={80}
          />
        </div>

        {/* Heading */}
        <h1 className={styles.title}>
          Welcome to <br />
          <span>AV Meditech</span>
        </h1>

        {/* Animated Text */}
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

        {/* Description */}
        <p className={styles.description}>
          Delivering world-class ophthalmic solutions
          for surgeons, hospitals and vision experts.
          Please select your preferred experience.
        </p>

        {/* Buttons */}

        <div className={styles.buttons}>

          <button
            onClick={handleProfessional}
            className={styles.primaryBtn}
          >
            I'm Patient
            <span>→</span>
          </button>

          <button
            onClick={handleVisitor}
            className={styles.secondaryBtn}
          >
            Continue as Visitor
            <span>→</span>
          </button>

        </div>

      </div>
    </div>
  );
}