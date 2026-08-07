


import HeroButtons from "@/Components/buttons/HeroButtons";
import HeroRotating from "@/Components/buttons/HeroRotating";

export default function Hero() {


  return (
    <section className="hero-section">
      <div className="video-background">
        {/* FIXED: autoPlay, muted, loop, playsInline */}
        <video autoPlay loop muted playsInline>
          <source
            src="https://avmeditech.com/wp-content/uploads/2025/04/website-video-av-meditech.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-scrim"></div>
      </div>

      <div className="scan-frame">
        <span className="corner-tick tl"></span>
        <span className="corner-tick tr"></span>
        <span className="corner-tick bl"></span>
        <span className="corner-tick br"></span>
        <div className="scan-line"></div>
      </div>

      <div className="hero-container">
        <div className="hero-left">
          <div className="brand-badge">
            <span className="dot"></span>
            AV&nbsp;MEDITECH&nbsp;&middot;&nbsp;OPHTHALMIC&nbsp;ENGINEERING
          </div>

          <HeroRotating />

          <p className="hero-subtext">
            Delivering high-precision IOLs, advanced viscoelastic solutions, and
            ultra-sharp surgical blades to empower eye surgeons across India.
          </p>

          <div className="card-actions">
            <HeroButtons />
          </div>
        </div>

        <div className="hero-right">
          <div className="data-card">
            <svg className="rotating-badge" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path
                  id="badgePath"
                  d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                />
                <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  {/* FIXED: stopColor */}
                  <stop offset="0%" stopColor="#007AFF" />
                  <stop offset="50%" stopColor="#63C7FF" />
                  <stop offset="100%" stopColor="#00D4C4" />
                </linearGradient>
              </defs>
              {/* FIXED: fontFamily, fontSize, letterSpacing */}
              <text
                fontFamily="'IBM Plex Mono', monospace"
                fontSize="10.5"
                letterSpacing="3.5"
                fill="url(#badgeGrad)"
              >
                <textPath href="#badgePath" startOffset="0%">
                  PRECISION ENGINEERED &#8226; PRECISION ENGINEERED &#8226;{" "}
                </textPath>
              </text>
              <circle cx="100" cy="100" r="4" fill="#007AFF" className="badge-core" />
            </svg>

            <div className="data-card-header">
              <span className="dot"></span>
              <span className="gradient-highlight">Live Product Metrics</span>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number gradient-highlight">100%</span>
                <span className="stat-label">Precision IOLs</span>
              </div>
              <div className="stat-item">
                <span className="stat-number gradient-highlight">ISO</span>
                <span className="stat-label">Certified Quality</span>
              </div>
              <div className="stat-item">
                <span className="stat-number gradient-highlight">Micron</span>
                <span className="stat-label">Grade Blades</span>
              </div>
              <div className="stat-item">
                <span className="stat-number gradient-highlight">Pan-India</span>
                <span className="stat-label">Distribution</span>
              </div>
            </div>

            <div className="data-card-footer">
              <span className="gradient-highlight">
                Manufactured to ISO standards &middot; distributed nationwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}