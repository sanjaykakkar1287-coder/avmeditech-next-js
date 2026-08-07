"use client";

import Link from "next/link";

const HeroButtons = (data) => {
  return (
    <div className="card-actions">
      <Link href="#" className="btn btn-primary" data-bs-toggle="modal"
  data-bs-target="#Modal">
        {data.text ? data.text : "Request a Call Back"}
      </Link>

      <Link href="/contact" className="btn btn-secondary">
        Contact Us
      </Link>
    </div>
  );
};

export default HeroButtons;