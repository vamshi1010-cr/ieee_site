import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import "./TeamCarousel.css";

/* ============================================================
   Senior Executive Board — 2025-26
   To add a photo: set `image` to the filename in public/images/core-team/
   To add LinkedIn: set `linkedin` to the profile URL
   ============================================================ */
const EXECUTIVE = [
  { name: "Sowmya Nihitha Nadimpalli",      role: "President",          image: "core-team/president.png" },
  { name: "Nimmaraju Yashwanth Sarma",      role: "Vice President",     image: "core-team/vice-president.png" },
  { name: "M. Srikar Acharya",              role: "Secretary",          image: "core-team/secretary.png" },
  { name: "B. Shanmukh Sai",                role: "Joint Secretary",    image: "core-team/joint-secretary.png" },
  { name: "Akella Harshith Saipaavan",      role: "Treasurer",          image: "core-team/treasurer.png" },
  { name: "K Vamshi Chandra Reddy",         role: "Technical Head",     image: "core-team/technical-head.png", linkedin:"https://www.linkedin.com/in/k-vamshi-chandra-reddy" },
  { name: "RS Vaibhav",                     role: "Design Head",        image: "core-team/design-head.png" },
  { name: "Likita Reddy Chitti",            role: "Design Head",        image: "core-team/design-head-2.png" },
  { name: "Tanvi Bejadi",                   role: "Documentation Head", image: "core-team/documentation-head.png" },
  { name: "Sheroji Rahul",                  role: "PR Head",            image: "core-team/pr-head.png" },
  { name: "S. Santhoish Maadhur",           role: "PR Head",            image: "core-team/pr-head-2.png" },
  { name: "Lingam Sai Teja",                role: "Social Media Head",  image: "core-team/social-media-head.png" },
];

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

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="team-card__linkedin"
            aria-label={`${member.name} on LinkedIn`}
            onClick={(e) => e.stopPropagation()}
          >
            <FaLinkedin size={14} />
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}

export default function TeamCarousel() {
  const sectionRef = useRef(null);
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
      <div className="team-group">
        <div className="team-group__header">
          <span className="team-group__label">Executive Board · 2025–26</span>
          <div className="team-group__line" aria-hidden="true" />
        </div>
        <div className="team-grid team-grid--executive">
          {EXECUTIVE.map((member, i) => (
            <MemberCard key={i} member={member} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </div>
  );
}
