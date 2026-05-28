import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <div className="pnf">

      {/* Dot grid background */}
      <div className="pnf__dotgrid" aria-hidden="true" />

      <div className="pnf__inner">

        {/* Large 404 */}
        <div className="pnf__code" aria-hidden="true">404</div>

        {/* Content */}
        <div className="pnf__content">
          <span className="pnf__overline">Page Not Found</span>
          <h1 className="pnf__heading">
            Looks like this page<br />doesn't exist.
          </h1>
          <p className="pnf__body">
            The page you're looking for may have been moved, renamed, or
            doesn't exist. Head back to the homepage and explore from there.
          </p>

          <div className="pnf__actions">
            <Link to="/" className="pnf__btn pnf__btn--primary">
              Back to Home
            </Link>
            <Link to="/#societies" className="pnf__btn pnf__btn--outline">
              Explore Societies
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
