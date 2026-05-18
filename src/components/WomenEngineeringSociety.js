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

const WomenEngineering = ({ imgs, num }) => {
  const teamMembers = [
    { name: "NAVYA VIPPARTHI", position: "Design" },
    { name: "NIHARIKA SINGH", position: "Design" },
    { name: "CHEEMARLA RISHITHA", position: "Documentation" },
    { name: "NAINAPALLY RASHMIKA", position: "Documentation" },
    { name: "KUNREDDY SRUTHI", position: "Events & PR" },
    { name: "GEETHIKA.G", position: "Social Media" },
    { name: "HIRANMAI BANALA", position: "Social Media" },
    { name: "N SOUMYA", position: "Social Media" },
  ];

  const chairLeadership = [
    {
      name: "Sri Sarayu",
      position: "Chair",
      image: "../images/wie/img-1 2025.png", // <--- IMPORTANT: Update with actual filename
    },
    {
      name: "Drithi Reddy",
      position: "Vice Chair",
      image: "../images/wie/img-2 2025.png", // <--- IMPORTANT: Update with actual filename
    },
  ];

  return (
    <div className="cs-page-container">
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Women in Engineering Society</h2>
        {/* <Carousel val="x" imgs={imgs} /> */}
        <p className="section-description cs-description-spacing">
          The CBIT IEEE Women in Engineering (WIE) branch, a vibrant extension
          of the global IEEE WIE initiative, empowers you to excel in
          engineering and technology. Here, you'll find a network of supportive
          peers and industry professionals, ready to connect and collaborate.
          Gain access to valuable resources and participate in workshops,
          conferences, and professional development events designed to hone your
          skills and propel you towards your career goals. Benefit from
          insightful mentorship opportunities, fostering your leadership
          potential. Don't just excel yourself, but become a role model!
          Participate in WIE's outreach programs, inspiring young girls to
          pursue STEM careers and contributing to a more diverse and inclusive
          engineering landscape for the future. Join the CBIT IEEE WIE and be a
          part of something bigger.
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading">
        Society Heads 2024-2025
        </h2>
        <p className="section-description-text">
          Meet the dedicated members of our Women in Engineering Society's Team
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
        <Events by="Women in Engineering Society" />
      </section>
      <Footer />
    </div>
  );
};

export default WomenEngineering;
