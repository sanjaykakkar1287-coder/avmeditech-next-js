"use client";
import styles from "./Modal.module.css";
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

          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Contact Us</h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <form className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Full Name</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter your name"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          className={styles.input}
          placeholder="Enter your email"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Phone</label>
        <input
          type="tel"
          className={styles.input}
          placeholder="Enter phone number"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Message</label>
        <textarea
          rows={4}
          className={styles.textarea}
          placeholder="Write your message"
        ></textarea>
      </div>
    </form>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}