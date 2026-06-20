import React from "react";
import SocietyPage from "./SocietyPage";

const leadership = [
  { name: "Pullayi Thrisha", position: "Chair",      image: "images/cs/img-1 2025.png" },
  { name: "Mahit Hazari",    position: "Vice Chair",  image: "images/cs/img-2 2025.png" },
];

const juniorEB = [
  { name: "Anumula Sri Hasini",     position: "Design" },
  { name: "Tejasree Jilla",         position: "Design" },
  { name: "Hrishikesh Reddy",       position: "Documentation" },
  { name: "Gubbala Mani Varsha",    position: "Tech" },
  { name: "Venkata Shashank",       position: "Tech" },
  { name: "Srikar Acharya",         position: "Tech" },
  { name: "Nikhil Hazari",          position: "Tech" },
  { name: "Pragallapati Saketh",    position: "Tech" },
  { name: "Rushil Sarapu",          position: "Tech" },
  { name: "Shashidhar Nagunuri",    position: "Tech" },
  { name: "Vishnu Vardhan",         position: "Tech" },
  { name: "P.S. Mayoor",            position: "Social Media & PR" },
  { name: "Saketh Vemulapati",      position: "Social Media & PR" },
  { name: "Harsh Kumar",            position: "Events" },
];

export default function ComputerSociety() {
  return (
    <SocietyPage
      name="Computer Society"
      abbr="CS"
      description="Aligned with the world's leading IEEE Computer Society, the CBIT IEEE CS branch empowers your exploration of computing. Delve into a vast array of topics, from fundamentals to cutting-edge AI and Machine Learning. Access valuable IEEE CS publications, network with professionals, and participate in workshops and hackathons. Gain career guidance, mentorship, and leadership opportunities. Join our passionate community and embark on a transformative journey in computing!"
      eventsBy="Computer Society"
      leadership={leadership}
      juniorEB={juniorEB}
    />
  );
}
