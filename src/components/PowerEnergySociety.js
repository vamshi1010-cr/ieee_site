import React from "react";
import NavBar from "./Navbar/Navbar";
import Footer from "./Footer";
import Events from "./Events";
import TeamMembers from "./TeamMembers";
import "./ComputerSociety.css";

// New component for displaying individual leadership members
const LeadershipMember = ({ name, position, imageSrc }) => (
  <div className="leadership-member">
    <img src={imageSrc} alt={`${name} - ${position}`} className="leadership-img" />
    <h3 className="leadership-name">{name}</h3>
    <p className="leadership-position">{position}</p>
  </div>
);

const PowerEnergySociety = ({ imgs, num }) => {
  const teamMembers = [
    { name: "RS VAIBHAV", position: "Design" },
    { name: "ANNAREDDY VISHNU VARDHAN REDDY", position: "Documentation" },
    { name: "PAVAN HANEESH MATTIGUNTA", position: "Documentation" },
    { name: "VULLI SAI VAIBHAV", position: "Documentation" },
    { name: "ABHINAV ADITYA KORIKANA", position: "Events & PR" },
    { name: "RAGHAVENDRA BADRI VISHAL BANDRI", position: "Events & PR" },
    { name: "RIYA KUMARI", position: "Events & PR" },
    { name: "VASU BHUKYA", position: "Events & PR" },
    { name: "TRIVARDHAN RACHAKONDA", position: "Social Media" },
    { name: "VELIDANDI SAKETH REDDY", position: "Technical" },
  ];

  // Define Chair and Vice Chair data (images can be added later)
  const chairLeadership = [
    {
      name: "Fatema Sihorwala",
      position: "Chair",
      image: "../images/pes/img0.jpg", // Placeholder for Chair image
    },
    {
      name: "Osman Pasha",
      position: "Vice Chair",
      image: "../images/pes/img1.jpg", // Placeholder for Vice Chair image
    },
  ];

  return (
    <div className="cs-page-container">
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Power and Energy Society</h2>
        <p className="section-description cs-description-spacing">
          The CBIT IEEE Student Chapter's Power & Energy Society (PES) branch
          ignites your passion for the world that energizes our lives. Aligned
          with the esteemed IEEE PES, we delve into the intricacies of electric
          power and energy. Explore a vast spectrum of topics, from power system
          planning and control to the future of renewable energy sources like
          solar and wind. Gain access to valuable publications, connect with
          industry professionals, and participate in workshops and conferences.
          Sharpen your skills through mentorship and potentially contribute to
          shaping sustainable energy solutions. Join our dynamic community and
          become a part of the revolution in power and energy!
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading">
          Society Heads 2024-2025
        </h2>
        <p className="section-description-text">
          Meet the dedicated members of our Power and Energy Society's Team
        </p>
        
        <div className="leadership-grid">
          {chairLeadership.map((member, index) => (
            <LeadershipMember
              key={index}
              name={member.name}
              position={member.position}
              imageSrc={member.image}
            />
          ))}
        </div>
        <h4 className="junior-eb-heading">Junior Executive Board</h4>
        <TeamMembers members={teamMembers} />
      </section>
      <section className="core-team-section" id="events">
        <h2 className="section-heading">Events</h2>
        <p className="section-description-text">Check out our past events.</p>
        <Events by="Power and Energy Society" />
      </section>

      <Footer by="power and energy society" />
    </div>
  );
};

export default PowerEnergySociety;
