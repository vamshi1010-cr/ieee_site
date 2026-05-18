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

const ComputerSociety = ({ imgs, num }) => {
  const teamMembers = [
    { name: "ANUMULA SRI HASINI", position: "Design" },
    { name: "TEJASREE JILLA", position: "Design" },
    { name: "HRISHIKESH REDDY", position: "Documentation" },
    { name: "GUBBALA MANI VARSHA", position: "Tech" },
    { name: "VENKATA SHASHANK", position: "Tech" },
    { name: "SRIKAR ACHARYA", position: "Tech" },
    { name: "NIKHIL HAZARI", position: "Tech" },
    { name: "PRAGALLAPATI SAKETH", position: "Tech" },
    { name: "PULLAYI THRISHA", position: "Tech" },
    { name: "RUSHIL SARAPU", position: "Tech" },
    { name: "SHASHIDHAR NAGUNURI", position: "Tech" },
    { name: "VISHNU VARDHAN", position: "Tech" },
    { name: "P.S.MAYOOR", position: "Social Media & PR" },
    { name: "SAKETH VEMULAPATI", position: "Social Media & PR" },
    { name: "HARSH KUMAR", position: "Events" },
  ];

  // Define your Chair and Vice Chair data with direct image paths
  const chairLeadership = [
    {
      name: "Sriya Kotagiriwar",
      position: "Chair",
      image: "../images/cs/img-1 2025.png", // <--- IMPORTANT: Update with actual filename
    },
    {
      name: "Indu Priya",
      position: "Vice Chair",
      image: "../images/cs/img-2 2025.png", // <--- IMPORTANT: Update with actual filename
    },
  ];

  return (
    <div className="cs-page-container">
      <NavBar itemId="about" itemName="About" teamType="Team" />

      {/* About Section */}
      <section className="society-section" id="about">
        <h2 className="section-heading">Computer Society</h2>
        {/* <Carousel val="x" imgs={imgs} /> */}
        <p className="section-description cs-description-spacing">
          Aligned with the world's leading IEEE Computer Society, the CBIT
          IEEE's CS branch empowers your exploration of computing. Delve into a
          vast array of topics, from fundamentals to cutting-edge AI and Machine
          Learning. Access valuable IEEE CS publications, network with
          professionals, and participate in workshops and hackathons. Gain
          career guidance, mentorship, and leadership opportunities. Join our
          passionate community and embark on a transformative journey in
          computing!
        </p>
      </section>

      {/* Leadership Team Section (replaces CoreTeam for Chair/Vice Chair) */}
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading">
          Society Heads 2024-2025
        </h2>
        
        <p className="section-description-text">
          Meet the dedicated leadership of our Computer Society's Team.
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

      {/* Events Section */}
      <section className="core-team-section" id="events">
        <h2 className="section-heading">Events</h2>
        <p className="section-description-text">Check out our past events.</p>
        <Events by="Computer Society" />
      </section>

      <Footer />
    </div>
  );
};

export default ComputerSociety;