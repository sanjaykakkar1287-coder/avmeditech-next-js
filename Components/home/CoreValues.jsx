import React from "react";

export default function CoreValues() {
  return (
    <section className="values-section">
      <div className="values-container">
        <div className="values-header">
          <span className="category-badge">
            <span className="badge-dot"></span>
            AV MEDITECH SURGICAL EXCELLENCE
          </span>
          <h2 className="values-headline">
            Empowering Surgeons Through Our <span className="gradient-highlight">Core Principles</span>
          </h2>
          <p className="values-subheadline">
            At AV Meditech, we combine cutting-edge technology, reliability, and surgical excellence to empower ophthalmologists and deliver exceptional patient care.
          </p>
        </div>
        <div className="values-grid">
          {/* Card 1: Technology */}
          <div className="value-card">
            <div className="value-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5V8H7v1z"/>
              </svg>
            </div>
            <h3 className="value-card-title">Cutting-Edge Technology</h3>
            <p className="value-card-text">
              We provide innovative solutions that elevate the standards of cataract surgery and support optimal surgical performance.
            </p>
          </div>
          {/* Card 2: Reliability */}
          <div className="value-card">
            <div className="value-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
            </div>
            <h3 className="value-card-title">Unparalleled Reliability</h3>
            <p className="value-card-text">
              Our products, like the best viscoelastic in India, ensure chamber stability and protect ocular tissues during surgery.
            </p>
          </div>
          {/* Card 3: Excellence */}
          <div className="value-card">
            <div className="value-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
              </svg>
            </div>
            <h3 className="value-card-title">Surgical Excellence</h3>
            <p className="value-card-text">
              Our blades for cataract surgery are engineered for micron-level precision and smooth incisions, ensuring superior results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}