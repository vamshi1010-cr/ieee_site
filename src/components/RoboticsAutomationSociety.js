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

const RoboticsAutomationSociety = ({ imgs, num }) => {
  const teamMembers = [
    { name: "KEERTHANA POLEPEDDI", position: "Design" },
    { name: "MADHU SANKU", position: "Design" },
    { name: "SAMMETA SANTHOOSH", position: "Design" },
    { name: "JALAGAM HASINI", position: "Design" },
    { name: "K SHERYA", position: "Design" },
    { name: "ABINAV VANAM", position: "Documentation" },
    { name: "MOHASEEN HUSSAIN", position: "Social Media" },
    { name: "SIDDHARTHA KARRE", position: "Social Media" },
    { name: "CH HARSHAVARDHAN", position: "Social Media" },
    { name: "K VAMSHI CHANDRA REDDY", position: "Tech" },
    { name: "MUGDHA BATTULA", position: "Tech" },
    { name: "YERRA HARSHITH KUMAR", position: "Tech" },
  ];

  const chairLeadership = [
    {
      name: "Disha Jilella",
      position: "Chair",
      image: "../images/ras/img 1 2025.png", // <--- IMPORTANT: Update with actual filename
    },
    {
      name: "Tarini",
      position: "Vice Chair",
      image: "../images/ras/img 2 2025.png", // <--- IMPORTANT: Update with actual filename
    },
  ];

  return (
    <div  className="cs-page-container">
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Robotics and Automation Society</h2>
        {/* <Carousel val="x" imgs={imgs} /> */}
        <p className="section-description cs-description-spacing">
        The IEEE Robotics and Automation Society (IEEE RAS) is a global community dedicated to advancing innovation, education, and fundamental research in robotics and automation. IEEE RAS fosters the development and dissemination of scientific knowledge in these fields, supporting the professional growth of its members and promoting the impact of robotics and automation on society. Through conferences, publications, and technical activities, IEEE RAS connects professionals, researchers, and students, enabling collaboration and the exchange of ideas to drive technological advancements and address real-world challenges in robotics and automation. The society also provides resources for career development, including networking opportunities, technical workshops, and continuing education programs. IEEE RAS plays a pivotal role in shaping the future of robotics and automation, influencing industry standards and fostering the next generation of innovators and leaders in the field.
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading">
        Society Heads 2024-2025
        </h2>
        <p className="section-description-text">
          Meet the dedicated members of our Robotics and Automation Society's
          Team
        </p>
        {/* <CoreTeam num={num} folder="ckts" names={[" Rajeshwar reddy", ""]} /> */}

        
        
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
        <Events by="Robotics and Automation Society" />
      </section>
      <Footer />
    </div>
  );
};

export default RoboticsAutomationSociety;
