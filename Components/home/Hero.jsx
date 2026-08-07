


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

        
      </div>
    </section>
  );
}