import { React, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import Earth from '../assects/3d/Earth.glb';
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei';

function Model(props) {
  const { nodes, materials } = useGLTF(Earth);
  const groupRef = useRef(); 
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; 
    }
  });

  return (
    <group ref={groupRef} rotation={[-Math.PI / 2, 0, Math.PI]} {...props} dispose={null}>
      <mesh geometry={nodes['URF-Height_Lampd_Ice_0'].geometry} material={materials.Lampd_Ice} />
      <mesh geometry={nodes['URF-Height_watr_0'].geometry} material={materials.watr} material-roughness={0} />
      <mesh geometry={nodes['URF-Height_Lampd_0'].geometry} material={materials.Lampd} material-color="lightgreen" />
    </group>
  );
}

export function Viewer() {
  return (
    <Canvas
      camera={{ position: [10, 0, 0], fov: 50 }}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    >
      <ambientLight intensity={0.5} />
      <Model position={[0, 0.25, 0]} scale={3} />
      <Environment preset="city" />
      <ContactShadows frames={1} scale={5} position={[0, -1, 0]} far={1} blur={5} opacity={0.5} color="#204080" />
      <OrbitControls />
    </Canvas>
  );
}

const Goal = () => {
  return (
    <>
    <div className="bg-green-600 text-white font-['Poppins'] relative">
      <header className="h-screen flex justify-between items-center px-[5%] bg-gradient-to-b from-[#54c57f] to-[#4fea2c] relative z-10">
        <div className="max-w-[40%] z-10">
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
        <div className="w-full h-full max-w-[50%]">
          <Viewer />
        </div>
      </header>

      <section
        id="solutions"
        className="text-center py-16 px-[10%] bg-gradient-to-b from-[#63ff9f] to-[#32bf12] relative z-10"
      >
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

          <div className="solution-card bg-[#415a77] p-5 rounded-lg cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#00b4d8] hover:text-white">
            <h3 className="text-xl mb-2">🌍 Eco-friendly Transportation</h3>
            <p>Promote electric vehicles, public transportation, and cycling to reduce carbon footprints.</p>
          </div>
          <div className="solution-card bg-[#415a77] p-5 rounded-lg cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#00b4d8] hover:text-white">
            <h3 className="text-xl mb-2">🌾 Sustainable Agriculture</h3>
            <p>Encourage organic farming and responsible land use to ensure long-term food security.</p>
          </div>
          <div className="solution-card bg-[#415a77] p-5 rounded-lg cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#00b4d8] hover:text-white">
            <h3 className="text-xl mb-2">💡 Energy Efficiency</h3>
            <p>Reduce energy consumption by using energy-efficient appliances and technologies.</p>
          </div>
          <div className="solution-card bg-[#415a77] p-5 rounded-lg cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#00b4d8] hover:text-white">
            <h3 className="text-xl mb-2">🌊 Ocean Conservation</h3>
            <p>Protect marine ecosystems by reducing plastic pollution and supporting marine life restoration.</p>
          </div>
        </div>
      </section>
    </div>
    </>
    
  );
};

export default Goal;
