import Link from "next/link";
import { categories } from "@/Components/products/productData";

export default function MenuItems() {
  return (
    <>
      {categories.map((category) => (
        <li key={category.slug}>
          <Link href={`/products/${category.slug}`}>
            {category.name}
          </Link>
        </li>
      ))}
    </>
  );
}