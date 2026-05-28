import React from "react";
import SocietyPage from "./SocietyPage";

const leadership = [
  { name: "Sri Kruthi Prabhugari", position: "Chair",      image: "images/ckts/img1-2025.png" },
  { name: "KJV Rajesh",            position: "Vice Chair",  image: "images/ckts/img2-2025.png" },
];

const juniorEB = [
  { name: "Likita Reddy Chitti",            position: "Design" },
  { name: "NM Adarsh",                      position: "Design" },
  { name: "Gagandeep Sai",                  position: "Design" },
  { name: "Pranavi",                        position: "Documentation" },
  { name: "Rohith Patel",                   position: "Documentation" },
  { name: "Veera Bramendra",                position: "Documentation" },
  { name: "Azmeera Jampanna",               position: "Events & PR" },
  { name: "Gopthri Yellapragada",           position: "Events & PR" },
  { name: "Korpole Krishna Karthik Reddy",  position: "Events & PR" },
  { name: "Malka Sai Hamsini",              position: "Events & PR" },
  { name: "Ramakanth P.S.K",               position: "Events & PR" },
  { name: "Vedavrath Mandala",              position: "Events & PR" },
  { name: "Veturi Bala Sai Datta",          position: "Events & PR" },
  { name: "Kavarthapu Jaya Venkata Rajesh", position: "Events & PR" },
  { name: "Krithisha Vuppala",              position: "Social Media" },
  { name: "Prabhugari Sri Kruthi",          position: "Tech" },
];

export default function CircuitsAndSystemsSociety() {
  return (
    <SocietyPage
      name="Circuits and Systems Society"
      abbr="CAS"
      description="Dive deeper into the building blocks of technology with the CBIT IEEE Circuits and Systems (CAS) branch! Aligned with the world-renowned IEEE CAS society, we offer a comprehensive exploration of this dynamic field. From the fundamentals of analog and digital circuits to cutting-edge applications in integrated circuits, signal processing, communication systems, and even neural networks, you'll gain access to valuable resources, connect with experts, and participate in workshops and conferences. Sharpen your skills through mentorship, potentially contribute to groundbreaking research, and collaborate with industry professionals to bridge the gap between theory and real-world applications."
      eventsBy="Circuits and Systems Society"
      leadership={leadership}
      juniorEB={juniorEB}
    />
  );
}
