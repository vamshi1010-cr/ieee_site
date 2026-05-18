import React, { useState } from "react";
import ContactForm from "./ContactForm";
import {
  FaLink,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const [isContactFormVisible, setContactFormVisible] = useState(false);

  return (
    <footer className="footer" id="contact1">

      {/* ── Main footer grid ──────────────────────────────── */}
      <div className="footer__inner">

        {/* Col 1 — Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-ieee">IEEE</span>
            <span className="footer__logo-cbit">CBIT</span>
          </div>
          <p className="footer__tagline">
            Advancing Technology for Humanity — IEEE Student Branch,
            Chaitanya Bharathi Institute of Technology, Hyderabad.
          </p>
          <p className="footer__region">
            Region 10 · Asia Pacific
          </p>
        </div>

        {/* Col 2 — Quick links */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Quick Links</h4>
          <ul className="footer__list">
            <li>
              <a href="/#about" className="footer__link">
                <FiInfo size={15} aria-hidden="true" />
                About
              </a>
            </li>
            <li>
              <a href="/#coreteam" className="footer__link">
                <FaUsers size={15} aria-hidden="true" />
                Team
              </a>
            </li>
            <li>
              <a href="/#events" className="footer__link">
                <FaCalendarAlt size={15} aria-hidden="true" />
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 — Get in touch */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Get In Touch</h4>
          <ul className="footer__list">
            <li>
              <a href="mailto:cbit_ieee@gmail.com" className="footer__link">
                <FaEnvelope size={15} aria-hidden="true" />
                cbit_ieee@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/ieee-cbit/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                <FaLinkedin size={15} aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/ieee_cbit?igshid=NzZlODBkYWE4Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                <FaInstagram size={15} aria-hidden="true" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linktr.ee/ieee_cbitsb"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                <FaLink size={15} aria-hidden="true" />
                Linktree
              </a>
            </li>
            <li>
              <a
                href="https://x.com/IeeeCbit"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                <FaTwitter size={15} aria-hidden="true" />
                Twitter / X
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4 — Visit us */}
        <div className="footer__col footer__col--map">
          <h4 className="footer__col-heading">Visit Us</h4>
          <div className="footer__map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.412650300959!2d78.31686187516509!3d17.391973483495942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94eba8ad7c87%3A0xb78f51ed556f7cc5!2sChaitanya%20Bharathi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1749901812802!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - CBIT Location"
            />
          </div>
          <p className="footer__address">
            Gandipet, Hyderabad, Telangana 500075
          </p>
        </div>

      </div>

      {/* ── Contact form toggle ───────────────────────────── */}
      <div className="footer__contact-wrap">
        <button
          className="footer__contact-btn"
          onClick={() => setContactFormVisible((v) => !v)}
          aria-expanded={isContactFormVisible}
        >
          {isContactFormVisible ? "Close Contact Form" : "Send Us a Message"}
        </button>

        {isContactFormVisible && (
          <div className="footer__contact-form">
            <ContactForm />
          </div>
        )}
      </div>

      {/* ── Bottom bar ────────────────────────────────────── */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} IEEE CBIT Student Branch. All rights reserved.
          </p>
          <p className="footer__disclaimer">
            A student branch of IEEE — Institute of Electrical and Electronics Engineers.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;