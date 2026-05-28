import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const STATS = [
  { value: "500+", label: "Members" },
  { value: "8",    label: "Societies" },
  { value: "50+",  label: "Events/yr" },
  { value: "2015", label: "Est." },
];

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

      {/* ── Subtle dot-grid background ───────────────────── */}
      <div className="hero__dotgrid" aria-hidden="true" />

      <div className="hero__inner">

        {/* ── Left column ───────────────────────────────── */}
        <div className="hero__content">

          {/* Overline label */}
          <div className="hero__overline hero__animate">
            <span className="hero__overline-bar" aria-hidden="true" />
            <span className="hero__overline-bar hero__overline-bar--short" aria-hidden="true" />
            <span className="hero__overline-text">IEEE Student Branch · CBIT Hyderabad</span>
          </div>

          {/* Heading */}
          <h1 className="hero__heading hero__animate">
            Advancing<br />
            <span className="hero__heading-accent">Technology</span><br />
            for Humanity.
          </h1>

          {/* Body */}
          <p className="hero__body hero__animate">
            The IEEE CBIT Student Branch connects engineers, innovators, and
            leaders at Chaitanya Bharathi Institute of Technology — through
            technical events, workshops, and eight active technical societies.
          </p>

          {/* CTAs */}
          <div className="hero__actions hero__animate">
            <Link to="/computer-society" className="hero__btn hero__btn--primary">
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

          {/* Divider */}
          <div className="hero__divider hero__animate" aria-hidden="true" />

          {/* Affiliation note */}
          <p className="hero__affiliation hero__animate">
            Official student branch of the Institute of Electrical and Electronics Engineers (IEEE) —
            the world's largest technical professional organisation.
          </p>

        </div>

        {/* ── Right column — stats card ──────────────────── */}
        <div className="hero__card hero__animate" role="region" aria-label="Branch statistics">

          <div className="hero__card-header">
            <span className="hero__card-label">Branch at a glance</span>
            <span className="hero__card-dot" aria-hidden="true" />
          </div>

          <div className="hero__stats">
            {STATS.map(({ value, label }) => (
              <div className="hero__stat" key={label}>
                <span className="hero__stat-value">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>

          <div className="hero__card-divider" aria-hidden="true" />

          {/* Society chips */}
          <div className="hero__card-section">
            <span className="hero__card-sublabel">Active societies</span>
            <div className="hero__chips">
              {["CS","WIE","RAS","PES","SPS","CAS","VTS","ES"].map((s) => (
                <span className="hero__chip" key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div className="hero__card-divider" aria-hidden="true" />

          {/* IEEE region info */}
          <div className="hero__card-section">
            <span className="hero__card-sublabel">Region</span>
            <span className="hero__card-value-sm">Region 10 · Asia Pacific</span>
          </div>

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
