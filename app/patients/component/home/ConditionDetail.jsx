import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { patientConditions } from "./patientdata";
import styles from "./ConditionDetail.module.css";

export default function ConditionDetail({ conditionSlug }) {

    const condition = patientConditions.find(
        (item) => item.slug === conditionSlug
    );

    if (!condition) {
        notFound();
    }

    return (
        <main className={styles.conditionPage}>

            <div className="container">

                {/* =========================
                    HERO
                ========================= */}

                <section className={styles.hero}>

                    <div className={styles.heroContent}>

                        <span className={styles.category}>
                            {condition.category}
                        </span>

                        <h1>
                            {condition.name}
                        </h1>

                        <p>
                            {condition.description}
                        </p>

                    </div>


                    <div className={styles.heroImage}>

                        <Image
                            src={condition.image}
                            alt={condition.name}
                            width={500}
                            height={500}
                        />

                    </div>

                </section>


                {/* =========================
                    SYMPTOMS
                ========================= */}

                <section className={styles.contentSection}>

                    <span className={styles.sectionLabel}>
                        KNOW THE SIGNS
                    </span>

                    <h2>
                        Common Symptoms
                    </h2>


                    <div className={styles.symptomsGrid}>

                        {condition.symptoms?.map(
                            (symptom, index) => (

                                <div
                                    className={styles.symptomCard}
                                    key={symptom}
                                >

                                    <span>
                                        ✓
                                    </span>

                                    <p>
                                        {symptom}
                                    </p>

                                </div>

                            )
                        )}

                    </div>

                </section>


                {/* =========================
                    TREATMENT
                ========================= */}

                <section className={styles.treatmentSection}>

                    <span className={styles.sectionLabel}>
                        TREATMENT
                    </span>

                    <h2>
                        Understanding Your Options
                    </h2>

                    <p>
                        {condition.treatment}
                    </p>
<Link
        href={`/products`}
        className={styles.productButton}
    >
        <span>
            Explore Products
        </span>

        <span className={styles.productArrow}>
            →
        </span>
    </Link>
                </section>

            </div>

        </main>
    );
}