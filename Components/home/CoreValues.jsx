import React from "react";
import styles from "./CoreValues.module.css";

const valuesData = [
  {
    id: 1,
    title: "Cutting-Edge Technology",
    text: "We provide innovative solutions that elevate the standards of cataract surgery and support optimal surgical performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5V8H7v1z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Unparalleled Reliability",
    text: "Our products, like the best viscoelastic in India, ensure chamber stability and protect ocular tissues during surgery.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Surgical Excellence",
    text: "Our blades for cataract surgery are engineered for micron-level precision and smooth incisions, ensuring superior results.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
      </svg>
    ),
  },
];

export default function CoreValues() {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.glowPrimary}></div>
      <div className={styles.glowSecondary}></div>

      <div className={styles.valuesContainer}>
        <div className={styles.valuesHeader}>
          <span className={styles.categoryBadge}>
            <span className={styles.badgeDot}></span>
            AV MEDITECH SURGICAL EXCELLENCE
          </span>
          <h2 className={styles.valuesHeadline}>
            Empowering Surgeons Through Our{" "}
            <span className={styles.gradientHighlight}>Core Principles</span>
          </h2>
          <p className={styles.valuesSubheadline}>
            At AV Meditech, we combine cutting-edge technology, reliability, and surgical
            excellence to empower ophthalmologists and deliver exceptional patient care.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {valuesData.map((item, index) => (
            <div
              key={item.id}
              className={styles.valueCard}
              style={{ "--delay": `${index * 100}ms` }}
            >
              <div className={styles.cardNum}>{`0${item.id}`}</div>
              <div className={styles.valueCardIcon}>{item.icon}</div>
              <h3 className={styles.valueCardTitle}>{item.title}</h3>
              <p className={styles.valueCardText}>{item.text}</p>
              <div className={styles.cardBottomLine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}