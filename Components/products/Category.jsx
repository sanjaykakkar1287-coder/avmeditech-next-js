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
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <h1>{category.name}</h1>
          <p>Explore our complete range of {category.name}.</p>
        </div>

        <div className={styles.grid}>
          {category.products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${category.slug}/${product.slug}`}
              className={styles.card}
            >
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
              />

              <h3>{product.name}</h3>

              <span className={styles.button}>
                View Product →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}