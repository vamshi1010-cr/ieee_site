import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NavBar from "../..//components/Navbar/Navbar";
import { useCreateEvent } from "./useCreateEvent";
import toast from "react-hot-toast";

const CreateEventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [conductedBy, setConductedBy] = useState("");
  const [customConductedBy, setCustomConductedBy] = useState("");
  const [image, setImage] = useState([]);
  const { createEvent, isLoading } = useCreateEvent();

  function handleFileUpload(e) {
    const imgArr = [];
    for (let i = 0; i < e.target.files.length; i++) {
      imgArr.push(e.target.files[i]);
    }
    setImage(imgArr);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      description,
      date,
      image,
      location,
      conductedBy: conductedBy === "Other" ? customConductedBy : conductedBy,
    };
    if (
      title &&
      description &&
      date &&
      location &&
      (conductedBy || customConductedBy) &&
      image.length > 0
    ) {
      createEvent(newEvent);
      setTitle("");
      setDescription("");
      setDate("");
      setLocation("");
      setConductedBy("");
      setCustomConductedBy("");
      setImage([]);
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        marginTop: "100px",
      }}
    >
      <Container className="mt-4">
        <NavBar
          hideCoreTeam={true} // Hides "Core Team"
          hideEvents={true} // Hides "Events"
          hideContactUs={true} // Hides "Contact Us"
          additionalLinks={[
            { name: "Home", href: "/" }, // Adds "Home" link
          ]}
        />
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                    color: "#ffffff", // Updated font color to white
                  }}
                  className="mt-2"
                >
                  Title
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  disabled={isLoading}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    fontSize: "1rem",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                    color: "#ffffff", // Updated font color to white
                  }}
                  className="mt-2"
                >
                  Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  value={description}
                  disabled={isLoading}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    fontSize: "1rem",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="image">
                <Form.Label
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                    color: "#ffffff", // Updated font color to white
                  }}
                  className="mt-2"
                >
                  Event Image
                </Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Upload event images"
                  disabled={isLoading}
                  accept="image/*"
                  onChange={handleFileUpload}
                  multiple
                  name="images[]"
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    fontSize: "1rem",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="date">
                <Form.Label
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                    color: "#ffffff", // Updated font color to white
                  }}
                  className="mt-2"
                >
                  Date
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter date"
                  value={date}
                  disabled={isLoading}
                  onChange={(e) => setDate(e.target.value)}
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    fontSize: "1rem",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="location">
                <Form.Label
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                    color: "#ffffff", // Updated font color to white
                  }}
                  className="mt-2"
                >
                  Location
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  value={location}
                  disabled={isLoading}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    fontSize: "1rem",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="conductedBy">
                <Form.Label
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                    color: "#ffffff", // Updated font color to white
                  }}
                  className="mt-2"
                >
                  Conducted By
                </Form.Label>
                <Form.Control
                  as="select"
                  value={conductedBy}
                  disabled={isLoading}
                  onChange={(e) => setConductedBy(e.target.value)}
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    fontSize: "1rem",
                  }}
                >
                  <option value="">Select conducted by</option>
                  <option value="Robotics and Automation Society">
                    Robotics and Automation Society
                  </option>
                  <option value="Power and Energy Society">
                    Power and Energy Society
                  </option>
                  <option value="Women in Engineering Society">
                    Women in Engineering Society
                  </option>
                  <option value="Signal Processing Society">
                    Signal Processing Society
                  </option>
                  <option value="Computer Society">Computer Society</option>
                  <option value="Circuits and Systems Society">
                    Circuits and Systems Society
                  </option>
                  <option value="Vehicular Technology Society">
                    Vehicular Technology Society
                  </option>
                  <option value="Education Society">Education Society</option>
                  <option value="Other">Other</option>
                </Form.Control>
              </Form.Group>

              {conductedBy === "Other" && (
                <Form.Group controlId="customConductedBy">
                  <Form.Label
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      marginBottom: "10px",
                      color: "#ffffff", // Updated font color to white
                    }}
                    className="mt-2"
                  >
                    Please specify
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter who conducted the event"
                    value={customConductedBy}
                    disabled={isLoading}
                    onChange={(e) => setCustomConductedBy(e.target.value)}
                    style={{
                      borderRadius: "10px",
                      padding: "10px",
                      fontSize: "1rem",
                    }}
                  />
                </Form.Group>
              )}

              <Button
                className="mt-3"
                variant="primary"
                disabled={isLoading}
                type="submit"
                style={{
                  backgroundColor: "#1e90ff",
                  borderColor: "#1e90ff",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  fontSize: "1.2rem",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#4682b4")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#1e90ff")}
              >
                Create Event
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default React.memo(CreateEventForm);
