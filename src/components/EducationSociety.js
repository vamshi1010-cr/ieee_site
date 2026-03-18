import React from "react";
import NavBar from "./NavBar";
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

const EducationSociety = ({ imgs, num }) => {
  const teamMembers = [
    { name: "BHEEMA SAI RITHVIK", position: "Design" },
    { name: "SHAGANTI JENNIFER SHALOM", position: "Design" },
    { name: "AKELLA HARSHITH SAIPAAVAN", position: "Documentation" },
    { name: "ANUGU SRINITHI REDDY", position: "Documentation" },
    { name: "T.SAI SHARAN", position: "Documentation" },
    { name: "M.KOUSHIK RAM REDDY", position: "Events & PR" },
    { name: "N.YASHWANTH SARMA", position: "Events & PR" },
    { name: "POTHYREDDY LIKHITHA", position: "Events & PR" },
    { name: "TANVI BEJADI", position: "Socail Media" },
    { name: "MAHIT HAZARI", position: "Tech" },
    
  ];

  const chairLeadership = [
    {
      name: "Sowmya Nihitha",
      position: "Chair",
      image: "../images/es/img-1 2025.png", // <--- IMPORTANT: Update with actual filename
    },
    {
      name: "Koushik Ram Reddy",
      position: "Vice Chair",
      image: "../images/es/img-2 2025.png", // <--- IMPORTANT: Update with actual filename
    },
  ];

  return (
    <div className="cs-page-container" style={{minHeight: '100vh' }}>
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Education Society</h2>
        {/* <Carousel val="x" imgs={imgs} /> */}
        <p className="section-description" style={{textAlign: 'justify'}}>
          Fuel your passion for education and empower the next generation of
          engineers and computer scientists with the CBIT IEEE's Education
          Society branch! Aligned with the world-renowned IEEE EdSoc, we provide
          a dynamic platform for educators to connect, collaborate, and grow.
          Immerse yourself in a vibrant community of passionate educators,
          researchers, and industry professionals. Sharpen your skills through
          workshops, webinars, and summer institutes, exploring innovative
          teaching methodologies and accessing a wealth of resources designed to
          boost student engagement and learning outcomes. Don't just develop
          your own skills, be part of shaping the future! Collaborate with
          fellow educators, share best practices, and contribute to
          groundbreaking advancements in STEM education. The EdSoc actively
          advocates for strong STEM education policies, and you can join us in
          raising awareness about the importance of robust engineering and
          computer science programs. Together, let's ensure students are
          equipped with the knowledge and skills necessary to thrive in the
          ever-evolving world
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading" style={{ textAlign: "center" }}>
          Society Heads 2024-2025
        </h2>
        <p className="section-description-text" style={{ textAlign: "center" }}>
          Meet the dedicated members of our Education Society's Team
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
          <Events by="Education Society" />
        </section>

      <Footer />
    </div>
  );
};

export default EducationSociety;
