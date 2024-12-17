import React from "react";

const AboutTeam = () => {
  return (
    <section className="text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">About Team InnovativeX</h1>
        <p className="text-lg mb-8">
          We are <strong>InnovativeX</strong>, a passionate group of developers, designers, and innovators participating in the Hackathon. Our mission is to bring creativity and technology together to solve real-world problems.
        </p>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Focus: Environmental Awareness</h2>
        <p className="text-base mb-8">
          As a team, we believe in the power of technology to create a greener and cleaner planet. Our project is designed to raise awareness about environmental issues and inspire people to take action. By addressing topics like pollution, waste management, and climate change, we hope to build a sustainable future for generations to come.
        </p>
        <div className="text-left max-w-4xl mx-auto">
          <h3 className="text-xl font-medium text-green-600 mb-2">Our Values:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Innovation:</strong> Finding creative solutions to environmental challenges.</li>
            <li><strong>Collaboration:</strong> Combining our skills and ideas to make a positive impact.</li>
            <li><strong>Sustainability:</strong> Building solutions that benefit the environment and society.</li>
          </ul>
        </div>
        <p className="mt-8 text-lg font-medium">
          Together, we are <span className="text-green-700 font-bold">InnovativeX</span>, and we are here to make a difference.
        </p>
      </div>
    </section>
  );
};

export default AboutTeam;
