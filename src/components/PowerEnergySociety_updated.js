import React from "react";
import SocietyPage from "./SocietyPage";

const leadership = [
  { name: "Raghavendra Badri Vishal B", position: "Chair", image: "images/pes/img0.png" },

  { name: "Srinidhi Ganti", position: "Vice Chair", image: "images/pes/img1.png" },
];

const juniorEB = [
  { name: "RS Vaibhav",                        position: "Design" },
  { name: "Annareddy Vishnu Vardhan Reddy",    position: "Documentation" },
  { name: "Pavan Haneesh Mattigunta",          position: "Documentation" },
  { name: "Vulli Sai Vaibhav",                 position: "Documentation" },
  { name: "Abhinav Aditya Korikana",           position: "Events & PR" },
  { name: "Riya Kumari",                       position: "Events & PR" },
  { name: "Vasu Bhukya",                       position: "Events & PR" },
  { name: "Trivardhan Rachakonda",             position: "Social Media" },
  { name: "Velidandi Saketh Reddy",            position: "Technical" },
];

export default function PowerEnergySociety() {
  return (
    <SocietyPage
      name="Power and Energy Society"
      abbr="PES"
      description="The CBIT IEEE Student Chapter's Power & Energy Society (PES) branch ignites your passion for the world that energizes our lives. Aligned with the esteemed IEEE PES, we delve into the intricacies of electric power and energy. Explore a vast spectrum of topics, from power system planning and control to the future of renewable energy sources like solar and wind. Gain access to valuable publications, connect with industry professionals, and participate in workshops and conferences. Sharpen your skills through mentorship and potentially contribute to shaping sustainable energy solutions. Join our dynamic community and become a part of the revolution in power and energy!"
      eventsBy="Power and Energy Society"
      leadership={leadership}
      juniorEB={juniorEB}
    />
  );
}
