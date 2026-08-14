import Link from "next/link";
import styles from "./PatientsHeader.module.css";

const links = [

    {
        label: "Home",
        href: "/patients",
    },
    {
        label: "Vision Simulator",
        href: "/patients/vision-simulator",
    },
    {
        label: "Treatments",
        href: "/patients/treatments",
    }
    
    
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