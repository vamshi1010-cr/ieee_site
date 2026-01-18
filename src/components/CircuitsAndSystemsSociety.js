import React from "react";
import NavBar from "./NavBar";
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
const CircuitsAndSystems = ({ imgs, num }) => {
  const teamMembers = [
    { name: "LIKITA REDDY CHITTI", position: "Design" },
    { name: "NM ADARSH", position: "Design" },
    { name: "GAGANDEEP SAI", position: "Design" },
    { name: "PRANAVI", position: "Documentation" },
    { name: "ROHITH PATEL", position: "Documentation" },
    { name: "VEERA BRAMENDRA", position: "Documentation" },
    { name: "AZMEERA JAMPANNA", position: "Events & PR" },
    { name: "GOPTHRI YELLAPRAGADA", position: "Events & PR" },
    { name: "KORPOLE KRISHNA KARTHIK REDDY", position: "Events & PR" },
    { name: "MALKA SAI HAMSINI", position: "Events & PR" },
    { name: "RAMAKANTH P.S.K", position: "Events & PR" },
    { name: "VEDAVRATH MANDALA", position: "Events & PR" },
    { name: "VETURI BALA SAI DATTA", position: "Events & PR" },
    { name: "KAVARTHAPU JAYA VENKATA RAJESH", position: "Events & PR" },
    { name: "KAVARTHAPU JAYA VENKATA RAJESH", position: "Social Media" },
    { name: "KRITHISHA VUPPALA", position: "Social Media" },
    { name: "PRABHUGARI SRI KRUTHI", position: "Tech" },
    
    
  ];

  // Define your Chair and Vice Chair data with direct image paths
const chairLeadership = [
  {
    name: "Samith",
    position: "Chair",
    image: "/images/ckts/img1-2025.png",
  },
  {
    name: "T.Devi Sree Varshini",
    position: "Vice Chair",
    image: "/images/ckts/img2-2025.png",
  },
];


  return (
    <div className="cs-page-container">
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Circuits and Systems Society</h2>
        {/* <Carousel val="x" imgs={imgs} /> */}
        <p className="section-description cs-description-spacing">
          Dive deeper into the building blocks of technology with the CBIT IEEE
          Circuits and Systems (CAS) branch! Aligned with the world-renowned
          IEEE CAS society, we offer a comprehensive exploration of this dynamic
          field. From the fundamentals of analog and digital circuits to
          cutting-edge applications in integrated circuits, signal processing,
          communication systems, and even neural networks, you'll gain access to
          valuable resources, connect with experts, and participate in workshops
          and conferences. Sharpen your skills through mentorship, potentially
          contribute to groundbreaking research, and collaborate with industry
          professionals to bridge the gap between theory and real-world
          applications. Join our vibrant community and embark on a rewarding
          journey into the world of circuits and systems!
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading" style={{ textAlign: "center" }}>
          Society Heads 2024-2025
        </h2>
        <p className="section-description-text" style={{ textAlign: "center" }}>
          Meet the dedicated members of our Circuits and Systems Society's Team
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
        <Events by="Circuits and Systems Society" />
      </section>
    </div>
  );
};

export default CircuitsAndSystems;
