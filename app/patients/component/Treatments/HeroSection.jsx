import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroInner}>

                    {/* Content */}
                    <div className={styles.heroContent}>

                        <span className={styles.label}>
                            <span className={styles.labelDot} />
                            Ophthalmic Treatments
                        </span>

                        <h1 className={styles.headline}>
                            Treatment options,
                            <br />
                            brought into <em>focus.</em>
                        </h1>

                        <p>
                            Explore treatment options designed to address
                            common eye conditions and help you make informed
                            decisions about your eye care.
                        </p>

                        <div className={styles.buttons}>

                            <Link
                                href="#treatments"
                                className={styles.primaryBtn}
                            >
                                <span>Explore Treatments</span>
                                <span className={styles.arrow}>→</span>
                            </Link>

                            <Link
                                href="/contact"
                                className={styles.secondaryBtn}
                            >
                                Request a Consultation
                            </Link>

                        </div>

                    </div>

                    {/* Visual */}
                    <div className={styles.heroVisual}>

                        <div className={styles.visualStage}>

                            <span className={styles.ringLabel}>⌀ 20.0D</span>

                            <div className={styles.focusRing} aria-hidden="true" />

                            <div className={styles.apertureFrame}>

                                <img
                                    src="/images/patient/treatment-hero.webp"
                                    alt="Eye care treatment"
                                    className={styles.visualImage}
                                />

                                <div className={styles.blades} aria-hidden="true">
                                    {Array.from({ length: 8 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className={styles.blade}
                                            style={{ "--i": i }}
                                        />
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}