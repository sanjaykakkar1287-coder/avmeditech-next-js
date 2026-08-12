"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Welcome.module.css";

const words = [
    "Healthcare Professionals",
    "Eye Surgeons",
    "Ophthalmologists",
    "Vision Experts",
    "Medical Partners",
];

export default function Welcome() {
    const router = useRouter();

    const [wordIndex, setWordIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        document.body.style.overflow = isVisible ? "hidden" : "auto";

        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => {
            clearInterval(interval);
            document.body.style.overflow = "auto";
        };
    }, [isVisible]);

    const handleProfessional = () => {
        document.body.style.overflow = "auto";
        setIsVisible(false);
        router.push("/patients");
    };

    const handleVisitor = () => {
        document.body.style.overflow = "auto";
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>

                <div className={styles.logo}>
                    <Image
                        src="/images/logo/LOGO2.PNG"
                        alt="AV Meditech Logo"
                        width={180}
                        height={80}
                    />
                </div>

                <h1 className={styles.title}>
                    Welcome to <br />
                    <span>AV Meditech</span>
                </h1>

                <div className={styles.rotateBox}>
                    <p className={styles.rotateLabel}>
                        Designed for
                    </p>

                    <h3
                        key={wordIndex}
                        className={styles.rotateWord}
                    >
                        {words[wordIndex]}
                    </h3>
                </div>

                <p className={styles.description}>
                    Delivering world-class ophthalmic solutions
                    for surgeons, hospitals and vision experts.
                    Please select your preferred experience.
                </p>

                <div className={styles.buttons}>

                    <button
    type="button"
    className={styles.primaryBtn}
    onClick={() => {
        window.location.href = "/patients";
    }}
>
    I'm Patient
    <span>→</span>
</button>

                    <button
                        type="button"
                        onClick={handleVisitor}
                        className={styles.secondaryBtn}
                    >
                        Continue as Visitor
                        <span>→</span>
                    </button>

                </div>

            </div>
        </div>
    );
}