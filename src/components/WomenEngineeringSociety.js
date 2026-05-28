// ============================================================
// WomenEngineeringSociety.js
// ============================================================
import React from "react";
import SocietyPage from "./SocietyPage";

const leadership = [
  { name: "Sri Sarayu",   position: "Chair",      image: "images/wie/img-1 2025.png" },
  { name: "Drithi Reddy", position: "Vice Chair",  image: "images/wie/img-2 2025.png" },
];

const juniorEB = [
  { name: "Navya Vipparthi",      position: "Design" },
  { name: "Niharika Singh",       position: "Design" },
  { name: "Cheemarla Rishitha",   position: "Documentation" },
  { name: "Nainapally Rashmika",  position: "Documentation" },
  { name: "Kunreddy Sruthi",      position: "Events & PR" },
  { name: "Geethika G",           position: "Social Media" },
  { name: "Hiranmai Banala",      position: "Social Media" },
  { name: "N Soumya",             position: "Social Media" },
];

export default function WomenEngineeringSociety() {
  return (
    <SocietyPage
      name="Women in Engineering Society"
      abbr="WIE"
      description="The CBIT IEEE Women in Engineering (WIE) branch, a vibrant extension of the global IEEE WIE initiative, empowers you to excel in engineering and technology. Here, you'll find a network of supportive peers and industry professionals, ready to connect and collaborate. Gain access to valuable resources and participate in workshops, conferences, and professional development events designed to hone your skills and propel you towards your career goals. Benefit from insightful mentorship opportunities, fostering your leadership potential. Don't just excel yourself, but become a role model! Participate in WIE's outreach programs, inspiring young girls to pursue STEM careers and contributing to a more diverse and inclusive engineering landscape for the future."
      eventsBy="Women in Engineering Society"
      leadership={leadership}
      juniorEB={juniorEB}
    />
  );
}
