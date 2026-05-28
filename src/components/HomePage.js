import Hero from "./Hero/Hero";
import SocietyCards from "./SocietyCards";
import Footer from "./Footer";
import Events from "./Events";
import TeamCarousel from "./TeamCarousel";
import { useState } from "react";
import "./HomePage.css";

export default function HomePage() {
  

  return (
    <div className="homepage">

      {/* ── Hero ───────────────────────────────────────────── */}
      <Hero />

      {/* ── About ──────────────────────────────────────────── */}
      <section className="hp-section hp-about" id="about">
        <div className="hp-container">
          <span className="hp-overline">About Us</span>
          <h2 className="hp-heading">What is IEEE CBIT?</h2>
          <p className="hp-body">
            The IEEE CBIT Student Branch at Chaitanya Bharathi Institute of
            Technology is a pioneering student branch affiliated with IEEE —
            the world's largest technical professional organisation. We provide
            a platform for students to engage with cutting-edge technology,
            conduct events, seminars, and webinars, and network with industry
            professionals.
          </p>
          <p className="hp-body">
            The branch hosts flagship events like Robovanza, Masterclasses, and
            Membership Drives every year. IEEE CBIT comprises eight specialised
            societies, each focused on specific areas of engineering and
            technology — giving every student a community that matches their
            interests.
          </p>
        </div>
      </section>

      {/* ── Societies ──────────────────────────────────────── */}
      <section className="hp-section hp-societies" id="societies">
        <div className="hp-container">
          <span className="hp-overline">Our Chapters</span>
          <h2 className="hp-heading">Societies</h2>
          <p className="hp-subheading">
            Eight technical societies covering every domain of engineering —
            find your community.
          </p>
        </div>
        <div className="hp-societies-grid">
          <SocietyCards />
        </div>
      </section>

      {/* ── Team ───────────────────────────────────────────── */}
      <section className="hp-section hp-team" id="coreteam">
        <div className="hp-container">
          <span className="hp-overline">Leadership</span>
          <h2 className="hp-heading">Senior Executive Board 2024–25</h2>
          <p className="hp-subheading">
            Meet the student leaders driving IEEE CBIT forward this year.
          </p>
        </div>
        <TeamCarousel onSlideChange={setSlideIndex} />
      </section>

      {/* ── Events ─────────────────────────────────────────── */}
      <section className="hp-section hp-events" id="events">
        <div className="hp-container">
          <span className="hp-overline">What's On</span>
          <h2 className="hp-heading">Events</h2>
          <p className="hp-subheading">
            Workshops, competitions, and seminars — there's always something
            happening at IEEE CBIT.
          </p>
        </div>
        <div className="hp-container">
          <Events />
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <Footer />

    </div>
  );
}