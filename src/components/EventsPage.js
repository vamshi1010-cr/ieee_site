import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "./Carousel";
import NavBar from "./Navbar/Navbar";
import EventNotFound from "./EventNotFound";
// import events from "../static/event_details";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import { useEvent } from "../features/events/useEvent";
import Spinner from "./Spinner";
import styled from "styled-components";

const Fullpage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const EventsPage = () => {
  const { id } = useParams();
  const { event: selectedEvent, isLoading } = useEvent(id);

  useEffect(() => {
    const titleElement = document.getElementById("event-title");
    if (titleElement) {
      titleElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedEvent]);

  if (!isLoading && !selectedEvent) return <EventNotFound />;

  if (isLoading)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );

  return (
    <div className="app-container">
      <>
        <NavBar itemId="event-title" itemName="Event" val="x" hideCoreTeam={true} />
        <div className="section" id="home">
          {/* <ImageCarousel /> */}
          <Carousel
            // imgs={["robo_soc.jpg", "robo_soc.jpg"]}
            imgs={selectedEvent.image}
            ie="y"
          />
        </div>
        <hr className="section-divider" />
        <div className="section" id="event-details">
          <Container>
            <Row>
              <Col>
                <h1 id="event-title" style={{ textAlign: "center", color: "white" }}>
                  {selectedEvent.title}
                </h1>
                <p style={{ fontSize: "17px", color: "white" }}>
                  {selectedEvent.description}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <hr className="section-divider" />
        <div className="section" id="event-date">
          <Container>
            <Row>
              <Col>
                <h2 style={{ fontSize: "25px", color: "white" }}>Date</h2>
                <p style={{ color: "white" }}>{selectedEvent.date}</p>
              </Col>
            </Row>
          </Container>
          <hr className="section-divider" />

          <Container>
            <Row>
              <Col>
                <h2 style={{ fontSize: "25px", color: "white" }}>Location</h2>
                <p style={{ color: "white" }}>{selectedEvent.location}</p>
              </Col>
            </Row>
          </Container>
          <hr className="section-divider" />

          <Container>
            <Row>
              <Col>
                <h2 style={{ fontSize: "25px", color: "white" }}>Conducted by</h2>
                <p style={{ fontStyle: "italic", fontSize: "20px", color: "white" }}>
                  {selectedEvent.conductedBy}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <hr className="section-divider" />

        {/* <hr className="section-divider" /> */}
        <Footer />
      </>
    </div>
  );
};

export default React.memo(EventsPage);
