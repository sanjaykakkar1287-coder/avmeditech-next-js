"use client";

import React from "react";
import Link from "next/link";

import styles from "./allProducts.module.css";
import { categories } from "../products/productData";

export default function AllProducts() {

    return (
        <section className={styles.section}>

            {/* Background Decorative Glows */}
            <div
                className={styles.auroraGlow1}
                aria-hidden="true"
            />

            <div
                className={styles.auroraGlow2}
                aria-hidden="true"
            />


            <div className={styles.container}>

                {/* HEADER */}

                <div className={styles.headerBlock}>

                    <div className={styles.badgePill}>
                        <span className={styles.pulseDot}></span>

                        AV MEDITECH SURGICAL PORTFOLIO
                    </div>


                    <h2 className={styles.mainHeading}>
                        Explore Our{" "}
                        <span className={styles.gradientText}>
                            Surgical Categories
                        </span>
                    </h2>


                    <p className={styles.headerSubtext}>
                        Comprehensive ophthalmic surgical devices,
                        intraocular optics, specialized consumables,
                        and advanced therapeutic laser systems.
                    </p>

                </div>


                {/* CATEGORY CARDS */}

                <div className={styles.cardsGrid}>

                    {categories.map((category) => (

                        <div
                            className={styles.glassCard}
                            key={category.slug}
                        >

                            <div className={styles.cardTop}>

                                {/* IMAGE */}

                                <div className={styles.imageWrapper}>

                                    <img
                                        src={
                                            category.image ||
                                            "/images/products/default.webp"
                                        }
                                        alt={category.name}
                                        className={styles.cardImg}
                                    />

                                </div>


                                {/* CATEGORY TAG */}

                                <div className={styles.tagRow}>

                                    <div className={styles.iconBox}>

                                        <svg
                                            className={styles.btnIcon}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />

                                        </svg>

                                    </div>


                                    <span className={styles.tagLabel}>
                                        {category.name}
                                    </span>

                                </div>


                                {/* TITLE */}

                                <h3 className={styles.cardTitle}>
                                    {category.name}
                                </h3>


                                {/* DESCRIPTION */}

                                <p className={styles.cardDesc}>
                                    Explore our range of{" "}
                                    {category.name.toLowerCase()} products
                                    designed for ophthalmic surgical
                                    applications.
                                </p>

                            </div>


                            {/* FOOTER */}

                            <div className={styles.cardFooter}>

                                <Link
                                    href={`/products/${category.slug}`}
                                    className={styles.categoryBtn}
                                >

                                    <span>
                                        View Category Products
                                    </span>


                                    <svg
                                        className={styles.btnIcon}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />

                                    </svg>

                                </Link>

                            </div>

                        </div>

                    ))}

                </div>


                {/* CTA */}

                <div className={styles.ctaPanel}>

                    <h3 className={styles.ctaHeading}>
                        Need Assistance Selecting the Right Equipment?
                    </h3>


                    <p className={styles.ctaSubtext}>
                        Our clinical specialists are ready to help
                        customize product bundles and provide technical
                        specifications for your practice.
                    </p>


                    <div className={styles.ctaButtonGroup}>

                        <Link
                            href="/contact"
                            className={styles.ctaPrimaryBtn}
                        >
                            Request Catalog
                        </Link>


                        <Link
                            href="/contact"
                            className={styles.ctaSecondaryBtn}
                        >
                            Speak to a Specialist
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}