"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./VisionSimulator.module.css";

const environments = [
    { value: "day", label: "Daylight" },
    { value: "night", label: "Night Vision" },
];

const conditions = [
    { value: "cataract", label: "Cataract" },
    { value: "CataractwithAstigmatism", label: "Cataract + Astigmatism" },
];

const lensData = {
    cataract: [
        { value: "lens0", label: "No Lens (Untreated Cataract)" },
        { value: "lens1", label: "Micropure (Monofocal Aspheric) IOL" },
        { value: "lens2", label: "Isopure (Premium Monofocal) IOL" },
        { value: "lens4", label: "Serenity (Extended Range) IOL" },
        { value: "lens3", label: "Finevision HP (Trifocal) IOL" },
    ],

    CataractwithAstigmatism: [
        { value: "lens0", label: "No Lens (Cataract + Astigmatism)" },
        { value: "lens1", label: "Pod Eye Toric IOL" },
        { value: "lens4", label: "Serenity Eye Toric IOL" },
        { value: "lens3", label: "Finevision Eye Toric IOL" },
    ],
};

export default function VisionSimulator() {
    const [environment, setEnvironment] = useState("day");
    const [condition, setCondition] = useState("cataract");
    const [lens1, setLens1] = useState("lens0");
    const [lens2, setLens2] = useState("lens1");

    const currentLenses = useMemo(() => {
        return lensData[condition] || [];
    }, [condition]);

    const getLensLabel = (lensValue) => {
        if (lensValue === "lens0") return "Uncorrected Vision";
        const lens = currentLenses.find((item) => item.value === lensValue);
        return lens?.label || "Select IOL";
    };

    const imagePath = (lens) => {
        return `/Images/${environment}/${condition}/${lens}.jpeg`;
    };

    const handleConditionChange = (value) => {
        setCondition(value);
        setLens1("lens0");
        setLens2("lens1");
    };

    return (
        <>
        <div className={styles.mobileMessage}>
    <span className={styles.mobileBadge}>Desktop Experience</span>
    <h2>Please open on a desktop or laptop</h2>
    <p>The Vision Simulator is built for larger screens so you can compare both lenses side by side.</p>
</div>
        <section className={styles.simulatorLayout}>
            {/* Ambient Lighting Accent */}
            <div className={styles.ambientGlow} />

            {/* LEFT PANEL: ALL CONTROLS & SELECTIONS */}
            <aside className={styles.sidebar}>
                <div className={styles.brandHeader}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot} />
                        VISION SIMULATOR
                    </div>
                    <h2>AVMEDITECH</h2>
                    <p>Compare pre-op vs. post-op visual outcomes interactively.</p>
                </div>

                <div className={styles.controlsStack}>
                    {/* Environment Select */}
                    <div className={styles.controlGroup}>
                        <label>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                            Lighting Environment
                        </label>
                        <div className={styles.pillGroup}>
                            {environments.map((item) => (
                                <button
                                    key={item.value}
                                    type="button"
                                    className={`${styles.pillBtn} ${environment === item.value ? styles.activePill : ""}`}
                                    onClick={() => setEnvironment(item.value)}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Eye Condition Dropdown */}
                    <div className={styles.controlGroup}>
                        <label>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
                            Eye Condition
                        </label>
                        <select
                            value={condition}
                            onChange={(e) => handleConditionChange(e.target.value)}
                            className={styles.modernSelect}
                        >
                            {conditions.map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.divider} />

                    {/* Left Frame Selector */}
                    <div className={styles.controlGroup}>
                        <label className={styles.baselineLabel}>
                            Left Viewport (Baseline)
                        </label>
                        <select
                            value={lens1}
                            onChange={(e) => setLens1(e.target.value)}
                            className={styles.modernSelect}
                        >
                            {currentLenses.map((lens) => (
                                <option key={lens.value} value={lens.value}>
                                    {lens.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Right Frame Selector */}
                    <div className={styles.controlGroup}>
                        <label className={styles.targetLabel}>
                            Right Viewport (Treatment)
                        </label>
                        <select
                            value={lens2}
                            onChange={(e) => setLens2(e.target.value)}
                            className={styles.modernSelect}
                        >
                            {currentLenses
                                .filter((lens) => lens.value !== "lens0")
                                .map((lens) => (
                                    <option key={lens.value} value={lens.value}>
                                        {lens.label}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>

                <div className={styles.disclaimer}>
                    Simulated results are for educational reference only. Individual clinical outcomes may vary.
                </div>
            </aside>

            {/* RIGHT PANEL: FULL SCREEN BOTH IMAGES SIDE-BY-SIDE */}
            <main className={styles.viewportStage}>
                {/* Viewport 1 (Baseline) */}
                <div className={styles.imageFrame}>
                    <div className={styles.imageHeader}>
                        <span className={styles.tag}>BASELINE</span>
                        <h3>{getLensLabel(lens1)}</h3>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={imagePath(lens1)}
                            alt={getLensLabel(lens1)}
                            fill
                            sizes="50vw"
                            className={styles.fullImage}
                            unoptimized
                        />
                    </div>
                </div>

                {/* VS Badge */}
                <div className={styles.vsBadge}>VS</div>

                {/* Viewport 2 (Treatment) */}
                <div className={`${styles.imageFrame} ${styles.highlightFrame}`}>
                    <div className={styles.imageHeader}>
                        <span className={`${styles.tag} ${styles.accentTag}`}>TARGET IOL</span>
                        <h3>{getLensLabel(lens2)}</h3>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={imagePath(lens2)}
                            alt={getLensLabel(lens2)}
                            fill
                            sizes="50vw"
                            className={styles.fullImage}
                            unoptimized
                        />
                    </div>
                </div>
            </main>
        </section>
        </>
    );
}