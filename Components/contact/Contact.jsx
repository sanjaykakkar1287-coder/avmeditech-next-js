"use client";

import React from "react";
import styles from "./Contact.module.css";
import { useState } from "react";
 




export const handleSubmit = (e) => {
  e.preventDefault();

  
const formData = new FormData(e.currentTarget);

  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const inquiryType = formData.get("inquiryType");
  const message = formData.get("message");

   

  const whatsappNumber = "919896099091"; 

  const whatsappMessage = `
Hello AV Meditech,

New Inquiry

Name: ${name}
Phone: ${phone}
Email: ${email}
Inquiry Type: ${inquiryType}
Message: ${message || "N/A"}
  `.trim();

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.location.href = whatsappURL;
};



export default function Contact() {
 
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>

        {/* SECTION HEADER */}
        <div className={styles.headerRow}>
          <div>
            <div className={styles.badgePill}>
              <span className={styles.pulseDot}></span>
              GET IN TOUCH
            </div>
            <h2 className={styles.mainHeading}>
              Connect with <span className={styles.gradientText}>AV Meditech</span>
            </h2>
          </div>
          <p className={styles.headerSubtext}>
            Reach out to our corporate or registered offices for product inquiries, distribution partnerships, and nationwide surgeon support.
          </p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className={styles.mainGrid}>

          {/* LEFT COLUMN: OFFICE CARDS (Gurugram + Kaithal) */}
          <div className={styles.officesCol}>

            {/* Corporate Office Card */}
            <div className={styles.officeCard}>
              <div className={styles.officeCardHeader}>
                <div className={styles.officeTitleWrapper}>
                  <div className={styles.iconBoxSky}>
                    <svg className={styles.svgIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.officeTitle}>Corporate Office</h3>
                    <span className={styles.locationSky}>Gurugram, Haryana</span>
                  </div>
                </div>
                <span className={styles.officeTag}>Primary Hub</span>
              </div>

              {/* Address */}
              <div className={styles.addressRow}>
                <div className={styles.slateIconBox}>
                  <svg className={styles.svgIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Address</span>
                  <p className={styles.infoVal}>
                    Unit No.715, 7th Floor, B-wing, Emaar Digital Greens, Sector 61, Golf Course Extension Road, Gurugram, Haryana, 122011
                  </p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className={styles.contactGrid}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIconSky}>
                    <svg className={styles.svgIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Phone</span>
                    <a href="tel:+911244106078" className={styles.contactLink}>+91-124-4106078</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIconBlue}>
                    <svg className={styles.svgIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <a href="mailto:info@avmeditech.com" className={styles.contactLink}>info@avmeditech.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Registered Office Card */}
            <div className={styles.officeCard}>
              <div className={styles.officeCardHeader}>
                <div className={styles.officeTitleWrapper}>
                  <div className={styles.iconBoxIndigo}>
                    <svg className={styles.svgIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.officeTitle}>Registered Office</h3>
                    <span className={styles.locationIndigo}>Kaithal, Haryana</span>
                  </div>
                </div>
                <span className={styles.officeTag}>Regd. HQ</span>
              </div>

              {/* Address */}
              <div className={styles.addressRow}>
                <div className={styles.slateIconBox}>
                  <svg className={styles.svgIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Address</span>
                  <p className={styles.infoVal}>
                    D.S.S 308, Ground Floor, Sector 20, Huda, Kaithal, Haryana 136027
                  </p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className={styles.contactGrid}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIconIndigo}>
                    <svg className={styles.svgIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Mobile Numbers</span>
                    <a href="tel:+919354343355" className={styles.contactLink}>+91 9354343355</a>
                    <a href="tel:+919812023148" className={styles.contactLink}>+91 9812023148</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIconBlue}>
                    <svg className={styles.svgIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <a href="mailto:info@avmeditech.com" className={styles.contactLink}>info@avmeditech.com</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: ENQUIRY FORM */}
          <div className={styles.formCol}>
            <div className={styles.glowAura}></div>

            <div className={styles.formCard}>
              <div>
                <span className={styles.formTag}>Direct Support</span>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <p className={styles.formDesc}>
                  Have questions about our intraocular lenses or surgical devices? Fill in your details below and our team will get back to you promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
  <div className={styles.formGrid}>
    <div>
      <label className={styles.label}>Your Name *</label>
      <input
        type="text"
        name="name"
        required
        placeholder="Dr. Rahul Sharma"
        className={styles.input}
      />
    </div>

    <div>
      <label className={styles.label}>Phone Number *</label>
      <input
  type="tel"
  name="phone"
  required
  maxLength={10}
  placeholder="+91 98765 43210"
  className={styles.input}
  
/>


    </div>
  </div>

  <div>
    <label className={styles.label}>Email Address *</label>
    <input
      type="email"
      name="email"
      required
      placeholder="name@hospital.com"
      className={styles.input}
    />
  </div>

  <div>
    <label className={styles.label}>Inquiry Type</label>
    <select
      name="inquiryType"
      className={styles.select}
    >
      <option>Intraocular Lenses (IOLs)</option>
      <option>Surgical Blades &amp; Knives</option>
      <option>Phaco Equipment &amp; Accessories</option>
      <option>Distribution &amp; Partnership</option>
      <option>General Enquiry</option>
    </select>
  </div>

  <div>
    <label className={styles.label}>
      Message / Requirements
    </label>

    <textarea
      name="message"
      rows={3}
      placeholder="Tell us about your clinic or product requirements..."
      className={styles.textarea}
    ></textarea>
  </div>

  <button type="submit" className={styles.submitBtn}>
    <span>Submit Inquiry</span>

    <svg
      className={styles.svgIcon}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </button>
</form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}