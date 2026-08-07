import Link from "next/link";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>

        {/* Left Content */}
        <div className={styles.content}>

          <span className={styles.badge}>
            ABOUT AV MEDITECH
          </span>

          <h2 className={styles.heading}>
            Delivering Excellence in{" "}
            <span className={styles.highlight}>
              Ophthalmic Care
            </span>
          </h2>

          <p className={styles.description}>
            AV Meditech is the exclusive importer and distributor of
            cutting-edge ophthalmic surgical products in India. We
            collaborate with globally trusted brands to provide
            innovative, high-quality solutions that help ophthalmic
            surgeons perform procedures with confidence, precision,
            and efficiency.
          </p>

          <p className={styles.description}>
            Our commitment to quality goes beyond products—we strive to
            support healthcare professionals with advanced technologies,
            reliable service, and comprehensive ophthalmic solutions that
            contribute to better surgical outcomes and improved patient
            care across the country.
          </p>

          <Link
            href="/about"
            className={styles.button}
          >
            Read More →
          </Link>

        </div>

        {/* Right Side */}
        <div className={styles.infoCard}>

          <div className={styles.card}>
            <h3>Exclusive Distribution</h3>
            <p>
              Bringing internationally recognized ophthalmic products
              to healthcare professionals across India.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Trusted Quality</h3>
            <p>
              Carefully selected premium products designed to deliver
              precision, safety, and reliability in every procedure.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Innovation</h3>
            <p>
              Supporting surgeons with advanced ophthalmic technologies
              that improve efficiency and patient outcomes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}