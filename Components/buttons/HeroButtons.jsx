"use client";

import Link from "next/link";

const HeroButtons = () => {
  return (
    <div className="card-actions">
      <Link href="#" className="btn btn-primary" data-bs-toggle="modal"
  data-bs-target="#Modal">
        Explore Products
      </Link>

      <Link href="/contact" className="btn btn-secondary">
        Contact Us
      </Link>
    </div>
  );
};

export default HeroButtons;