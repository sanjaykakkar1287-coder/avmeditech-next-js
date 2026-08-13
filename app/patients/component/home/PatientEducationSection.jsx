"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./PatientEducationSection.module.css";
import HeroButtons from "../../../../Components/buttons/HeroButtons";
import { AlignJustifyIcon } from "lucide-react";

const AUTO_ADVANCE_MS = 6500;

const questions = [
    {
        title: "What symptoms should I look out for?",
        answer:
            "Blurred or hazy vision, increased sensitivity to light and glare, difficulty seeing at night, or noticing halos around lights can all be early signs worth attention. Sudden changes — flashes, floaters, or a shadow across your field of vision — should never be ignored and warrant prompt evaluation rather than a wait-and-see approach.",
    },
    {
        title: "When should I see an eye specialist?",
        answer:
            "If everyday tasks like reading, driving at night, or recognizing faces start to feel harder than they used to, that gradual shift is worth a professional look — not just an updated prescription. Routine screenings matter too: many conditions progress silently long before symptoms become obvious.",
    },
    {
        title: "What treatments are available?",
        answer:
            "Depending on the condition, options range from monitoring and corrective lenses to surgical procedures like cataract extraction with IOL implantation, refractive surgery, or targeted glaucoma management. A consultation matches the approach to your eyes specifically — there's rarely a single right answer for everyone.",
    },
    {
        title: "What happens after treatment?",
        answer:
            "Recovery timelines vary by procedure, but most treatments involve a short adjustment period, scheduled follow-up visits to confirm healing is on track, and simple guidance on activity or eye care during that window. Continued monitoring afterward helps catch any new changes early, long after the initial treatment is behind you.",
    },
];

export default function PatientEducationSection() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const [cycle, setCycle] = useState(0);

    useEffect(() => {
        if (paused) return undefined;

        const timer = setTimeout(() => {
            setActive((p) => (p + 1) % questions.length);
            setCycle((c) => c + 1);
        }, AUTO_ADVANCE_MS);

        return () => clearTimeout(timer);
    }, [active, paused, cycle]);

    const goTo = (index) => {
        if (index === active) return;
        setActive(index);
        setCycle((c) => c + 1);
    };

    const next = () => goTo((active + 1) % questions.length);
    const prev = () => goTo((active - 1 + questions.length) % questions.length);

    const titleWords = useMemo(
        () => questions[active].title.split(" "),
        [active]
    );

    const pad = (n) => String(n).padStart(2, "0");

    return (
        <>
        <section className={styles.section}>
            <div className="container">

                <div className={styles.header}>
                    <span className={styles.label}>
                        <span className={styles.dot} />
                        Patient Education
                    </span>

                    <h2>
                        Your vision. Your questions.
                        <br />
                        Your care.
                    </h2>

                    <p>
                        Understanding your eye health is the first step
                        toward making confident decisions about your care.
                        Explore answers to common questions about symptoms,
                        treatment, and what to expect throughout your
                        eye-care journey.
                    </p>
                </div>

                <div
                    className={styles.console}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    style={{ "--hue": active * 16 }}
                >
                    <span className={styles.consoleRing} aria-hidden="true" />
                    <span className={styles.aurora} aria-hidden="true" />
                    <span className={styles.aurora2} aria-hidden="true" />

                    <div className={styles.nav} role="tablist" style={{ "--count": questions.length }}>
                        {questions.map((q, index) => (
                            <button
                                key={q.title}
                                role="tab"
                                aria-selected={index === active}
                                className={`${styles.navPill} ${index === active ? styles.navPillActive : ""}`}
                                onClick={() => goTo(index)}
                            >
                                <span className={styles.navIndex}>{pad(index + 1)}</span>
                                <span className={styles.navLabel}>
                                    {q.title.split(" ").slice(0, 3).join(" ")}…
                                </span>
                            </button>
                        ))}

                        <span
                            className={styles.navIndicator}
                            style={{ "--pos": active }}
                        />
                    </div>

                    <div className={styles.stage}>
                        <span className={styles.ghostNumber} key={`ghost-${active}`}>
                            {pad(active + 1)}
                        </span>

                        <div className={styles.stageInner}>
                            <h3 className={styles.stageTitle} key={`title-${active}`}>
                                {titleWords.map((word, i) => (
                                    <span
                                        key={i}
                                        className={styles.word}
                                        style={{ "--wi": i }}
                                    >
                                        {word}&nbsp;
                                    </span>
                                ))}
                            </h3>

                            <p key={`answer-${active}`} className={styles.stageAnswer}>
                                {questions[active].answer}
                            </p>
                        </div>
                    </div>

                    <div className={styles.controls}>
                        <button
                            className={styles.arrowBtn}
                            onClick={prev}
                            aria-label="Previous question"
                        >
                            ←
                        </button>

                        <div className={styles.progressTrack}>
                            <span
                                key={cycle}
                                className={styles.progressFill}
                                style={{
                                    animationDuration: `${AUTO_ADVANCE_MS}ms`,
                                    animationPlayState: paused ? "paused" : "running",
                                }}
                            />
                        </div>

                        <button
                            className={styles.arrowBtn}
                            onClick={next}
                            aria-label="Next question"
                        >
                            →
                        </button>
                    </div>
                    <HeroButtons text="Talk With Experts" />
                </div>
 
            </div>
           
        </section>



        </>



    );
}