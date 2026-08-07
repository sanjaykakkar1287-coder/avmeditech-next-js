"use client";

export default function Modal() {
  return (
    <div
      className="modal fade"
      id="Modal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
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
            <form>

              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  rows="4"
                  className="form-control"
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