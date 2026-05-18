import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "antd";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home",    path: "/" },
  { label: "Events",  path: "/events" },   // note: your route is /events/:id, adjust if needed
  { label: "Login",   path: "/login" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled]     = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  /* Add shadow when user scrolls down */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close drawer on route change */
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <div className="navbar__inner">

          {/* ── Logo ─────────────────────────────────────────── */}
          <Link to="/" className="navbar__logo" aria-label="IEEE CBIT home">
            <img
              src="/ieee-logo.png"
              alt="IEEE logo"
              className="navbar__logo-img"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <div className="navbar__logo-text">
              <span className="navbar__logo-ieee">IEEE</span>
              <span className="navbar__logo-cbit">CBIT</span>
            </div>
          </Link>

          {/* ── Desktop links ─────────────────────────────────── */}
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`navbar__link${isActive(path) ? " navbar__link--active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── CTA button (desktop) ─────────────────────────── */}
          <Link to="/events" className="navbar__cta">
            Upcoming Events
          </Link>

          {/* ── Mobile hamburger ──────────────────────────────── */}
          <button
            className="navbar__hamburger"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
          >
            <HiOutlineMenuAlt3 size={24} />
          </button>

        </div>
      </nav>

      {/* ── Mobile Drawer ─────────────────────────────────────── */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        placement="right"
        width={280}
        closable={false}
        styles={{
          body: { padding: 0, background: "#003366" },
          mask: { backdropFilter: "blur(2px)" },
        }}
      >
        <div className="drawer__inner">

          {/* Drawer header */}
          <div className="drawer__header">
            <div className="navbar__logo-text">
              <span className="navbar__logo-ieee" style={{ color: "#fff" }}>IEEE</span>
              <span className="navbar__logo-cbit" style={{ color: "rgba(255,255,255,0.7)" }}>CBIT</span>
            </div>
            <button
              className="drawer__close"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <HiX size={22} />
            </button>
          </div>

          {/* Drawer links */}
          <ul className="drawer__links" role="list">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`drawer__link${isActive(path) ? " drawer__link--active" : ""}`}
                >
                  {label}
                  {isActive(path) && <span className="drawer__active-dot" aria-hidden="true" />}
                </Link>
              </li>
            ))}
          </ul>

          {/* Drawer footer CTA */}
          <div className="drawer__footer">
            <Link to="/events" className="drawer__cta" onClick={() => setDrawerOpen(false)}>
              Upcoming Events
            </Link>
          </div>

        </div>
      </Drawer>
    </>
  );
}
