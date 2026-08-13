"use client";
import styles from "./Modal.module.css";
import {handleSubmit} from "../../contact/Contact";



export default function Modal() {
  return (
    <div
      className="modal fade"
      id="Modal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm" style={{ maxWidth: "450px" }}  >
        <div className="modal-content">

          <div className="modal-header">
  

  <button
    type="button"
    className="btn-close"
    aria-label="Close"
    data-bs-dismiss="modal"
  ></button>
</div>

          {/* Body */}
          <div className="modal-body">
            <div>
                <span className={styles.formTag}>Direct Support</span>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
               
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
  );
}