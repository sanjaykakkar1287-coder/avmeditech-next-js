import Link from "next/link";
import { notFound } from "next/navigation";

import { categories } from "./productData";
import styles from "./Category.module.css";

export default function CategoryPage({ categorySlug }) {

    const category = categories.find(
        (cat) => cat.slug === categorySlug
    );

    if (!category) {
        notFound();
    }

    return (
        <section className={styles.categorySection}>

            <div className="container">

                {/* =========================
                    CATEGORY HEADER
                ========================= */}

                <div className={styles.heading}>

                    <span className={styles.categoryLabel}>
                        AV MEDITECH PRODUCTS
                    </span>

                    <h1>
                        {category.name}
                    </h1>

                    <p>
                        Explore our complete range of{" "}
                        {category.name.toLowerCase()} products,
                        designed for ophthalmic surgical applications.
                    </p>

                </div>


                {/* =========================
                    PRODUCT GRID
                ========================= */}

                <div className={styles.grid}>

                    {category.products.map((product) => (

                        <Link
                            key={product.slug}
                            href={`/products/${category.slug}/${product.slug}`}
                            className={styles.card}
                        >

                            {/* PRODUCT IMAGE */}

                            <div className={styles.imageWrapper}>

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={styles.image}
                                />

                            </div>


                            {/* PRODUCT CONTENT */}

                            <div className={styles.cardContent}>

                                <span className={styles.productCategory}>
                                    {category.name}
                                </span>


                                <h3>
                                    {product.name}
                                </h3>


                                {/* SHORT DESCRIPTION */}

                                {product.description && (
                                    <p className={styles.description}>
                                        {product.description}
                                    </p>
                                )}


                                {/* FEATURES PREVIEW */}

                                {product.features?.length > 0 && (

                                    <div className={styles.featurePreview}>

                                        {product.features
                                            .slice(0, 2)
                                            .map((feature, index) => (

                                                <span key={index}>
                                                    ✓{" "}
                                                    {typeof feature === "string"
                                                        ? feature
                                                        : feature.title}
                                                </span>

                                            ))}

                                    </div>

                                )}


                                {/* BUTTON */}

                                <div className={styles.cardFooter}>

                                    <span className={styles.button}>
                                        View Product
                                        <span>→</span>
                                    </span>

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>
    );
}