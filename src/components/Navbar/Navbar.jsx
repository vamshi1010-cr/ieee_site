import { useUser } from "../../features/authentication/useUser";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "antd";
import { HiOutlineMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import "./Navbar.css";

const SOCIETIES = [
  { label: "Circuits and Systems",    path: "/circuits-systems-society",    abbr: "CAS" },
  { label: "Computer Society",        path: "/computer-society",            abbr: "CS"  },
  { label: "Education Society",       path: "/education-society",           abbr: "ES"  },
  { label: "Power and Energy",        path: "/power-energy-society",        abbr: "PES" },
  { label: "Robotics and Automation", path: "/robotics-automation-society", abbr: "RAS" },
  { label: "Signal Processing",       path: "/signal-processing-society",   abbr: "SPS" },
  { label: "Women in Engineering",    path: "/women-engineering-society",   abbr: "WIE" },
  { label: "Vehicular Technology",    path: "/vehicular-technology-society",abbr: "VTS" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled,     setScrolled]     = useState(false);
  const [drawerOpen,   setDrawerOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobiSocOpen,  setMobiSocOpen]  = useState(false);
  const dropRef = useRef(null);
  const { isAuthenticated } = useUser();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setDrawerOpen(false); }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const isSocietyActive = SOCIETIES.some((s) => location.pathname.startsWith(s.path));

  return (
    <>
      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
       <div className="navbar__inner">
  {/* ── LEFT — Brand ───────────────────────────────────────── */}
  <Link to="/" className="navbar__brand" aria-label="IEEE CBIT home">
    <img src="/ieee-cbit-logo.png" alt="IEEE CBIT" className="navbar__logo-img" />
    <div className="navbar__brand-text">
      <span className="navbar__brand-name">IEEE CBIT</span>
      <span className="navbar__brand-sub">Student Branch</span>
    </div>
  </Link>

  {/* ── RIGHT — Menu (Links + Actions + Hamburger) ─────────── */}
  <div className="navbar__menu">
    
    {/* Navigation Links */}
    <ul className="navbar__links">
      <li>
        <Link to="/" className={`navbar__link${isActive("/") ? " navbar__link--active" : ""}`}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/#events" className="navbar__link">Events</Link>
      </li>
      
      {/* Societies dropdown */}
      <li className="navbar__dropdown-wrap" ref={dropRef}>
        <button
          className={`navbar__link navbar__dropdown-btn${isSocietyActive ? " navbar__link--active" : ""}`}
          onClick={() => setDropdownOpen((v) => !v)}
          aria-expanded={dropdownOpen}
        >
          Societies
          <HiChevronDown
            className={`navbar__chevron${dropdownOpen ? " navbar__chevron--open" : ""}`}
            size={14}
          />
        </button>

        {dropdownOpen && (
          <div className="navbar__dropdown">
            <div className="navbar__dropdown-grid">
              {SOCIETIES.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="navbar__dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="navbar__dropdown-abbr">{s.abbr}</span>
                  <span className="navbar__dropdown-label">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </li>

      {isAuthenticated && (
        <li>
          <Link to="/add-event" className={`navbar__link${isActive("/add-event") ? " navbar__link--active" : ""}`}>
            Add Event
          </Link>
        </li>
      )}
    </ul>

    {/* Action Buttons */}
    <div className="navbar__actions">
      <Link to="/login" className="navbar__action-link">Login</Link>
      <Link to="/#contact1" className="navbar__action-link">Contact</Link>
      <Link to="/gallery" className="navbar__action-link">Gallery</Link>
      <a href="https://www.ieee.org/membership/join/index.html"
        target="_blank" rel="noreferrer"
        className="navbar__action-link navbar__action-join">
        Join IEEE
      </a>
      <Link to="/#events" className="navbar__cta">Upcoming Events</Link>
    </div>

    {/* Mobile hamburger */}
    <button className="navbar__hamburger" onClick={() => setDrawerOpen(true)}>
      <HiOutlineMenuAlt3 size={24} />
    </button>

  </div>
</div>
      </nav>

      {/* ── Mobile Drawer ─────────────────────────────────── */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        placement="right"
        width={300}
        closable={false}
        styles={{
          body: { padding: 0, background: "#006699" },
          mask: { backdropFilter: "blur(2px)" },
        }}
      >
        <div className="drawer__inner">
          <div className="drawer__header">
            <img src="/ieee-cbit-logo.png" alt="IEEE CBIT"
              style={{ height: 40, filter: "brightness(0) invert(1)" }} />
            <button className="drawer__close" onClick={() => setDrawerOpen(false)}>
              <HiX size={22} />
            </button>
          </div>

          <ul className="drawer__links">
            <li>
              <Link to="/"
                className={`drawer__link${isActive("/") ? " drawer__link--active" : ""}`}>
                Home
                {isActive("/") && <span className="drawer__active-dot" />}
              </Link>
            </li>
            <li><Link to="/#events" className="drawer__link">Events</Link></li>

            {/* Societies accordion */}
            <li>
              <button
                className="drawer__link drawer__accordion-btn"
                onClick={() => setMobiSocOpen((v) => !v)}
              >
                Societies
                <HiChevronDown
                  className={`navbar__chevron${mobiSocOpen ? " navbar__chevron--open" : ""}`}
                  size={14}
                />
              </button>
              {mobiSocOpen && (
                <ul className="drawer__sub">
                  {SOCIETIES.map((s) => (
                    <li key={s.path}>
                      <Link to={s.path} className="drawer__sub-link"
                        onClick={() => setDrawerOpen(false)}>
                        <span className="drawer__sub-abbr">{s.abbr}</span>
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link to="/login"     className="drawer__link">Login</Link></li>
            <li>
              <Link to="/#contact1" className="drawer__link"
                onClick={() => setDrawerOpen(false)}>Contact</Link>
            </li>
            <li><Link to="/gallery"   className="drawer__link">Gallery</Link></li>
            {isAuthenticated && (
              <li><Link to="/add-event" className="drawer__link">Add Event</Link></li>
            )}
          </ul>

          <div className="drawer__footer">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank" rel="noreferrer"
              className="drawer__cta drawer__cta--outline"
            >
              Join IEEE
            </a>
            <Link to="/#events" className="drawer__cta"
              onClick={() => setDrawerOpen(false)}>
              Upcoming Events
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
}
