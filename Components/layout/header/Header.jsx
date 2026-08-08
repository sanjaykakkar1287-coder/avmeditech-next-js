"use client";

import { useState } from "react";
import Link from "next/link";
import MenuItems from "./Menuitems";
import Image from "next/image";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header" id="site-header">
      <div className="header-container">
        <Link href="/" className="header-logo">
          <span className="text-logo">
            <Image src="/images/logo/LOGO.png" alt="logo" width={150} height={50} />
          </span>
        </Link>

        <nav className={`header-nav ${menuOpen ? "is-open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="has-submenu">
              <Link href="/products"  style={{ marginTop: "-7px" }}>
                Products
                <svg
                  className="submenu-arrow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/products" onClick={closeMenu}>
                    All Products
                  </Link>
                </li>
                <MenuItems />
              </ul>
            </li>
            <li>
              <Link href="/blog" onClick={closeMenu}>
                Blogs
              </Link>
            </li>
            
            <li>
              <Link href="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className={`mobile-nav-toggle ${menuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
}
