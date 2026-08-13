"use client";

import Link from "next/link";
import styles from "./HeroButtons.module.css";

const HeroButtons = ({ text }) => {
    return (
        <div className={styles.heroButtons}>

    <button
        type="button"
        className={styles.heroPrimaryBtn}
        data-bs-toggle="modal"
        data-bs-target="#Modal"
    >
        <span>{text || "Request a Call Back"}</span>

        <span className={styles.heroArrow}>
            →
        </span>
    </button>

    <button
        type="button"
        className={styles.heroSecondaryBtn}
        data-bs-toggle="modal"
        data-bs-target="#Modal"
    >
        Contact
    </button>

</div>
    );
};

export default HeroButtons;