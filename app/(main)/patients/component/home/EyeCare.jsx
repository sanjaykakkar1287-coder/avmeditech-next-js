import styles from "./EyeCare.module.css";

const journeySteps = [
    {
        number: "01",
        title: "Consultation",
        description:
            "Share your concerns, symptoms, and vision needs with our eye-care team.",
    },
    {
        number: "02",
        title: "Diagnosis",
        description:
            "Get the right evaluation to understand your eye condition and vision needs.",
    },
    {
        number: "03",
        title: "Treatment Plan",
        description:
            "Understand your treatment options and choose the care approach suited to you.",
    },
    {
        number: "04",
        title: "Follow-up",
        description:
            "Continue your care with guidance and follow-up to monitor your progress.",
    },
];

export default function EyeCareJourney() {
    return (
        <section className={styles.journeySection}>
            <div className="container">

                <div className={styles.heading}>
                    <span className={styles.label}>
                        YOUR EYE CARE JOURNEY
                    </span>

                    <h2>
                        Simple Steps. Clear Guidance.
                    </h2>

                    <p>
                        From your first consultation to follow-up care,
                        we guide you through every step of your eye care journey.
                    </p>
                </div>

                <div className={styles.journeyGrid}>

                    {journeySteps.map((step, index) => (
                        <div
                            className={styles.step}
                            key={step.number}
                        >

                            <div className={styles.stepTop}>

                                <span className={styles.number}>
                                    {step.number}
                                </span>

                                {index !== journeySteps.length - 1 && (
                                    <span className={styles.line}></span>
                                )}

                            </div>

                            <div className={styles.stepContent}>

                                <h3>{step.title}</h3>

                                <p>{step.description}</p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}