import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import "./TeamCarousel.css";

const TEAM = {
  executive: [
    { name: "Name Here", role: "Chairperson",       image: "core-team/pres.png" },
    { name: "Name Here", role: "Vice Chairperson",  image: "core-team/v-pres.png" },
    { name: "Name Here", role: "Secretary",         image: "core-team/secret.png" },
    { name: "Name Here", role: "Technical Lead",    image: "tech-team/2.png" },
    { name: "Name Here", role: "Design Lead",       image: "design-team/3.png" },
    { name: "Name Here", role: "SM & PR Lead",      image: "sm&pr-team/5.png" },
  ],
  societies: [
    { name: "Name Here", role: "CAS Chair",         image: "soc/cas1.png" },
    { name: "Name Here", role: "CAS Vice Chair",    image: "soc/cas2.png" },
    { name: "Name Here", role: "CS Chair",          image: "soc/cs1.png" },
    { name: "Name Here", role: "CS Vice Chair",     image: "soc/cs2.png" },
    { name: "Name Here", role: "ES Chair",          image: "soc/es1.png" },
    { name: "Name Here", role: "ES Vice Chair",     image: "soc/es2.png" },
    { name: "Name Here", role: "PES Chair",         image: "soc/pes1.png" },
    { name: "Name Here", role: "PES Vice Chair",    image: "soc/pes2.png" },
    { name: "Name Here", role: "RAS Chair",         image: "soc/ras1.png" },
    { name: "Name Here", role: "RAS Vice Chair",    image: "soc/ras2.png" },
    { name: "Name Here", role: "SPS Chair",         image: "soc/sps1.png" },
    { name: "Name Here", role: "SPS Vice Chair",    image: "soc/sps2.png" },
    { name: "Name Here", role: "WIE Chair",         image: "soc/ws1.png" },
    { name: "Name Here", role: "WIE Vice Chair",    image: "soc/ws2.png" },
    { name: "Name Here", role: "VTS Chair",         image: "soc/vts1.png" },
    { name: "Name Here", role: "VTS Vice Chair",    image: "soc/vts2.png" },
  ],
};

function MemberCard({ member, index, visible }) {
  return (
    <div
      className={`team-card ${visible ? "team-card--visible" : ""}`}
      style={{ transitionDelay: `${(index % 6) * 0.07}s` }}
    >
      <div className="team-card__img-wrap">
        <img
          src={`images/${member.image}`}
          alt={member.name}
          className="team-card__img"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
        />
        <div className="team-card__fallback" style={{ display: "none" }}>
          <span className="team-card__initials">
            {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </span>
        </div>
      </div>
      <div className="team-card__body">
        <p className="team-card__name">{member.name}</p>
        <span className="team-card__role">{member.role}</span>

        {/* ── LinkedIn link — only shows if URL provided ── */}
{member.linkedin && (
  <a
    href={member.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="team-card__linkedin"
    aria-label={`${member.name} on LinkedIn`}
    onClick={(e) => e.stopPropagation()}
  >
    <FaLinkedin size={11} />
    LinkedIn
  </a>
        )}
      </div>
    </div>
  );
}

export default function TeamCarousel({ onSlideChange }) {
  const sectionRef  = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <div className="team-section" ref={sectionRef}>

      {/* ── Executive board ───────────────────────────────── */}
      <div className="team-group">
        <div className="team-group__header">
          <span className="team-group__label">Executive Board</span>
          <div className="team-group__line" aria-hidden="true" />
        </div>
        <div className="team-grid team-grid--executive">
          {TEAM.executive.map((member, i) => (
            <MemberCard key={i} member={member} index={i} visible={visible} />
          ))}
        </div>
      </div>

      {/* ── Society chairs ────────────────────────────────── */}
      <div className="team-group">
        <div className="team-group__header">
          <span className="team-group__label">Society Chairs & Vice Chairs</span>
          <div className="team-group__line" aria-hidden="true" />
        </div>
        <div className="team-grid team-grid--societies">
          {TEAM.societies.map((member, i) => (
            <MemberCard key={i} member={member} index={i} visible={visible} />
          ))}
        </div>
      </div>

    </div>
  );
}
