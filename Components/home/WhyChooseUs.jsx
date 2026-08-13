import React from "react";
import styles from "./WhyChooseUs.module.css";
import HeroButtons from "@/Components/buttons/HeroButtons";

const features = [
  {
    id: "01",
    badge: "PRECISION",
    title: "High-Quality Optics",
    description:
      "Engineered with advanced materials for crystal-clear, distortion-free vision at every distance.",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "02",
    badge: "MOST POPULAR",
    title: "Enhanced Visual Clarity",
    description:
      "Precision-designed optics engineered to drastically minimize post-surgery glare, halos, and dysphotopsia.",
    featured: true,
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "03",
    badge: "TRUSTED",
    title: "Surgeon Preferred",
    description:
      "Consistently recommended by India's top ophthalmologists for superior, reliable patient outcomes.",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    // <section className={styles.section}>
    //   {/* Background Lighting */}
    //   <div className={styles.glowBg}></div>

    //   <div className={styles.container}>
    //     {/* Centered Top Header */}
    //     <div className={styles.header}>
    //       <div className={styles.badgePill}>
    //         <span className={styles.badgeDot}></span>
    //         WHY AV MEDITECH
    //       </div>

    //       <h2 className={styles.heading}>
    //         Why Choose AV Meditech for the{" "}
    //         <span className={styles.highlight}>
    //           Best Cataract IOL in India?
    //         </span>
    //       </h2>

    //       <p className={styles.description}>
    //         If you're searching for the best IOL for cataract surgery, AV Meditech provides precision-engineered solutions tailored for exceptional vision restoration and long-term care.
    //       </p>
    //     </div>

    //     {/* 3-Card Feature Grid */}
    //     <div className={styles.grid}>
    //       {features.map((item) => (
    //         <div
    //           key={item.id}
    //           className={`${styles.card} ${
    //             item.featured ? styles.cardFeatured : ""
    //           }`}
    //         >
    //           <div className={styles.cardBadge}>{item.badge}</div>
              
    //           <div className={styles.iconWrapper}>
    //             {item.icon}
    //           </div>

    //           <h3 className={styles.cardTitle}>{item.title}</h3>
    //           <p className={styles.cardText}>{item.description}</p>

    //           <div className={styles.cardFooter}>
    //             <span className={styles.cardNumber}>Pillar {item.id}</span>
    //             <span className={styles.checkIcon}>
    //               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    //                 <polyline points="20 6 9 17 4 12"></polyline>
    //               </svg>
    //             </span>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
<>
        {/* Bottom CTA Bar */}
        <div className={styles.bottomCta}>
          <div className={styles.ctaText}>
            <strong>Ready to experience ophthalmic excellence?</strong>
            <span>Explore our range of premium cataract lenses today.</span>
          </div>
          <div className={styles.ctaButtons}>
            <HeroButtons />
          </div>
        </div>
      </>
      //</div>
      
    //</section>
  );
}