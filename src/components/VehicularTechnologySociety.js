import React from "react";
import SocietyPage from "./SocietyPage";

const leadership = [
  { name: "Chandana Reddy",  position: "Chair",      image: "images/vts/img-1 2025.png" },
  { name: "Devi Keerthana",  position: "Vice Chair",  image: "images/vts/img-2 2025.png" },
];

const juniorEB = [
  { name: "Gutty Yuva Akhilesh Reddy",    position: "Design" },
  { name: "Mancholla Ranateja",           position: "Design" },
  { name: "P. Siddhartha",               position: "Design" },
  { name: "Venkatpranith Reddy",          position: "Design" },
  { name: "Busireddigari Dhanush Reddy",  position: "Documentation" },
  { name: "Chillapalli Navya Sri Lakshmi",position: "Documentation" },
  { name: "DSV Shiva Kumar",              position: "Documentation" },
  { name: "Mohith Sai Vemula",            position: "Documentation" },
  { name: "Syed Arham Souban",            position: "Documentation" },
  { name: "P. Manasa",                    position: "Events & PR" },
  { name: "Srichandana Velagapudi",       position: "Events & PR" },
  { name: "Chelluboina Uday Ganesh",      position: "Social Media" },
  { name: "Haresh Tatikonda",             position: "Social Media" },
  { name: "Nandeeshwar Rao Veeramaneni",  position: "Social Media" },
  { name: "Gaali Sai Praharshita",        position: "Tech" },
  { name: "Pranavendra Samala",           position: "Tech" },
  { name: "Syed Hussain Faraz",           position: "Tech" },
];

export default function VehicularTechnologySociety() {
  return (
    <SocietyPage
      name="Vehicular Technology Society"
      abbr="VTS"
      description="Accelerate your journey into the future of mobility with CBIT IEEE's Vehicular Technology Society (VTS)! Aligned with the globally recognized IEEE VTS, our chapter brings together passionate students, engineers, and innovators exploring the cutting edge of transportation technology. Dive into a world of intelligent transport systems, electric vehicles, autonomous driving, and V2X communication. Through expert-led workshops, hands-on sessions, and technical talks, VTS equips you with the skills and insights to thrive in a fast-evolving industry. Collaborate with peers and professionals, access exclusive resources, and work on real-world challenges that impact the future of transportation."
      eventsBy="Vehicular Technology Society"
      leadership={leadership}
      juniorEB={juniorEB}
    />
  );
}
