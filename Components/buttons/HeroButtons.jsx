"use client";

import Link from "next/link";

const HeroButtons = () => {
  return (
    <div className="card-actions">
      <Link href="#products" className="btn btn-primary">
        Explore Products
      </Link>

      <Link href="#contact" className="btn btn-secondary">
        Contact Us
      </Link>
    </div>
  );
};

export default HeroButtons;