"use client";

import React, { useState } from "react";
import styles from "./FaqSection.module.css";
import HeroButtons from "@/Components/buttons/HeroButtons";

const FAQ_DATA = [
  {
    id: "Q1",
    num: "Q1",
    category: "iol",
    colorClass: "sky",
    question: "What is the best cataract IOL available at AV Meditech?",
    answer:
      "AV Meditech offers a range of premium IOLs, including monofocal, toric, and trifocal options, ensuring the best vision outcomes for cataract surgery patients.",
  },
  {
    id: "Q2",
    num: "Q2",
    category: "iol",
    colorClass: "sky",
    question: "What makes the best monofocal IOL at AV Meditech?",
    answer:
      "Our best monofocal IOLs are designed to provide clear vision at one distance, ideal for patients who require correction for nearsightedness or farsightedness.",
  },
  {
    id: "Q3",
    num: "Q3",
    category: "iol",
    colorClass: "sky",
    question: "Why choose the best toric IOL from AV Meditech?",
    answer:
      "AV Meditech’s toric IOLs are the perfect solution for cataract patients with astigmatism, providing improved clarity and sharper vision by correcting both cataracts and astigmatism.",
  },
  {
    id: "Q4",
    num: "Q4",
    category: "iol",
    colorClass: "sky",
    question: "What is the best trifocal IOL available at AV Meditech?",
    answer:
      "Our best trifocal IOLs offer enhanced vision at multiple distances—near, intermediate, and far—allowing patients to enjoy a fuller, more versatile range of sight without glasses.",
  },
  {
    id: "Q5",
    num: "Q5",
    category: "iol",
    colorClass: "sky",
    question: "What is the best advanced monofocal IOL at AV Meditech?",
    answer:
      "AV Meditech’s advanced monofocal IOLs provide superior clarity and visual comfort, optimized for patients seeking a high-quality monofocal solution for cataract surgery.",
  },
  {
    id: "Q6",
    num: "Q6",
    category: "equipment",
    colorClass: "indigo",
    question: "What makes the best phaco machine at AV Meditech?",
    answer:
      "AV Meditech’s best phaco machines combine cutting-edge technology with precision to ensure smooth, efficient cataract surgery with minimal complications and faster recovery.",
  },
  {
    id: "Q7",
    num: "Q7",
    category: "equipment",
    colorClass: "indigo",
    question: "Which is the best viscoelastic solution for cataract surgery from AV Meditech?",
    answer:
      "Our best viscoelastic solutions are specially formulated to maintain anterior chamber stability and protect delicate ocular tissues during cataract surgery.",
  },
  {
    id: "Q8",
    num: "Q8",
    category: "equipment",
    colorClass: "indigo",
    question: "Why are AV Meditech’s blades the best for cataract surgery?",
    answer:
      "AV Meditech’s cataract surgery blades are crafted with precision, ensuring smooth incisions and reducing trauma to the eye, leading to quicker recovery and optimal surgical outcomes.",
  },
  {
    id: "Q9",
    num: "Q9",
    category: "guidance",
    colorClass: "emerald",
    question: "How do I choose the best IOL for cataract surgery in India?",
    answer:
      "Choosing the best IOL depends on lifestyle, budget, and vision needs. If you want to reduce dependence on glasses, trifocal or multifocal IOLs are ideal. If you prefer affordability with sharp distance vision, monofocal IOLs are a great option. Consult your ophthalmologist to determine the best lens for you.",
  },
  {
    id: "Q10",
    num: "Q10",
    category: "guidance",
    colorClass: "emerald",
    question: "Are premium IOLs better than standard IOLs for cataract surgery?",
    answer:
      "Yes, premium IOLs like multifocal, trifocal, and toric lenses offer enhanced visual clarity, allowing better near, intermediate, and distance vision with minimal reliance on glasses. Standard monofocal IOLs provide excellent distance vision but may require reading glasses.",
  },
  {
    id: "Q11",
    num: "Q11",
    category: "guidance",
    colorClass: "emerald",
    question: "Why should I choose AV Meditech for cataract IOLs in India?",
    answer:
      "AV Meditech provides high-quality intraocular lenses that ensure superior optical performance, long-term durability, and clear post-surgical vision. Our lenses are trusted by leading ophthalmologists across India for delivering excellent patient outcomes.",
  },
];

export default function FaqSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaqs, setOpenFaqs] = useState({});

  // Toggle single accordion item
  const toggleFAQ = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter FAQs based on Search & Selected Category
  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq-section" className={styles.section}>
      <div className={styles.container}>
        
        {/* SECTION HEADER */}
        <div className={styles.header}>
          <div>
            <div className={styles.tagPill}>
              <span className={styles.pulseDot}></span>
              HELP &amp; INFORMATION
            </div>
            <h2 className={styles.title}>
              Frequently Asked <span className={styles.gradientHighlight}>Questions</span>
            </h2>
          </div>
          <p className={styles.headerDesc}>
            Find complete details on AV Meditech's intraocular lenses, phaco systems, surgical solutions, and choosing the right lens for cataract surgery in India.
          </p>
        </div>

        {/* SEARCH & CATEGORY FILTER BAR */}
        <div className={styles.controlsBar}>
          
          {/* Live Search Box */}
          <div className={styles.searchBox}>
            <input
              type="text"
              id="faq-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions or keywords..."
              className={styles.searchInput}
            />
            <svg
              className={styles.searchIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Filter Pills */}
          <div className={styles.filterPills}>
            <button
              onClick={() => setActiveCategory("all")}
              className={`${styles.tabPill} ${
                activeCategory === "all" ? styles.tabPillActive : ""
              }`}
            >
              All (11)
            </button>
            <button
              onClick={() => setActiveCategory("iol")}
              className={`${styles.tabPill} ${
                activeCategory === "iol" ? styles.tabPillActive : ""
              }`}
            >
              IOLs &amp; Lenses
            </button>
            <button
              onClick={() => setActiveCategory("equipment")}
              className={`${styles.tabPill} ${
                activeCategory === "equipment" ? styles.tabPillActive : ""
              }`}
            >
              Phaco &amp; Blades
            </button>
            <button
              onClick={() => setActiveCategory("guidance")}
              className={`${styles.tabPill} ${
                activeCategory === "guidance" ? styles.tabPillActive : ""
              }`}
            >
              Patient Guide
            </button>
          </div>

        </div>

        {/* MAIN LAYOUT: Left Side Info Card + Right Side Accordions */}
        <div className={styles.mainGrid}>
          
          {/* LEFT COLUMN: Quick Help & Surgical Insight Box */}
          <div className={styles.sidebarCol}>
            <div className={styles.supportCard}>
              <div className={styles.supportGlow}></div>

              <div className={styles.questionIconBadge}>
                ?
              </div>
              <h3 className={styles.supportTitle}>Need Expert Clinical Guidance?</h3>
              <p className={styles.supportText}>
                Our ophthalmic product specialists are available to guide surgeons, clinics, and patients on selecting the best lens options and surgical supplies across India.
              </p>

             
                <HeroButtons />
                
            </div>

            {/* Quick Stats Box */}
            <div className={styles.statsCard}>
              <h4 className={styles.statsTitle}>Trusted Performance</h4>
              <div className={styles.statsGrid}>
                <div>
                  <span className={styles.statValSky}>100%</span>
                  <span className={styles.statLabel}>Biocompatible Materials</span>
                </div>
                <div>
                  <span className={styles.statValBlue}>Pan-India</span>
                  <span className={styles.statLabel}>Surgeon Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 11 Accordion FAQ Items */}
          <div className={styles.faqCol} id="faq-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = !!openFaqs[faq.id];

                const badgeStyle =
                  faq.colorClass === "sky"
                    ? styles.badgeSky
                    : faq.colorClass === "indigo"
                    ? styles.badgeIndigo
                    : styles.badgeEmerald;

                const borderStyle =
                  faq.colorClass === "sky"
                    ? styles.borderSky
                    : faq.colorClass === "indigo"
                    ? styles.borderIndigo
                    : styles.borderEmerald;

                return (
                  <div
                    key={faq.id}
                    className={`${styles.faqCard} ${
                      isOpen ? styles.faqCardOpen : ""
                    }`}
                    data-category={faq.category}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <div className={styles.faqHeader}>
                      <span className={`${styles.badgeTag} ${badgeStyle}`}>
                        {faq.num}
                      </span>
                      <h3 className={styles.faqQuestion}>{faq.question}</h3>
                      <div
                        className={`${styles.chevronContainer} ${
                          isOpen ? styles.chevronOpen : ""
                        }`}
                      >
                        <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {isOpen && (
                      <div className={styles.accordionContent}>
                        <p className={`${styles.answerText} ${borderStyle}`}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className={styles.noResults}>
                No matching questions found for "{searchTerm}".
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}