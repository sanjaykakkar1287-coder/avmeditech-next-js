import Link from "next/link";
import styles from "./TreatmentsDetails.module.css";

export default function TreatmentDetails({ treatment }) {
    return (
        <main className={styles.page}>

            <div className="container">

                {/* HERO */}

                <section className={styles.hero}>

                    <div className={styles.heroContent}>

                        <span className={styles.category}>
                            <span className={styles.dot} />
                            {treatment.category}
                        </span>

                        <h1>{treatment.name}</h1>

                        <p>{treatment.description}</p>

                        <Link href="/contact" className={styles.button}>
                            <span>Request a Consultation</span>
                            <span className={styles.arrow}>→</span>
                        </Link>

                    </div>

                    <div className={styles.heroImage}>
                        <img src={treatment.image} alt={treatment.name} />
                    </div>

                </section>


                {/* OVERVIEW */}

                <section className={styles.section}>

                    <span className={styles.label}>
                        <span className={styles.dot} />
                        Understanding the Treatment
                    </span>

                    <h2>What is {treatment.name}?</h2>

                    <p className={styles.text}>{treatment.description}</p>

                </section>


                {/* BENEFITS */}

                <section className={styles.section}>

                    <span className={styles.label}>
                        <span className={styles.dot} />
                        Key Information
                    </span>

                    <h2>What you should know</h2>

                    <div className={styles.grid}>

                        {treatment.benefits?.map((benefit, index) => (
                            <div className={styles.card} key={index}>

                                <span className={styles.check}>
                                    <svg viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M3.5 8.5l3 3 6-7"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>

                                <p>{benefit}</p>

                            </div>
                        ))}

                    </div>

                </section>


                {/* TREATMENT + RECOVERY — connected timeline */}

                <section className={styles.timeline}>

                    <div className={styles.step}>

                        <div className={styles.marker}>
                            <span className={styles.markerDot} />
                            <span className={styles.markerLine} />
                        </div>

                        <div className={styles.stepContent}>
                            <span className={styles.label}>
                                <span className={styles.dot} />
                                01 · Treatment
                            </span>

                            <h2>Understanding your options</h2>
                            <p>{treatment.treatment}</p>
                        </div>

                    </div>

                    <div className={styles.step}>

                        <div className={styles.marker}>
                            <span className={styles.markerDot} />
                        </div>

                        <div className={styles.stepContent}>
                            <span className={styles.label}>
                                <span className={styles.dot} />
                                02 · Recovery
                            </span>

                            <h2>What to expect</h2>
                            <p>{treatment.recovery}</p>
                        </div>

                    </div>

                </section>


                {/* CTA */}

                <section className={styles.cta}>

                    <h2>Have questions about this treatment?</h2>

                    <p>
                        Speak with our eye-care team to understand whether
                        this treatment may be appropriate for your
                        individual needs.
                    </p>

                    <Link href="/contact" className={styles.ctaButton}>
                        <span>Request a Consultation</span>
                        <span className={styles.arrow}>→</span>
                    </Link>

                </section>

            </div>

        </main>
    );
}