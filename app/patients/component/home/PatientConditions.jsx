"use client";

import { useState } from "react";
import Link from "next/link";

import { patientConditions } from "./patientdata";
import styles from "./PatientConditions.module.css";

export default function PatientConditions() {

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((current) =>
            (current + 1) % patientConditions.length
        );
    };

    const prevSlide = () => {
        setActiveIndex((current) =>
            (current - 1 + patientConditions.length) %
            patientConditions.length
        );
    };

    const activeCondition = patientConditions[activeIndex];

    return (
        <section className={styles.section}>

            <div className={styles.container}>

                {/* =========================
                    HEADER
                ========================= */}

                <div className={styles.header}>

                    <span className={styles.eyebrow}>
                        UNDERSTAND YOUR EYE HEALTH
                    </span>

                    <h2>
                        Learn More About{" "}
                        <span>
                            Common Eye Conditions
                        </span>
                    </h2>

                    <p>
                        Understanding your eye condition is the first step
                        toward making informed decisions about your eye health.
                    </p>

                </div>


                {/* =========================
                    SLIDER
                ========================= */}

                <div className={styles.slider}>

                    {/* IMAGE */}

                    <div className={styles.imageSide}>

                        <img
                            src={activeCondition.image}
                            alt={activeCondition.name}
                        />

                    </div>


                    {/* CONTENT */}

                    <div className={styles.contentSide}>

                        <span className={styles.category}>
                            {activeCondition.category}
                        </span>

                        <h3>
                            {activeCondition.name}
                        </h3>

                        <p className={styles.description}>
                            {activeCondition.shortDescription}
                        </p>


                        {/* LEARN MORE */}

                        <Link
                            href={`/patients/Conditions/${activeCondition.slug}`}
                            className={styles.learnMore}
                        >
                            <span>
                                Learn More
                            </span>

                            <span className={styles.arrow}>
                                →
                            </span>
                        </Link>


                        {/* NAVIGATION */}

                        <div className={styles.navigation}>

                            <button
                                type="button"
                                onClick={prevSlide}
                                aria-label="Previous condition"
                                className={styles.navButton}
                            >
                                ←
                            </button>


                            <div className={styles.dots}>

                                {patientConditions.map(
                                    (condition, index) => (

                                        <button
                                            key={condition.slug}
                                            type="button"
                                            onClick={() =>
                                                setActiveIndex(index)
                                            }
                                            aria-label={`Go to ${condition.name}`}
                                            className={`${styles.dot} ${
                                                index === activeIndex
                                                    ? styles.activeDot
                                                    : ""
                                            }`}
                                        />

                                    )
                                )}

                            </div>


                            <button
                                type="button"
                                onClick={nextSlide}
                                aria-label="Next condition"
                                className={styles.navButton}
                            >
                                →
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}