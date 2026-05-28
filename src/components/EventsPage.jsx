import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";
import EventNotFound from "./EventNotFound";
import Spinner from "./Spinner";
import { useEvent } from "../features/events/useEvent";
import "./EventsPage.css";

const EventsPage = () => {
  const { id } = useParams();
  const { event: selectedEvent, isLoading } = useEvent(id);

  /* Scroll to top when event loads */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedEvent]);

  if (isLoading)
    return (
      <div className="ep-spinner">
        <Spinner />
      </div>
    );

  if (!isLoading && !selectedEvent) return <EventNotFound />;

  const formatDate = (dateStr) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-IN", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="ep">

      {/* ── Image carousel ────────────────────────────────── */}
      <div className="ep__carousel-wrap">
        <Carousel imgs={selectedEvent.image} ie="y" />
      </div>

      {/* ── Main content ──────────────────────────────────── */}
      <div className="ep__body">
        <div className="ep__container">

          {/* Back link */}
          <Link to="/" className="ep__back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>

          {/* Society tag */}
          {selectedEvent.conductedBy && (
            <span className="ep__tag">{selectedEvent.conductedBy}</span>
          )}

          {/* Title */}
          <h1 className="ep__title" id="event-title">
            {selectedEvent.title}
          </h1>

          {/* Meta row */}
          <div className="ep__meta">
            {selectedEvent.date && (
              <div className="ep__meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>{formatDate(selectedEvent.date)}</span>
              </div>
            )}
            {selectedEvent.location && (
              <div className="ep__meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{selectedEvent.location}</span>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="ep__divider" aria-hidden="true" />

          {/* Description */}
          <div className="ep__content">
            <p className="ep__description">{selectedEvent.description}</p>
          </div>

          {/* Info cards */}
          <div className="ep__info-grid">
            {selectedEvent.date && (
              <div className="ep__info-card">
                <span className="ep__info-label">Date</span>
                <span className="ep__info-value">{formatDate(selectedEvent.date)}</span>
              </div>
            )}
            {selectedEvent.location && (
              <div className="ep__info-card">
                <span className="ep__info-label">Location</span>
                <span className="ep__info-value">{selectedEvent.location}</span>
              </div>
            )}
            {selectedEvent.conductedBy && (
              <div className="ep__info-card">
                <span className="ep__info-label">Conducted By</span>
                <span className="ep__info-value">{selectedEvent.conductedBy}</span>
              </div>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default React.memo(EventsPage);
