import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer-main">
      <div className="footer-container">
        {/* TOP ROW: Column Links & Contact Details */}
        <div className="footer-top">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col">
            <a href="/" className="header-logo mb-4">
              <Image
                src="/images/logo/Logo.png" // Update with your actual logo path
                alt="AV Meditech Logo"
                width={180} // Set appropriate width
                height={40} // Set appropriate height
                className="text-logo" // You can reuse or create new styles
              />
            </a>
            <p className="footer-about-text">
              Delivering high-precision IOLs, advanced viscoelastic solutions,
              and ultra-sharp surgical blades to empower eye surgeons across
              India.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contacts</Link>
              </li>
              <li>
                <Link href="/Blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/patient">I am a Patient</Link>
              </li>
              <li>
                <Link href="/patients/vision-simulator">Vision Simulator</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Solutions */}
          <div className="footer-col">
            <h3 className="footer-col-title">Our Solutions</h3>
            <ul className="footer-links">
              <li>
                <Link href="/products/iol-lens">IOL - Intraocular Lens</Link>
              </li>
              <li>
                <Link href="/products/consumables">Consumables</Link>
              </li>
              <li>
                <Link href="/products/vitreoretinal">Vitreoretinal</Link>
              </li>
              <li>
                <Link href="/products/phaco-equipments">Phaco Equipments</Link>
              </li>

              <li>
                <Link href="/products/plasmapp-sterilizer">
                  Plasmapp Sterilizer
                </Link>
              </li>
              <li>
                <Link href="/products/ecp-system">ECP System</Link>
              </li>
              <li>
                <Link href="/products/endo-optiks">Endo Optiks®</Link>
              </li>
              <li>
                <Link href="/products/dry-eye">Dry Eye</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Get in Touch */}
          <div className="footer-col">
            <h3 className="footer-col-title">Get in Touch</h3>
            <ul className="footer-contact">
              <li>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Unit No.715, 7th Floor, B-wing, Emaar Digital Greens, Sector
                  61, Golf Course Extension Road, Gurugram, Haryana, 122011
                </span>
              </li>

              <li>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M22 16.92v3a2 2 0 01-2.18 2
      19.79 19.79 0 01-8.63-3.07
      19.5 19.5 0 01-6-6
      19.79 19.79 0 01-3.07-8.67
      A2 2 0 014.11 2h3
      a2 2 0 012 1.72
      12.84 12.84 0 00.7 2.81
      2 2 0 01-.45 2.11L8.09 9.91
      a16 16 0 006 6l1.27-1.27
      a2 2 0 012.11-.45
      12.84 12.84 0 002.81.7
      A2 2 0 0122 16.92z"
                  />
                </svg>

                <span>+91-124-4106078.</span>
              </li>

              <li>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Regd. Address: D.S.S 308, Ground Floor, Sector 20, Huda,
                  Kaithal, Haryana 136027
                </span>
              </li>

              <li>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M22 16.92v3a2 2 0 01-2.18 2
      19.79 19.79 0 01-8.63-3.07
      19.5 19.5 0 01-6-6
      19.79 19.79 0 01-3.07-8.67
      A2 2 0 014.11 2h3
      a2 2 0 012 1.72
      12.84 12.84 0 00.7 2.81
      2 2 0 01-.45 2.11L8.09 9.91
      a16 16 0 006 6l1.27-1.27
      a2 2 0 012.11-.45
      12.84 12.84 0 002.81.7
      A2 2 0 0122 16.92z"
                  />
                </svg>

                <span >
                  <a className="text1" href="tel:+919354343355">+91 9354343355</a>,{" "}
                  <a  className="text1" href="tel:+919812023148">+91 9812023148</a>
                </span>
              </li>

              <li>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span >
                  <a className="text1" href="mailto:info@avmeditech.com">info@avmeditech.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW: Copyright & Social Links */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} AV Meditech. All Rights Reserved. | Created
            &amp; Maintained by{" "}
            <a
              href="https://businexperts.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="gradient-highlight">Businexperts.com</span>
            </a>
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.297 1.634 4.208 3.803 4.649-.625.17-1.284.26-1.96.26-.306 0-.6-.03-.893-.08.613 1.9 2.388 3.282 4.492 3.32-.959.75-2.17 1.19-3.483 1.19-.227 0-.452-.013-.674-.04 1.235.79 2.706 1.25 4.288 1.25 5.145 0 7.96-4.268 7.96-7.96 0-.121-.003-.242-.008-.363.546-.394 1.018-.886 1.394-1.432z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
