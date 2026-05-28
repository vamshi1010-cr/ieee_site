import React from "react";
import Cards from "./Cards";
import "./SocietyCards.css";

const SOCIETIES = [
  {
    img:         "images/c_n_s.jpg",
    societyName: "Circuits and Systems Society",
    description: "Building the future, one circuit at a time.",
    link:        "circuits-systems-society",
  },
  {
    img:         "images/com_soc.jpg",
    societyName: "Computer Society",
    description: "Dive into the future of computing.",
    link:        "computer-society",
  },
  {
    img:         "images/edu_soc.jpg",
    societyName: "Education Society",
    description: "Igniting a passion for STEM education.",
    link:        "education-society",
  },
  {
    img:         "images/pow_soc.jpg",
    societyName: "Power and Energy Society",
    description: "Shaping a sustainable future through power systems and energy innovation.",
    link:        "power-energy-society",
  },
  {
    img:         "images/robo_soc.jpg",
    societyName: "Robotics and Automation Society",
    description: "Innovation at the intersection of robotics and automation.",
    link:        "robotics-automation-society",
  },
  {
    img:         "images/sig_soc.jpg",
    societyName: "Signal Processing Society",
    description: "Unveiling the hidden world within signals.",
    link:        "signal-processing-society",
  },
  {
    img:         "images/won_soc.jpg",
    societyName: "Women in Engineering Society",
    description: "Empowering women to engineer the future.",
    link:        "women-engineering-society",
  },
  {
    img:         "images/vts_soc.jpg",
    societyName: "Vehicular Technology Society",
    description: "Connecting the world through vehicular technology.",
    link:        "vehicular-technology-society",
  },
];

export default function SocietyCards() {
  return (
    <div className="society-grid">
      {SOCIETIES.map((society) => (
        <Cards key={society.link} {...society} />
      ))}
    </div>
  );
}
