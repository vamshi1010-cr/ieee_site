import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Cards.css";

const SOCIETY_ABBR = {
  "Circuits and Systems Society":      "CAS",
  "Computer Society":                  "CS",
  "Education Society":                 "ES",
  "Power and Energy Society":          "PES",
  "Robotics and Automation Society":   "RAS",
  "Signal Processing Society":         "SPS",
  "Women in Engineering Society":      "WIE",
  "Vehicular Technology Society":      "VTS",
};

export default function Cards({ img, societyName, description, link }) {
  const cardRef  = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  /* Fade-in on scroll into view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const abbr = SOCIETY_ABBR[societyName] || "";

  return (
    <NavLink
      to={`/${link}`}
      className={`society-card ${isVisible ? "society-card--visible" : ""}`}
      ref={cardRef}
      aria-label={`Learn more about ${societyName}`}
    >
      {/* ── Image ─────────────────────────────────────────── */}
      <div className="society-card__img-wrap">
        <img
          src={img}
          alt={societyName}
          className="society-card__img"
          loading="lazy"
        />
        {/* Abbreviation badge */}
        {abbr && (
          <span className="society-card__badge" aria-hidden="true">
            {abbr}
          </span>
        )}
      </div>

      {/* ── Body ──────────────────────────────────────────── */}
      <div className="society-card__body">
        <h3 className="society-card__name">{societyName}</h3>
        <p className="society-card__desc">{description}</p>
        <span className="society-card__cta">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>

      {/* ── Hover accent line ─────────────────────────────── */}
      <div className="society-card__accent" aria-hidden="true" />
    </NavLink>
  );
}
