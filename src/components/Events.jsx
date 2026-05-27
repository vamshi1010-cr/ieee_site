import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { HiTrash } from "react-icons/hi2";
import { useEvents } from "../features/events/useEvents";
import Spinner from "./Spinner";
import EventButtonIcon from "./EventButtonIcon";
import { useUser } from "../features/authentication/useUser";
import { useDeleteEvent } from "../features/events/useDeleteEvent";
import EventNotFound from "../components/EventNotFound";
import "./Events.css";

const imgs = ["temp.jpg"];

const Events = ({ by = "" }) => {
  const { isLoading, events: allEvents } = useEvents();
  const { isAuthenticated } = useUser();
  const { isDeleting, deleteEvent } = useDeleteEvent();
  const navigate = useNavigate();

  const events = useMemo(() => {
    return by === ""
      ? allEvents || []
      : (allEvents || []).filter((event) => event.conductedBy.includes(by));
  }, [allEvents, by]);

  const INITIAL_COUNT = 3;
  const [eventsToShow, setEventsToShow]           = useState(INITIAL_COUNT);
  const [showFullDesc, setShowFullDesc]           = useState([]);
  const [visibleCards, setVisibleCards]           = useState([]);
  const eventsRef = useRef(null);

  /* Intersection observer — fade cards in */
  useEffect(() => {
    const el = eventsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          setVisibleCards(events.map((_, i) => i));
      },
      { threshold: 0.1 }
    );
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [events]);

  const handleViewMore = () =>
    setEventsToShow((prev) =>
      prev === INITIAL_COUNT ? events.length : INITIAL_COUNT
    );

  const handleToggleDesc = (index) =>
    setShowFullDesc((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });

  const truncate = (text, limit, index) => {
    if (showFullDesc[index]) return text;
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "…"
      : text;
  };

  /* Format date nicely if possible */
  const formatDate = (dateStr) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "numeric", month: "short", year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  if (isLoading || isDeleting) return <Spinner />;
  if (!isLoading && events.length === 0) return <EventNotFound check={false} />;

  return (
    <div ref={eventsRef}>

      {/* ── Events grid ───────────────────────────────────── */}
      <div className="events-grid">
        {events.slice(0, eventsToShow).map((event, index) => (
          <article
            key={event.id ?? index}
            className={`event-card ${visibleCards.includes(index) ? "event-card--visible" : ""}`}
            style={{ transitionDelay: `${index * 0.08}s` }}
          >
            {/* Image */}
            <div className="event-card__img-wrap">
              <img
                src={event.image.split("--")[0] || `images/${imgs[0]}`}
                alt={event.title}
                className="event-card__img"
                loading="lazy"
              />
              {/* Date badge */}
              <div className="event-card__date-badge" aria-label={`Event date: ${event.date}`}>
                <span className="event-card__date-day">
                  {formatDate(event.date).split(" ")[0]}
                </span>
                <span className="event-card__date-mon">
                  {formatDate(event.date).split(" ")[1] || ""}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="event-card__body">

              {/* Society tag */}
              {event.conductedBy && (
                <span className="event-card__tag">{event.conductedBy}</span>
              )}

              {/* Title */}
              <h3 className="event-card__title">{event.title}</h3>

              {/* Description */}
              <p
                className="event-card__desc"
                onClick={() => handleToggleDesc(index)}
                title="Click to expand"
              >
                {truncate(event.description, 18, index)}
                <button className="event-card__toggle" aria-label="Toggle description">
                  {showFullDesc[index] ? " show less" : " read more"}
                </button>
              </p>

              {/* Actions */}
              <div className="event-card__actions">
                <button
                  className="event-card__btn"
                  onClick={() => navigate(`/events/${event.id}`)}
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

                {isAuthenticated && (
                  <EventButtonIcon onClick={() => deleteEvent(event.id)}>
                    <HiTrash />
                  </EventButtonIcon>
                )}
              </div>

            </div>

            {/* Hover accent */}
            <div className="event-card__accent" aria-hidden="true" />
          </article>
        ))}
      </div>

      {/* ── View more / less ──────────────────────────────── */}
      {events.length > INITIAL_COUNT && (
        <div className="events-more">
          <button className="events-more__btn" onClick={handleViewMore}>
            {eventsToShow === INITIAL_COUNT ? "View All Events" : "Show Less"}
          </button>
        </div>
      )}

    </div>
  );
};

export default React.memo(Events);
