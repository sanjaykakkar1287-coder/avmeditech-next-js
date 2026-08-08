import { notFound } from "next/navigation";
import { categories } from "./productData";
import styles from "./ProductSlug.module.css";

export default function ProductSlug({
    categorySlug,
    productSlug
}) {

    const category = categories.find(
        (item) => item.slug === categorySlug
    );

    if (!category) {
        notFound();
    }

    const product = category.products.find(
        (item) => item.slug === productSlug
    );

    if (!product) {
        notFound();
    }

    return (
        <main className={styles.productDetailPage}>

            {/* PRODUCT HERO */}

            <section className={styles.productDetailHero}>

                <div className="container">

                    <div className="row align-items-center">

                        {/* IMAGE */}

                        <div className="col-lg-6">

                            <div className={styles.productImage}>

                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                            </div>

                        </div>


                        {/* CONTENT */}

                        <div className="col-lg-6">

                            <div className={styles.productContent}>

                                <span className={styles.productCategory}>
                                    {category.name}
                                </span>

                                <h1>
                                    {product.name}
                                </h1>

                                <p>
                                    {product.description}
                                </p>


                                <div className={styles.productActions}>

                                    <a
                                        href="#enquiry"
                                        className={styles.enquiryBtn}
                                    >
                                        Enquire Now
                                    </a>


                                    {product.brochure && (
                                        <a
                                            href={product.brochure}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.brochureBtn}
                                        >
                                            Download Brochure
                                        </a>
                                    )}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* FEATURES */}

            {product.features?.length > 0 && (

                <section className={styles.productInfoSection}>

                    <div className="container">

                        <div className={styles.sectionTitle}>

                            <span>
                                Product Benefits
                            </span>

                            <h2>
                                Key Features
                            </h2>

                        </div>


                        <div className={styles.featuresGrid}>

                            {product.features.map((feature, index) => (

                                <div
                                    className={styles.featureCard}
                                    key={index}
                                >

                                    <div className={styles.featureIcon}>
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <h3>
                                        {feature.title}
                                    </h3>

                                    <p>
                                        {feature.description}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

            )}


            {/* SPECIFICATIONS */}

            {product.specifications &&
                Object.keys(product.specifications).length > 0 && (

                    <section className={styles.specificationsSection}>

                        <div className="container">

                            <div className={styles.sectionTitle}>

                                <span>
                                    Technical Details
                                </span>

                                <h2>
                                    Specifications
                                </h2>

                            </div>


                            <div className={styles.specificationsTable}>

                                {Object.entries(
                                    product.specifications
                                ).map(([key, value]) => (

                                    <div
                                        className={styles.specificationRow}
                                        key={key}
                                    >

                                        <div className={styles.specificationName}>
                                            {key}
                                        </div>

                                        <div className={styles.specificationValue}>
                                            {value}
                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </section>

                )}


            {/* GALLERY */}

            {product.gallery?.length > 0 && (

                <section className={styles.gallerySection}>

                    <div className="container">

                        <div className={styles.sectionTitle}>

                            <span>
                                Product Gallery
                            </span>

                            <h2>
                                Explore the Product
                            </h2>

                        </div>


                        <div className={styles.galleryGrid}>

                            {product.gallery.map((image, index) => (

                                <div
                                    className={styles.galleryItem}
                                    key={index}
                                >

                                    <img
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                    />

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

            )}


            {/* ENQUIRY */}

            <section
                id="enquiry"
                className={styles.enquirySection}
            >

                <div className="container">

                    <div className={styles.enquiryBox}>

                        <div className={styles.enquiryContent}>

                            <span>
                                Need More Information?
                            </span>

                            <h2>
                                Enquire About {product.name}
                            </h2>

                            <p>
                                Contact our team to learn more about this
                                product, availability, specifications and
                                surgical applications.
                            </p>

                        </div>


                        <a
                            href="/contact"
                            className={styles.enquiryBtn}
                        >
                            Contact Us
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}