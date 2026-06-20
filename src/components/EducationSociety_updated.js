import React from "react";
import SocietyPage from "./SocietyPage";

const leadership = [
  { name: "Anugu Srinithi",         position: "Chair",      image: "images/es/img-1 2025.png" },
  { name: "M. Koushik Ram Reddy",   position: "Vice Chair",  image: "images/es/img-2 2025.png" },
];

const juniorEB = [
  { name: "Bheema Sai Rithvik",        position: "Design" },
  { name: "Shaganti Jennifer Shalom",  position: "Design" },
  { name: "Akella Harshith Saipaavan", position: "Documentation" },
  { name: "T. Sai Sharan",             position: "Documentation" },
  { name: "N. Yashwanth Sarma",        position: "Events & PR" },
  { name: "Pothyreddy Likhitha",       position: "Events & PR" },
  { name: "Tanvi Bejadi",              position: "Social Media" },
  { name: "Mahit Hazari",              position: "Tech" },
];

export default function EducationSociety() {
  return (
    <SocietyPage
      name="Education Society"
      abbr="ES"
      description="Fuel your passion for education and empower the next generation of engineers and computer scientists with the CBIT IEEE Education Society branch! Aligned with the world-renowned IEEE EdSoc, we provide a dynamic platform for educators to connect, collaborate, and grow. Immerse yourself in a vibrant community of passionate educators, researchers, and industry professionals. Sharpen your skills through workshops, webinars, and summer institutes, exploring innovative teaching methodologies and accessing a wealth of resources designed to boost student engagement and learning outcomes. Together, let's ensure students are equipped with the knowledge and skills necessary to thrive in the ever-evolving world."
      eventsBy="Education Society"
      leadership={leadership}
      juniorEB={juniorEB}
    />
  );
}
