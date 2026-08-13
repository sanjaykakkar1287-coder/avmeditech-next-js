"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./IolShowcase.module.css";

const iolData = [
    {
        num: "01",
        title: "Monofocal IOLs",
        sub: "Provides sharp vision at a single distance...",
        tag: "Single Vision Focus",
        desc: "Provides sharp vision at a single distance, ideal for patients comfortable using glasses for reading.",
        href: "../products/iol-lens/monofocal"
    },
    {
        num: "02",
        title: "Multifocal IOLs",
        sub: "Enables clear vision at multiple distances...",
        tag: "Multi-Distance Clarity",
        desc: "Enables clear vision at multiple distances, reducing the need for glasses.",
        href: "./products/iol-lens/monofocal"
    },
    {
        num: "03",
        title: "Trifocal IOLs",
        sub: "Offers seamless vision at near, intermediate, and far...",
        tag: "Active Lifestyle Focus",
        desc: "Offers seamless vision at near, intermediate, and far distances, perfect for an active lifestyle.",
        href: "./products/iol-lens/monofocal"
    },
    {
        num: "04",
        title: "Toric IOLs",
        sub: "Corrects astigmatism, ensuring sharper vision...",
        tag: "Astigmatism Correction",
        desc: "Corrects astigmatism, ensuring sharper and distortion-free vision.",
        href: "./products/iol-lens/monofocal"
    },
];

 {iolData.map((item, i) => (console.log(item.href)))}

export default function IolShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const totalItems = iolData.length;

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % totalItems);
    }, [totalItems]);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [handleNext, isPaused]);

    return (
        <section className={styles.iolSection}>
            <div className="container">

                {/* =========================================
                    SECTION HEADER
                ========================================= */}

                <div className={styles.sectionHeader}>

                    <span className={styles.categoryBadge}>
                        <span className={styles.badgeDot}></span>
                        PRECISION OPHTHALMIC OPTICS
                    </span>

                    <h2 className={styles.sectionTitle}>
                        Choosing the Best Lens for Cataract
                        <span className={styles.gradientHighlight}>
                            {" "}Surgery in India
                        </span>
                    </h2>

                    <p className={styles.sectionIntro}>
                        Cataract surgery is a crucial procedure that restores
                        clear vision by replacing the eye&apos;s clouded lens
                        with an intraocular lens (IOL). Selecting the best lens
                        for cataract surgery in India is essential for achieving
                        optimal visual clarity and long-term eye health. At AV
                        Meditech, we provide premium-quality IOLs designed to
                        enhance vision, minimize glare, and reduce dependence
                        on glasses post-surgery.
                    </p>

                </div>


                {/* =========================================
                    SHOWCASE
                ========================================= */}

                <div className={styles.showcaseGrid}>

                    {/* =====================================
                        LEFT SELECTOR
                    ===================================== */}

                    <div
                        className={styles.selectorColumn}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >

                        <div className={styles.columnHeading}>
                            <span className={styles.columnLine}></span>

                            <h3 className={styles.columnLabel}>
                                Best IOL Solutions for Clear Vision
                            </h3>
                        </div>


                        <div className={styles.pillsWrapper}>

                            {iolData.map((item, i) => (

                                <button
                                    key={item.num}
                                    type="button"
                                    href={item.href}
                                    className={`${styles.iolPill} ${
                                        activeIndex === i
                                            ? styles.active
                                            : ""
                                    }`}
                                    onClick={() => setActiveIndex(i)}
                                    aria-pressed={activeIndex === i}
                                >

                                    {/* Progress */}
                                    {activeIndex === i && !isPaused && (
                                        <span
                                            className={styles.progressBar}
                                            key={`${i}-${activeIndex}`}
                                        ></span>
                                          
                                    )}


                                    <span className={styles.pillContent}>

                                        <span className={styles.pillHeader}>

                                            <span className={styles.pillNum}>
                                                {item.num}
                                            </span>

                                            <span className={styles.pillTitle}>
                                                {item.title}
                                            </span>

                                        </span>

                                        <span className={styles.pillSub}>
                                            {item.sub}
                                        </span>

                                    </span>


                                    <span className={styles.pillArrow}>
                                        →
                                    </span>
                                    

                                </button>
                             

                            ))}
   
                        </div>

                    </div>


                    {/* =====================================
                        RIGHT DISPLAY
                    ===================================== */}

                    <div
                        className={styles.displayColumn}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >

                        <div className={styles.glassStage}>

                            {/* Decorative elements */}

                            <span className={styles.stageGlow}></span>
                            <span className={styles.stageRing}></span>


                            {iolData.map((item, i) => (

                                <div
                                    key={item.num}
                                    className={`${styles.stageCard} ${
                                        activeIndex === i
                                            ? styles.active
                                            : ""
                                    }`}
                                >

                                    <span className={styles.typeTag}>
                                        <span></span>
                                        {item.tag}
                                    </span>

                                    <span className={styles.bigNumber}>
                                        {item.num}
                                    </span>

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p className={styles.cardDesc}>
                                        {item.desc}
                                    </p>


                                    <div className={styles.specsBox}>

                                        <div className={styles.specsIcon}>
                                            ✓
                                        </div>

                                        <div>

                                            <h4>
                                                Precision Optical Standard
                                            </h4>

                                            <p>
                                                Each of our lenses is designed
                                                with precision optics, offering
                                                high contrast sensitivity,
                                                reduced visual disturbances,
                                                and long-term durability.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>


                {/* =========================================
                    QUALITY BANNER
                ========================================= */}

                <div className={styles.qualityBanner}>

                    <div className={styles.qualityItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>Precision Optics</span>
                    </div>

                    <div className={styles.qualityItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>High Contrast Sensitivity</span>
                    </div>

                    <div className={styles.qualityItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>Reduced Visual Disturbances</span>
                    </div>

                    <div className={styles.qualityItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>Long-Term Durability</span>
                    </div>

                </div>

            </div>
        </section>
    );
}