import React from "react";
import NavBar from "./Navbar/Navbar";
import Footer from "./Footer";
import Events from "./Events";
import TeamMembers from "./TeamMembers";
import "./ComputerSociety.css"; 

const LeadershipMember = ({ name, position, imageSrc }) => (
  <div className="leadership-member">
    <img src={imageSrc} alt={`${name} - ${position}`} className="leadership-img" />
    <h3 className="leadership-name">{name}</h3>
    <p className="leadership-position">{position}</p>
  </div>
);

const VehicularTechnologySociety = ({ imgs, num }) => {
  const teamMembers = [
    { name: "GUTTY YUVA AKHILESH REDDDY", position: "Design" },
    { name: "MANCHOLLA RANATEJA", position: "Design" },
    { name: "P.SIDDHARTHA", position: "Design" },
    { name: "VENKATPRANITH REDDY", position: "Design" },
    { name: "BUSIREDDIGARI DHANUSHREDDY", position: "Documentation" },
    { name: "CHILLAPALLI NAVYA SRI LAKSHMI", position: "Documentation" },
    { name: "DSV SHIVA KUMAR", position: "Documentation" },
    { name: "MOHITH SAI VEMULA", position: "Documentation" },
    { name: "SYED ARHAM SOUBAN", position: "Documentation" },
    { name: "P.MANASA", position: "Events & PR" },
    { name: "SRICHANDANA VELAGAPUDI", position: "Events & PR" },
    { name: "CHELLUBOINA UDAY GANESH", position: "Social Media" },
    { name: "HARESH TATIKONDA", position: "Social Media" },
    { name: "NANDEESHWAR RAO VEERAMANENI", position: "Social Media" },
    { name: "GAALI SAI PRAHARSHITA", position: "Tech" },
    { name: "PRANAVENDRA SAMALA", position: "Tech" },
    { name: "SYED HUSSAIN FARAZ", position: "Tech" },
  ];

  const chairLeadership = [
    {
      name: "Chandana Reddy",
      position: "Chair",
      image: "../images/vts/img-1 2025.png", 
    },
    {
      name: "Devi Keerthana",
      position: "Vice Chair",
      image: "../images/vts/img-2 2025.png", 
    },
  ];

  return (
    <div className="cs-page-container">
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Vehicular Technology Society</h2>
        {/* <Carousel val="x" imgs={imgs} /> */}
        <p className="section-description">
        Accelerate your journey into the future of mobility with CBIT IEEE’s Vehicular Technology Society (VTS)! Aligned with the globally recognized IEEE VTS, our chapter brings together passionate students, engineers, and innovators exploring the cutting edge of transportation technology.

Dive into a world of intelligent transport systems, electric vehicles, autonomous driving, and V2X communication. Through expert-led workshops, hands-on sessions, and technical talks, VTS equips you with the skills and insights to thrive in a fast-evolving industry.

Collaborate with peers and professionals, access exclusive resources, and work on real-world challenges that impact the future of transportation. Whether you're passionate about smart mobility, sustainable transport, or automotive electronics, VTS gives you the platform to learn, lead, and innovate.

Join us in driving the future—one idea at a time.
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading">
        Society Heads 2024-2025
        </h2>
        <p className="section-description-text">
          Meet the dedicated members of our Vehicular Technology Society's Team
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
          <Events by="Vehicular Technology Society" />
        </section>

      <Footer />
    </div>
  );
};

export default VehicularTechnologySociety;