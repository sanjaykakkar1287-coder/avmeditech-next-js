"use client";

import React, { useState } from "react";
import styles from "./PatientsHeader.module.css";

export default function PatientsHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");

  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "IOL Solutions", href: "#iol" },
    { label: "Consumables", href: "#consumables" },
    { label: "Phaco Systems", href: "#phaco" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <header className={styles.avHeader}>
      <div className={styles.headerContainer}>
        {/* Brand Logo */}
        <a href="#" className={styles.brandLogo}>
          <span className={styles.logoDot}></span>
          <span className={styles.logoText}>AV Meditech</span>
        </a>

        {/* Navigation Links */}
        <nav
          className={`${styles.navMenu} ${
            isMobileMenuOpen ? styles.navMenuActive : ""
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                activeLink === item.href ? styles.navLinkActive : ""
              }`}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className={styles.headerActions}>
          <a href="#contact" className={styles.btnHeader}>
            <span>Inquire Now</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className={styles.mobileToggle}
            aria-label="Toggle Navigation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}