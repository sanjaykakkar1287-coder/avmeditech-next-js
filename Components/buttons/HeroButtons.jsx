"use client";

import Link from "next/link";
import styles from "./HeroButtons.module.css";

const HeroButtons = ({ text }) => {
    return (
        <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.heroPrimaryBtn}>
                <span>{text || "Request a Call Back"}</span>

                <span className={styles.heroArrow}>
                    →
                </span>
            </Link>

            <Link href="/contact" className={styles.heroSecondaryBtn}>
                Contact Us
            </Link>
        </div>
    );
};

export default HeroButtons;