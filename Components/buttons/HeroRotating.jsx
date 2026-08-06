"use client";

import { useEffect, useState } from "react";

const cyclingWords = [
  "Cataract Surgery",
  "Refractive Surgery",
  "Retinal Surgery",
  "Ophthalmic Care",
];

export default function HeroRotatingText() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % cyclingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="dynamic-heading">
      Precision engineering for
      <br />
      <span className="focus-wrap">
        <span className="bracket tl"></span>
        <span className="bracket tr"></span>

        <span
          id="changing-text"
          className="cycling-word gradient-highlight"
        >
          {cyclingWords[textIndex]}
        </span>

        <span className="bracket bl"></span>
        <span className="bracket br"></span>
      </span>
    </h1>
  );
}

