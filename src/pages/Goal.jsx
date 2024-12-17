import React from "react";
import { Canvas } from "@react-three/fiber";
import Earth from '../models/Earth.jsx'; // Import the Earth model component

const Goal = () => {
  return (
    <div className="bg-green-600 text-white font-['Poppins']">
      {/* Hero Section */}
      <header className="h-screen flex justify-between items-center px-[5%] bg-gradient-to-b from-[#54c57f] to-[#4fea2c]">
        <div className="max-w-[40%] z-10 relative">
          <h1 className="text-6xl mb-4">Protect Our Planet</h1>
          <p className="text-lg mb-5">
            Explore modern solutions to make Earth greener, healthier, and sustainable.
          </p>
          <a
            href="#solutions"
            className="inline-block bg-[#30fd8c] text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-[#a8f0a6]"
          >
            Explore our goals
          </a>
        </div>

        {/* 3D Earth Model */}
        <div className="w-1/2 h-full absolute top-0 right-0">
          <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <Earth /> {/* Render the Earth model */}
          </Canvas>
        </div>
      </header>

      {/* Solutions Section */}
      <section id="solutions" className="text-center py-16 px-[10%] bg-gradient-to-b from-[#63ff9f] to-[#32bf12]">
        <h2 className="text-4xl mb-10">Key Environmental Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div className="solution-card bg-[#415a77] p-5 rounded-lg cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#00b4d8] hover:text-white">
            <h3 className="text-xl mb-2">🌞 Renewable Energy</h3>
            <p>Utilize clean and sustainable energy sources like solar, wind, and hydro.</p>
          </div>
          <div className="solution-card bg-[#415a77] p-5 rounded-lg cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#00b4d8] hover:text-white">
            <h3 className="text-xl mb-2">♻ Waste Management</h3>
            <p>Reduce, reuse, and recycle to minimize pollution and save the environment.</p>
          </div>
          <div className="solution-card bg-[#415a77] p-5 rounded-lg cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#00b4d8] hover:text-white">
            <h3 className="text-xl mb-2">🌳 Reforestation</h3>
            <p>Plant more trees to restore forests, reduce CO2, and improve biodiversity.</p>
          </div>
          <div className="solution-card bg-[#415a77] p-5 rounded-lg cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#00b4d8] hover:text-white">
            <h3 className="text-xl mb-2">💧 Water Conservation</h3>
            <p>Preserve water resources through smart and efficient management practices.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Goal;
