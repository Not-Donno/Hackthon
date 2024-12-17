import React from 'react';
import {Link} from 'react-router-dom'

const InfoBox = ({ text, link, btntext}) => (
  <div className="info-box">
    <p className="font-medium sm:text:xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
    {btntext}
    </Link>
  </div>
)
const renderContent = {
  1: <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-green py-4 px-8 text-white mx-5">
    A Step Towards a Sustainable and Greener Future 🌱🌍</h1>,
  2: <InfoBox
  text="The Solution is in Our Hands: Taking Action for a Healthier Planet 🌱✋"
  link="/Solution"
  btntext="Learn More"
  />,
  3: <InfoBox 
    text="The Problem We Face: A Planet at Risk from Our Actions 🌍⚠️"
    link="/Problems"
    btntext="Learn More"
  />,
  4: <InfoBox 
  text="Our Goals: Empowering Change for a Sustainable and Greener Future 🌍💚"
  link="/OurGoal"
  btntext="Learn More"
  />,
};
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
