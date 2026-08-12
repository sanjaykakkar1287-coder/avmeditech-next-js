import Link from "next/link";
import styles from "./PatientsHeader.module.css";

const links = [
    {
        label: "AVSimulator",
        href: "/patients/Simulator",
    },
    {
        label: "Treatments",
        href: "/patient/treatments",
    },
    {
        label: "Procedures",
        href: "/patient/procedures",
    },
    {
        label: "FAQs",
        href: "/patient/faqs",
    },
];

export default function PatientNav() {
    return (
        <nav className={styles.patientNav}>
            <div className={styles.container}>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={styles.link}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}