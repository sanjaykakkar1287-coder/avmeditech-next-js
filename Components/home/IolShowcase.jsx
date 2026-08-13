"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./IolShowcase.module.css";

const iolData = [
   
  {
    num: "01",
    title: "Trifocal",
    sub: "Premium Trifocal Intraocular Lens designed for advanced visual correction and cataract surgery applications.",
    tag: "Trifocal Optics",
    desc: "Premium Trifocal Intraocular Lens designed to provide clear vision across near, intermediate, and distance ranges.",
    href: "/products/iol-lens/trifocal"
  },
  {
    num: "02",
    title: "Trifocal Toric",
    sub: "Premium Trifocal Toric Intraocular Lens designed for cataract surgery with astigmatism correction.",
    tag: "Trifocal + Toric",
    desc: "Premium Trifocal Toric Intraocular Lens designed to provide multi-distance vision while addressing corneal astigmatism.",
    href: "/products/iol-lens/trifocal-toric"
  },
  {
    num: "03",
    title: "Premium Monofocal",
    sub: "Premium Monofocal Intraocular Lens designed to provide reliable optical performance for cataract surgery.",
    tag: "Monofocal Optics",
    desc: "Premium Monofocal Intraocular Lens designed to provide reliable and consistent distance vision following cataract surgery.",
    href: "/products/iol-lens/premium-monofocal"
  },
  {
    num: "04",
    title: "Monofocal Toric",
    sub: "Monofocal Toric Intraocular Lens designed for cataract surgery requiring astigmatism correction.",
    tag: "Monofocal + Toric",
    desc: "Monofocal Toric Intraocular Lens designed to provide dependable distance vision while correcting corneal astigmatism.",
    href: "/products/iol-lens/monofocal-toric"
  },
  {
    num: "05",
    title: "Monofocal",
    sub: "Monofocal Intraocular Lens designed to provide reliable optical performance for cataract surgery.",
    tag: "Monofocal Optics",
    desc: "Monofocal Intraocular Lens designed to provide clear and reliable vision at a selected distance following cataract surgery.",
    href: "/products/iol-lens/monofocal"
  }
];


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
                                <Link
                                    key={item.num}
                                    href={item.href}
                                    className={`${styles.iolPill} ${
                                        activeIndex === i
                                            ? styles.active
                                            : ""
                                    }`}
                                    onMouseEnter={() => setActiveIndex(i)}
                                    //onClick={(e) => e.preventDefault()} 
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
                                    
                                </Link>

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

                                <Link
                                    key={item.num}
                                    href={item.href}
                                    className={`${styles.stageCard} ${activeIndex === i ? styles.active : ""}`}
                                >
                                    <div>
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
                                </Link>

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