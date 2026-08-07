"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function IolBenefitsSection() {
  const mountRef = useRef(null);

  // Setup Three.js 3D Refractive Lens Render
  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Realistic Lens Mesh Geometry
    const geometry = new THREE.SphereGeometry(1.4, 32, 16);
    geometry.scale(1, 0.35, 1); // Convex lens proportions

    // Refractive Glass-like Material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x007aff,
      transmission: 0.92,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
      reflectivity: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    const lensMesh = new THREE.Mesh(geometry, material);
    scene.add(lensMesh);

    // Subtle Ambient & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00c6ff, 2, 50);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Continuous Slow Rotation Animation Loop
    let animationFrameId;
    const animate = () => {
      lensMesh.rotation.y += 0.008;
      lensMesh.rotation.x += 0.003;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!currentMount) return;
      const newW = currentMount.clientWidth;
      const newH = currentMount.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="iol-benefits" className="iol-benefits-section optic-grid-bg">
      
      <div className="iol-benefits-container">
        
        {/* HEADER ROW: Compact & Impactful */}
        <div className="iol-benefits-header">
          <div>
            <div className="iol-header-badge">
              <span className="iol-badge-dot"></span>
              CLINICAL ADVANTAGES
            </div>
            <h2 className="iol-benefits-title">
              Benefits of Choosing the <span className="gradient-highlight">Best Lens</span> for Cataract Surgery in India
            </h2>
          </div>
          <p className="iol-benefits-subtitle">
            Selecting the best lens for cataract surgery in India is essential for clear vision and long-term eye health. At AV Meditech, our advanced IOLs ensure visual clarity and smooth recovery.
          </p>
        </div>

        {/* MAIN CONTENT GRID: 3D Refractive Lens Visual Left + 2x3 Compact Grid Right */}
        <div className="iol-benefits-grid">
          
          {/* LEFT COLUMN: Realistic Refractive Optical Lens Visual */}
          <div className="iol-benefits-left-column">
            <div className="scan-ray"></div>
            
            {/* Badge */}
            <div className="iol-visual-badge">
              <span>Intraocular Lens System</span>
              <span className="iol-badge-status">
                <span className="iol-status-dot"></span> Precision Focus
              </span>
            </div>

            {/* Three.js Canvas Container */}
            <div className="iol-benefits-canvas-wrapper">
              <div className="canvas-glow"></div>
              <div ref={mountRef} id="refractive-lens-canvas" className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing"></div>
            </div>

            {/* Dynamic Status Readout */}
            <div className="iol-status-readout">
              <div className="readout-row">
                <span>Focal Precision</span>
                <span className="readout-value">Multi-Distance Clarity</span>
              </div>
              <div className="readout-progress-bar">
                <div className="readout-progress-fill"></div>
              </div>
              <div className="readout-row-small">
                <span>Hydrophobic Material</span>
                <span>UV & Blue Light Filter</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x3 Compact Grid */}
          <div className="iol-benefits-right-column">
            
            {/* Benefit 1: Superior Visual Clarity */}
            <div className="benefit-card">
              <div className="benefit-card-header">
                <div className="benefit-icon-wrapper icon-sky">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <span className="benefit-tag tag-sky">Clarity</span>
                  <h3 className="benefit-title">Superior Visual Clarity</h3>
                </div>
              </div>
              <p className="benefit-text">
                Our best IOL for cataract surgery in India provides crystal-clear vision, reducing glare, halos, and distortion for better contrast and sharpness.
              </p>
            </div>

            {/* Benefit 2: Minimal Dependence on Glasses */}
            <div className="benefit-card">
              <div className="benefit-card-header">
                <div className="benefit-icon-wrapper icon-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="benefit-tag tag-blue">Freedom</span>
                  <h3 className="benefit-title">Minimal Dependence on Glasses</h3>
                </div>
              </div>
              <p className="benefit-text">
                With premium IOLs like multifocal and trifocal lenses, patients can enjoy excellent near, intermediate, and distance vision without needing glasses.
              </p>
            </div>

            {/* Benefit 3: Correction of Astigmatism */}
            <div className="benefit-card">
              <div className="benefit-card-header">
                <div className="benefit-icon-wrapper icon-indigo">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <span className="benefit-tag tag-indigo">Correction</span>
                  <h3 className="benefit-title">Correction of Astigmatism</h3>
                </div>
              </div>
              <p className="benefit-text">
                Our toric IOLs correct astigmatism, ensuring sharper vision for patients with corneal irregularities, making them one of the best lenses in India.
              </p>
            </div>

            {/* Benefit 4: Enhanced Night Vision */}
            <div className="benefit-card">
              <div className="benefit-card-header">
                <div className="benefit-icon-wrapper icon-slate">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <div>
                  <span className="benefit-tag tag-slate">Night Drive</span>
                  <h3 className="benefit-title">Enhanced Night Vision</h3>
                </div>
              </div>
              <p className="benefit-text">
                AV Meditech’s advanced IOL technology minimizes halos and glare, providing clear night vision and better visibility in low-light conditions.
              </p>
            </div>

            {/* Benefit 5: Durability & Long-Term Eye Health */}
            <div className="benefit-card">
              <div className="benefit-card-header">
                <div className="benefit-icon-wrapper icon-emerald">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <span className="benefit-tag tag-emerald">Longevity</span>
                  <h3 className="benefit-title">Durability & Long-Term Health</h3>
                </div>
              </div>
              <p className="benefit-text">
                Our IOLs are made from biocompatible materials, ensuring safety, longevity, and improved eye health post-surgery.
              </p>
            </div>

            {/* Benefit 6: Faster Recovery & Comfort */}
            <div className="benefit-card">
              <div className="benefit-card-header">
                <div className="benefit-icon-wrapper icon-sky">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="benefit-tag tag-sky">Comfort</span>
                  <h3 className="benefit-title">Faster Recovery & Comfort</h3>
                </div>
              </div>
              <p className="benefit-text">
                With smooth implantation and precise optical performance, AV Meditech’s IOLs support a quick recovery and comfortable adaptation post-surgery.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}