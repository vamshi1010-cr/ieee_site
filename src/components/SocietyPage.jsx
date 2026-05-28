import React from "react";
import Footer from "./Footer";
import Events from "./Events";
import "./SocietyPage.css";

/* ── Leadership card (Chair / Vice Chair) ──────────────────── */
const LeadershipCard = ({ name, position, image }) => (
  <div className="sp-leader-card">
    <div className="sp-leader-img-wrap">
      <img
        src={image}
        alt={`${name} — ${position}`}
        className="sp-leader-img"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "flex";
        }}
      />
      <div className="sp-leader-fallback" style={{ display: "none" }}>
        <span className="sp-leader-initials">
          {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
        </span>
      </div>
    </div>
    <div className="sp-leader-body">
      <p className="sp-leader-name">{name}</p>
      <span className="sp-leader-role">{position}</span>
    </div>
  </div>
);

/* ── Junior EB member row ──────────────────────────────────── */
const JuniorMember = ({ name, position }) => (
  <div className="sp-member">
    <span className="sp-member-name">{name}</span>
    <span className="sp-member-role">{position}</span>
  </div>
);

/* ── Main template ─────────────────────────────────────────── */
export default function SocietyPage({
  name,           // e.g. "Computer Society"
  abbr,           // e.g. "CS"
  description,    // paragraph text
  eventsBy,       // string passed to <Events by="..." />
  leadership,     // [{ name, position, image }]
  juniorEB,       // [{ name, position }]
}) {
  return (
    <div className="sp">

      {/* ── Hero banner ───────────────────────────────────── */}
      <div className="sp__hero" data-abbr={abbr}>
        <div className="sp__hero-inner">
          <span className="sp__hero-abbr">{abbr}</span>
          <h1 className="sp__hero-title">{name}</h1>
          <p className="sp__hero-sub">IEEE CBIT Student Branch</p>
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────── */}
      <div className="sp__body">

        {/* About */}
        <section className="sp__section" id="about">
          <div className="sp__section-header">
            <span className="sp__overline">About</span>
            <h2 className="sp__heading">{name}</h2>
          </div>
          <p className="sp__description">{description}</p>
        </section>

        {/* Leadership */}
        {leadership?.length > 0 && (
          <section className="sp__section" id="leadership">
            <div className="sp__section-header">
              <span className="sp__overline">Leadership</span>
              <h2 className="sp__heading">Society Heads 2024–25</h2>
              <p className="sp__subtext">
                Meet the dedicated leadership of the {name}.
              </p>
            </div>
            <div className="sp__leader-grid">
              {leadership.map((member, i) => (
                <LeadershipCard key={i} {...member} />
              ))}
            </div>
          </section>
        )}

        {/* Junior EB */}
        {juniorEB?.length > 0 && (
          <section className="sp__section" id="team">
            <div className="sp__section-header">
              <span className="sp__overline">Team</span>
              <h2 className="sp__heading">Junior Executive Board</h2>
            </div>
            <div className="sp__member-grid">
              {juniorEB.map((member, i) => (
                <JuniorMember key={i} {...member} />
              ))}
            </div>
          </section>
        )}

        {/* Events */}
        <section className="sp__section sp__section--gray" id="events">
          <div className="sp__section-header">
            <span className="sp__overline">What's On</span>
            <h2 className="sp__heading">Events</h2>
            <p className="sp__subtext">Past and upcoming events by {name}.</p>
          </div>
          <Events by={eventsBy} />
        </section>

      </div>

      <Footer />
    </div>
  );
}
