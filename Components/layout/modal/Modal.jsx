"use client";
import { useState } from "react";
import styles from "./Modal.module.css";
import {
  handleSubmit,
  validateContactField,
} from "../../contact/handleSubmit";




export default function Modal() {
  const [errors, setErrors] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "Intraocular Lenses (IOLs)",
    message: "",
  });

  const onSubmit = (e) => {
    return handleSubmit(
      e,
      setErrors,
      setIsPending,
      setFormData
    );
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: validateContactField(name, value),
      form: "",
    }));
  };

  const handleFieldBlur = (e) => {
    const { name, value } = e.target;

    setErrors((current) => ({
      ...current,
      [name]: validateContactField(name, value),
    }));
  };

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
            <form onSubmit={onSubmit} className={styles.form}>
  <div className={styles.formGrid}>
    <div>
      <label className={styles.label}>Your Name *</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleFieldChange}
        onBlur={handleFieldBlur}
        placeholder="Dr. Rahul Sharma"
        className={`${styles.input} ${errors?.name ? styles.inputError : ""}`}
      />
      {errors?.name && <p className={styles.errorText}>{errors.name}</p>}
    </div>

    <div>
      <label className={styles.label}>Phone Number *</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleFieldChange}
        onBlur={handleFieldBlur}
        placeholder="+91 98765 43210"
        className={`${styles.input} ${errors?.phone ? styles.inputError : ""}`}
      />
      {errors?.phone && <p className={styles.errorText}>{errors.phone}</p>}
    </div>
  </div>

  <div>
    <label className={styles.label}>Email Address *</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleFieldChange}
      onBlur={handleFieldBlur}
      placeholder="name@hospital.com"
      className={`${styles.input} ${errors?.email ? styles.inputError : ""}`}
    />
    {errors?.email && <p className={styles.errorText}>{errors.email}</p>}
  </div>

  <div>
    <label className={styles.label}>Inquiry Type</label>
    <select
      name="inquiryType"
      value={formData.inquiryType}
      onChange={handleFieldChange}
      onBlur={handleFieldBlur}
      className={`${styles.select} ${errors?.inquiryType ? styles.inputError : ""}`}
    >
      <option>Intraocular Lenses (IOLs)</option>
      <option>Surgical Blades &amp; Knives</option>
      <option>Phaco Equipment &amp; Accessories</option>
      <option>Distribution &amp; Partnership</option>
      <option>General Enquiry</option>
    </select>
    {errors?.inquiryType && <p className={styles.errorText}>{errors.inquiryType}</p>}
  </div>

  <div>
    <label className={styles.label}>
      Message / Requirements
    </label>

    <textarea
      name="message"
      rows={3}
      value={formData.message}
      onChange={handleFieldChange}
      onBlur={handleFieldBlur}
      placeholder="Tell us about your clinic or product requirements..."
      className={`${styles.textarea} ${errors?.message ? styles.inputError : ""}`}
    ></textarea>
    {errors?.message && <p className={styles.errorText}>{errors.message}</p>}
  </div>

  {errors?.form && <p className={styles.errorText}>{errors.form}</p>}

  <button type="submit" className={styles.submitBtn} disabled={isPending}>
    <span>{isPending ? "Submitting..." : "Submit Inquiry"}</span>

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
