import Link from "next/link";

import { blogs } from "./blogData";
import styles from "./BlogList.module.css";

export default function BlogList() {

    return (
        <section className={styles.blogSection}>

            <div className="container">

                {/* HEADER */}

                <div className={styles.heading}>

                    <span>
                        AV MEDITECH BLOG
                    </span>

                    <h1>
                        Insights &{" "}
                        <strong>
                            Ophthalmology
                        </strong>
                    </h1>

                    <p>
                        Explore the latest insights, technologies and
                        developments in ophthalmology and eye care.
                    </p>

                </div>


                {/* BLOG GRID */}

                <div className={styles.blogGrid}>

                    {blogs.map((blog) => (

                        <article
                            className={styles.blogCard}
                            key={blog.slug}
                        >

                            {/* IMAGE */}

                            <Link
                                href={`/blog/${blog.slug}`}
                                className={styles.imageWrapper}
                            >

                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                />

                            </Link>


                            {/* CONTENT */}

                            <div className={styles.cardContent}>

                                <div className={styles.meta}>

                                    <span>
                                        {blog.category}
                                    </span>

                                    <span>
                                        {blog.date}
                                    </span>

                                </div>


                                <h2>
                                    {blog.title}
                                </h2>


                                <p>
                                    {blog.excerpt}
                                </p>


                                <Link
                                    href={`/blog/${blog.slug}`}
                                    className={styles.readMore}
                                >
                                    Read Article
                                    <span>→</span>
                                </Link>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}