import React from "react";
import SocietyPage from "./SocietyPage";

const leadership = [
  { name: "Tarini Rudrashetty", position: "Chair", image: "images/ras/img 2 2025.png" },
  
   { name: "Y. Harshith Kumar", position: "Vice Chair", image: "images/ras/img 1 2025.png" },
];

const juniorEB = [
  { name: "Keerthana Polepeddi",   position: "Design" },
  { name: "Madhu Sanku",           position: "Design" },
  { name: "Sammeta Santhoosh",     position: "Design" },
  { name: "Jalagam Hasini",        position: "Design" },
  { name: "K Sherya",              position: "Design" },
  { name: "Abinav Vanam",          position: "Documentation" },
  { name: "Mohaseen Hussain",      position: "Social Media" },
  { name: "Siddhartha Karre",      position: "Social Media" },
  { name: "CH Harshavardhan",      position: "Social Media" },
  { name: "K Vamshi Chandra Reddy",position: "Tech" },
  { name: "Mugdha Battula",        position: "Tech" },
];

export default function RoboticsAutomationSociety() {
  return (
    <SocietyPage
      name="Robotics and Automation Society"
      abbr="RAS"
      description="The IEEE Robotics and Automation Society (IEEE RAS) is a global community dedicated to advancing innovation, education, and fundamental research in robotics and automation. IEEE RAS fosters the development and dissemination of scientific knowledge in these fields, supporting the professional growth of its members and promoting the impact of robotics and automation on society. Through conferences, publications, and technical activities, IEEE RAS connects professionals, researchers, and students, enabling collaboration and the exchange of ideas to drive technological advancements and address real-world challenges in robotics and automation."
      eventsBy="Robotics and Automation Society"
      leadership={leadership}
      juniorEB={juniorEB}
    />
  );
}
