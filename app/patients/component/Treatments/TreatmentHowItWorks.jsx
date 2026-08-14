"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TreatmentHowItWorks.module.css";

const STEP_DURATION = 5000;

const TREATMENT_STEPS = [
    {
        number: "01",
        stageName: "Before Treatment",
        title: "Prepare & Examination",
        description:
            "A comprehensive optical assessment maps your ocular parameters. Mild numbing drops ensure complete comfort before anything begins.",
        duration: "Approx. 30 min",
        experience: ["Painless measurements & scans", "Numbing eye drops applied", "No general anesthesia"],
        icon: (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="3" />
                <path d="M3 12h3m12 0h3M12 3v3m0 12v3" />
                <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
            </svg>
        ),
    },
    {
        number: "02",
        stageName: "During Procedure",
        title: "Precision Implantation",
        description:
            "Through micro-incisions, your clouded natural lens is gently replaced with your selected premium Intraocular Lens.",
        duration: "Approx. 15–20 min",
        experience: ["Comfortable surgical suite", "Gentle irrigation, soft light", "Stitchless micro-incisions"],
        icon: (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="8" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
        ),
    },
    {
        number: "03",
        stageName: "Inside the Eye",
        title: "Optic Alignment & Bonding",
        description:
            "The flexible IOL self-centers within the lens capsule, focusing incoming light directly onto the retina for restored clarity.",
        duration: "Continuous, long-term",
        experience: ["Self-centers within minutes", "UV / blue-light filtration", "No maintenance required"],
        icon: (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
    },
    {
        number: "04",
        stageName: "After Treatment",
        title: "Rest & Visual Recovery",
        description:
            "After a brief rest in recovery, you're cleared to go home the same day. Most patients notice improvement within 24–48 hours.",
        duration: "1–2 days initial rest",
        experience: ["Same-day discharge", "Guided eye-drop schedule", "Daily routine resumes fast"],
        icon: (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
    },
];

const RADIUS = 19;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function TreatmentHowItWorks() {
    const [active, setActive] = useState(0);
    const [playing, setPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const rafRef = useRef(null);
    const startRef = useRef(null);

    useEffect(() => {
        if (!playing) {
            cancelAnimationFrame(rafRef.current);
            return undefined;
        }

        startRef.current = performance.now() - progress * STEP_DURATION;

        const tick = (now) => {
            const elapsed = now - startRef.current;
            const pct = Math.min(elapsed / STEP_DURATION, 1);
            setProgress(pct);

            if (pct >= 1) {
                setActive((p) => (p + 1) % TREATMENT_STEPS.length);
                setProgress(0);
                startRef.current = now;
            }
            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playing, active]);

    const goTo = (index) => {
        setActive(index);
        setProgress(0);
    };

    const step = TREATMENT_STEPS[active];

    return (
        <section id="treatment-guide" className={styles.section}>
            <div className="container">

                <div className={styles.header}>
                    <span className={styles.label}>
                        <span className={styles.dot} />
                        Treatment Guide
                    </span>
                    <h2>How your treatment works</h2>
                    <p>A guided walkthrough of your journey — from first exam to full recovery.</p>
                </div>

                <div className={styles.engine}>

                    <nav className={styles.rail} aria-label="Treatment steps">

                        <button
                            type="button"
                            className={styles.playBtn}
                            onClick={() => setPlaying((p) => !p)}
                            aria-label={playing ? "Pause autoplay" : "Resume autoplay"}
                        >
                            {playing ? (
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
                            ) : (
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l12 7-12 7V5z" /></svg>
                            )}
                        </button>

                        {TREATMENT_STEPS.map((s, idx) => {
                            const isActive = idx === active;
                            const isDone = idx < active;
                            const offset = isActive
                                ? CIRCUMFERENCE * (1 - progress)
                                : isDone
                                ? 0
                                : CIRCUMFERENCE;

                            return (
                                <button
                                    key={s.number}
                                    type="button"
                                    className={`${styles.node} ${isActive ? styles.nodeActive : ""}`}
                                    onClick={() => goTo(idx)}
                                    aria-current={isActive}
                                >
                                    <span className={styles.ringWrap}>
                                        <svg width="46" height="46" viewBox="0 0 46 46">
                                            <circle cx="23" cy="23" r={RADIUS} className={styles.ringTrack} />
                                            <circle
                                                cx="23" cy="23" r={RADIUS}
                                                className={styles.ringFill}
                                                style={{
                                                    strokeDasharray: CIRCUMFERENCE,
                                                    strokeDashoffset: offset,
                                                }}
                                            />
                                        </svg>
                                        <span className={styles.nodeNumber}>
                                            {isDone ? "✓" : s.number}
                                        </span>
                                    </span>
                                    <span className={styles.nodeLabel}>{s.stageName}</span>
                                </button>
                            );
                        })}
                    </nav>

                    <div className={styles.stagePanel} key={active}>

                        <div className={styles.medallion}>
                            <span className={styles.medallionRing} />
                            <span className={styles.medallionIcon}>{step.icon}</span>
                        </div>

                        <div className={styles.stageBody}>
                            <span className={styles.stageTag}>{step.stageName} · {step.duration}</span>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>

                            <div className={styles.chipRow}>
                                {step.experience.map((point, i) => (
                                    <span className={styles.chip} key={i}>
                                        <svg viewBox="0 0 16 16" fill="none">
                                            <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {point}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.stageArrows}>
                            <button
                                type="button"
                                className={styles.arrowBtn}
                                onClick={() => goTo((active - 1 + TREATMENT_STEPS.length) % TREATMENT_STEPS.length)}
                                aria-label="Previous step"
                            >
                                ←
                            </button>
                            <button
                                type="button"
                                className={styles.arrowBtn}
                                onClick={() => goTo((active + 1) % TREATMENT_STEPS.length)}
                                aria-label="Next step"
                            >
                                →
                            </button>
                        </div>

                    </div>

                </div>

                <div className={styles.ctaBanner}>
                    <span className={styles.ctaRing} aria-hidden="true" />

                    <div className={styles.ctaText}>
                        <span className={styles.ctaLabel}>
                            <span className={styles.dot} />
                            Ready when you are
                        </span>
                        <h3>See if this treatment is right for you</h3>
                        <p>Book a consultation and get a clear, personal answer — not a generic recommendation.</p>
                    </div>

                    <a href="/contact" className={styles.ctaButton}>
                        <span>Request a Consultation</span>
                        <span className={styles.ctaArrow}>→</span>
                    </a>
                </div>

            </div>
        </section>
    );
}