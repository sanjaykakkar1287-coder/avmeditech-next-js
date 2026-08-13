import { notFound } from "next/navigation";
import { categories } from "@/Components/products/productData";
import styles from "./ProductDetails.module.css";
import Link from "next/link";
import modal from "@/Components/layout/modal/modal";



export default async function ProductDetailsPage({ params }) {
  const { category, slug } = await params;

  // Find Category
  const categoryData = categories.find(
    (item) => item.slug === category
  );

  if (!categoryData) {
    notFound();
  }

  // Find Product
  const product = categoryData.products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left Side */}
        <div className={styles.imageBox}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
        </div>

        {/* Right Side */}
        <div className={styles.content}>

          <span className={styles.category}>
            {categoryData.name}
          </span>

          <h1>{product.name}</h1>

          <p>
            {product.description}
          </p>

          <Link className={styles.heroPrimaryBtn}  
          data-bs-toggle="modal"
          data-bs-target="#Modal">
            Enquire Now
          </Link>

        </div>

      </div>
    </section>
  );
}