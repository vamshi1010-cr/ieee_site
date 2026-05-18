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

const SignalProcessingSociety = ({ imgs, num }) => {
  const teamMembers = [
    { name: "LINGAM SAI TEJA", position: "Design" },
    { name: "PALAPARTHI VAIDEHI", position: "Design" },
    { name: "PAINENI JAHNAVI", position: "Design" },
    { name: "AKASH SUDHIR", position: "Documentation" },
    { name: "SRI SATHVIK VARMA SARIPELLA", position: "Documentation" },
    { name: "MEGHA ANNAVARAPU", position: "Events & PR" },
    { name: "SHEROJI RAHUL", position: "Events & PR" },
    { name: "SOUMYA VEMURI", position: "Events & PR" },
    { name: "YEKULA MAHIDHAR KUMAR REDDY", position: "Events & PR" },
    { name: "A RAJESHWARI", position: "Social Media" },
    { name: "RUKMINI LANKA", position: "Social Media" },
    { name: "KURA SAMIKSHA REDDY", position: "Tech" },
    { name: "MADHURI", position: "Tech" },
    { name: "VANGALA BHAVYA SRI", position: "Tech" },
    { name: "K SAI SUSHANTH REDDY", position: "Design" },
  ];

  const chairLeadership = [
    {
      name: "Sruthi Madhavan",
      position: "Chair",
      image: "../images/sps/img-1 2025.png", // <--- IMPORTANT: Update with actual filename
    },
    {
      name: "Surya Teja",
      position: "Vice Chair",
      image: "../images/sps/img-2 2025.png", // <--- IMPORTANT: Update with actual filename
    },
  ];

  return (
    <div className="cs-page-container">
      <NavBar itemId="about" itemName="About" teamType="Team" />
      <section className="society-section" id="about">
        <h2 className="section-heading">Signal Processing Society</h2>
        {/* <Carousel val="x" imgs={imgs} /> */}
        <p className="section-description cs-description-spacing">
          The CBIT IEEE Student Chapter's Signal Processing Society (SPS) branch
          fuels your passion for analyzing, interpreting, and manipulating
          signals - the building blocks of audio, speech, images, and more.
          Aligned with the world's leading IEEE SPS, we offer a comprehensive
          exploration of this dynamic field. From core signal and image
          processing to cutting-edge applications in speech, audio, multimedia,
          and communication, you'll gain access to valuable resources, connect
          with experts, and participate in workshops and conferences. Sharpen
          your skills, gain insights through mentorship, and potentially
          contribute to groundbreaking research. Join our vibrant community and
          embark on a rewarding journey into the world of signals!
        </p>
      </section>
      <section className="core-team-section" id="coreteam">
        <h2 className="section-heading">
          Society Heads 2024-2025
        </h2>
        <p className="section-description-text">
          Meet the dedicated members of our Signal Processing Society's Team
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
        <Events by="Signal Processing Society" />
      </section>
      <Footer />
    </div>
  );
};

export default SignalProcessingSociety;
