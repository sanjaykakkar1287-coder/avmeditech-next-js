"use client";

import React, { useEffect, useRef } from 'react';
import {
  Users,
  Settings,
  Network,
  Wrench,
  Megaphone,
  MapPin,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import styles from './Team.module.css';

const statsData = [
  { id: 1, count: "30+", title: "Sales Professionals", description: "Driving growth & strategic client relations", icon: Users },
  { id: 2, count: "25+", title: "Operations & Admin", description: "Ensuring seamless daily business workflow", icon: Settings },
  { id: 3, count: "20+", title: "Distribution Partners", description: "Expanding market presence nationwide", icon: Network },
  { id: 4, count: "10+", title: "Technical Engineers", description: "Expert service & application support", icon: Wrench },
  { id: 5, count: "Dedicated", title: "HR & Marketing Team", description: "Nurturing talent & brand authority", icon: Megaphone },
  { id: 6, count: "Pan-India", title: "Nationwide Coverage", description: "Serving clients across every state", icon: MapPin }
];

// Left side: 2 flip cards, each cycling between 2 stats
const flipPairs = [
  { front: statsData[0], back: statsData[1] },
  { front: statsData[2], back: statsData[3] }
];

// Right side: showcase panel gets the remaining 2
const showcaseStats = [statsData[4], statsData[5]];

function FlipCard({ front, back, delay }) {
  const FrontIcon = front.icon;
  const BackIcon = back.icon;

  return (
    <div className={styles.flipCard} style={{ '--flip-delay': `${delay}s` }}>
      <div className={styles.flipInner}>
        <div className={styles.flipFace}>
          <div className={styles.cardIconWrapper}><FrontIcon className={styles.icon} /></div>
          <div className={styles.statCount}>{front.count}</div>
          <h3 className={styles.cardTitle}>{front.title}</h3>
          <p className={styles.cardDesc}>{front.description}</p>
        </div>
        <div className={`${styles.flipFace} ${styles.flipFaceBack}`}>
          <div className={styles.cardIconWrapper}><BackIcon className={styles.icon} /></div>
          <div className={styles.statCount}>{back.count}</div>
          <h3 className={styles.cardTitle}>{back.title}</h3>
          <p className={styles.cardDesc}>{back.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const revealRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.statsSection}>
      <div className={styles.glowPrimary}></div>
      <div className={styles.glowSecondary}></div>

      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.badgePill}>
            <span className={styles.pulseDot}></span>
            Our Strength & Reach
          </div>
          <h2 className={styles.mainHeading}>
            Powered by Expertise, <span className={styles.gradientText}>Driven by Excellence</span>
          </h2>
        </div>

        <div className={styles.splitLayout}>
          {/* LEFT: 2 looping flip cards */}
          <div className={styles.flipColumn}>
            {flipPairs.map((pair, i) => (
              <div
                key={pair.front.id}
                ref={(el) => (revealRef.current[i] = el)}
                className={styles.revealWrap}
                style={{ '--delay': `${i * 120}ms` }}
              >
                <FlipCard front={pair.front} back={pair.back} delay={i * 1.5} />
              </div>
            ))}
          </div>

          {/* RIGHT: gradient showcase panel */}
          <div
            ref={(el) => (revealRef.current[2] = el)}
            className={`${styles.showcasePanel} ${styles.revealWrap}`}
            style={{ '--delay': '240ms' }}
          >
            <div className={styles.showcaseGlow}></div>

            <div className={styles.showcaseTop}>
              <div className={styles.showcaseBadge}>
                <Sparkles className={styles.showcaseBadgeIcon} />
                Trusted Nationwide
              </div>
              <ArrowUpRight className={styles.showcaseArrow} />
            </div>

            <h3 className={styles.showcaseHeading}>
              A team built for scale, backed by presence everywhere it matters.
            </h3>

            <div className={styles.showcaseStatsRow}>
              {showcaseStats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.id} className={styles.showcaseStat}>
                    <div className={styles.showcaseStatIcon}><Icon className={styles.icon} /></div>
                    <div>
                      <div className={styles.showcaseStatCount}>{s.count}</div>
                      <div className={styles.showcaseStatTitle}>{s.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}