"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Welcome.module.css";

const words = [
    "Healthcare Professionals",
    "Eye Surgeons",
    "Ophthalmologists",
    "Vision Experts",
    "Medical Partners",
];

export default function Welcome() {
    const [wordIndex, setWordIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const closeOverlay = () => {
        document.body.style.overflow = "auto";
        setIsVisible(false);
    };

    useEffect(() => {
        document.body.style.overflow = isVisible ? "hidden" : "auto";

        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => {
            clearInterval(interval);
            document.body.style.overflow = "auto";
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <div className={styles.logo}>
                    <Image
                        src="/images/logo/LOGO2.PNG"
                        alt="AV Meditech Logo"
                        width={180}
                        height={80}
                    />
                </div>

                <h1 className={styles.title}>
                    Welcome to <br />
                    <span>AV Meditech</span>
                </h1>

                <div className={styles.rotateBox}>
                    <p className={styles.rotateLabel}>Designed for</p>

                    <h3 key={wordIndex} className={styles.rotateWord}>
                        {words[wordIndex]}
                    </h3>
                </div>

                <p className={styles.description}>
                    Delivering world-class ophthalmic solutions for surgeons,
                    hospitals and vision experts. Please select your preferred
                    experience.
                </p>

                <div className={styles.buttons}>
                    <Link
                        href="/patients"
                        className={styles.primaryBtn}
                        onClick={closeOverlay}
                    >
                        I&apos;m Patient
                        <span aria-hidden="true">→</span>
                    </Link>

                    <button
                        type="button"
                        onClick={closeOverlay}
                        onPointerUp={closeOverlay}
                        onMouseUp={closeOverlay}
                        className={styles.secondaryBtn}
                    >
                        Continue as Visitor
                        <span aria-hidden="true">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
