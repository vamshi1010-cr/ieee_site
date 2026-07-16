import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import CircuitGrid from "./CircuitGrid";
import HeroGlobe from "./HeroGlobe"; // <-- Imported the globe
import "./Hero.css";

export default function Hero() {
  const sectionRef = useRef(null);

  /* Trigger animation when component mounts */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll(".hero__animate");
    items.forEach((item, i) => {
      item.style.animationDelay = `${i * 0.12}s`;
      item.classList.add("hero__animate--visible");
    });
  }, []);

  return (
    <section className="hero" ref={sectionRef} aria-label="IEEE CBIT introduction">
      
      <CircuitGrid />
      
      <div className="hero__inner">

        {/* ── Left column ───────────────────────────────── */}
        <div className="hero__content">
          <div className="hero__overline hero__animate">
            <span className="hero__overline-bar" aria-hidden="true" />
            <span className="hero__overline-bar hero__overline-bar--short" aria-hidden="true" />
            <span className="hero__overline-text">IEEE Student Branch · CBIT Hyderabad</span>
          </div>

          <h1 className="hero__heading hero__animate">
            Advancing<br />
            <span className="hero__heading-accent">Technology</span><br />
            for Humanity.
          </h1>

          <p className="hero__body hero__animate">
            The IEEE CBIT Student Branch connects engineers, innovators, and
            leaders at Chaitanya Bharathi Institute of Technology — through
            technical events, workshops, and eight active technical societies.
          </p>

          <div className="hero__actions hero__animate">
            <Link to="/#societies" className="hero__btn hero__btn--primary">
              Explore Societies
            </Link>
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noreferrer"
              className="hero__btn hero__btn--outline"
            >
              Join IEEE
            </a>
          </div>

          <div className="hero__divider hero__animate" aria-hidden="true" />

          <p className="hero__affiliation hero__animate">
            Official student branch of the Institute of Electrical and Electronics Engineers (IEEE) —
            the world's largest technical professional organisation.
          </p>
        </div>

        {/* ── Right column — 3D Globe ──────────────────── */}
        {/* We keep the hero__animate class so the globe fades in beautifully with the text */}
        <div className="hero__animate" style={{ display: 'flex', justifyContent: 'center' }}>
          <HeroGlobe />
        </div>

      </div>

      {/* ── Scroll hint ───────────────────────────────────── */}
      <div className="hero__scroll-hint hero__animate" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">scroll</span>
      </div>

    </section>
  );
}