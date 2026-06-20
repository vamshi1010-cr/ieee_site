import React from "react";
import SocietyPage from "./SocietyPage";

const leadership = [
  { name: "Mahidhar Kumar Reddy", position: "Chair",      image: "images/sps/img-01 2025.png" },
  { name: "Megha Annavarapu",     position: "Vice Chair",  image: "images/sps/img-02 2025.png" },
];

const juniorEB = [
  { name: "Lingam Sai Teja",              position: "Design" },
  { name: "Palaparthi Vaidehi",           position: "Design" },
  { name: "Paineni Jahnavi",              position: "Design" },
  { name: "K Sai Sushanth Reddy",         position: "Design" },
  { name: "Akash Sudhir",                 position: "Documentation" },
  { name: "Sri Sathvik Varma Saripella",  position: "Documentation" },
  { name: "Sheroji Rahul",                position: "Events & PR" },
  { name: "Soumya Vemuri",               position: "Events & PR" },
  { name: "A Rajeshwari",                 position: "Social Media" },
  { name: "Rukmini Lanka",               position: "Social Media" },
  { name: "Kura Samiksha Reddy",          position: "Tech" },
  { name: "Madhuri",                      position: "Tech" },
  { name: "Vangala Bhavya Sri",           position: "Tech" },
];

export default function SignalProcessingSociety() {
  return (
    <SocietyPage
      name="Signal Processing Society"
      abbr="SPS"
      description="The CBIT IEEE Student Chapter's Signal Processing Society (SPS) branch fuels your passion for analyzing, interpreting, and manipulating signals — the building blocks of audio, speech, images, and more. Aligned with the world's leading IEEE SPS, we offer a comprehensive exploration of this dynamic field. From core signal and image processing to cutting-edge applications in speech, audio, multimedia, and communication, you'll gain access to valuable resources, connect with experts, and participate in workshops and conferences. Sharpen your skills, gain insights through mentorship, and potentially contribute to groundbreaking research."
      eventsBy="Signal Processing Society"
      leadership={leadership}
      juniorEB={juniorEB}
    />
  );
}
