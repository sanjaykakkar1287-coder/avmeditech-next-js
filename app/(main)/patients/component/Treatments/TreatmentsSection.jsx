import Link from "next/link";
import styles from "./TreatmentsSection.module.css";

import { treatments } from "./treatmentData";

export default function TreatmentsSection() {
    return (
        <section
            id="treatments"
            className={styles.treatments}
        >
            <div className="container">

                <div className={styles.header}>

                    <span className={styles.label}>
                        <span className={styles.labelDot} />
                        What We Treat
                    </span>

                    <h2>
                        Conditions we help patients
                        <br />
                        see clearly again
                    </h2>

                    <p>
                        Every treatment below is backed by a consultation to
                        confirm it's the right fit for your eyes — not a
                        one-size-fits-all recommendation.
                    </p>

                </div>

                <div className={styles.grid}>

                    {treatments.map((treatment) => (

                        <Link
                            key={treatment.id}
                            href={`/patients/treatments/${treatment.slug}`}
                            className={styles.card}
                        >

                            <h3>
                                {treatment.name}
                            </h3>

                            <p>
                                {treatment.shortDescription}
                            </p>

                            <span className={styles.cardLink}>
                                Learn more
                                <span className={styles.arrow}>
                                    →
                                </span>
                            </span>

                        </Link>

                    ))}

                </div>

            </div>
        </section>
    );
}