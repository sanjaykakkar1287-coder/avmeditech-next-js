"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./BlogList.module.css";

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("/api/blog");

                const result = await response.json();

                if (result.success) {
                    setBlogs(result.data);
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <section className={styles.blogSection}>
                <div className="container">
                    <p>Loading blogs...</p>
                </div>
            </section>
        );
    }

    if (!blogs.length) {
        return (
            <section className={styles.blogSection}>
                <div className="container">
                    <p>No blogs available.</p>
                </div>
            </section>
        );
    }

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
                            key={blog._id}
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
                                        {new Date(
                                            blog.date
                                        ).toLocaleDateString(
                                            "en-US",
                                            {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            }
                                        )}
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