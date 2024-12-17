import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIsland = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.4, 0.4, 0.4];
    } else {
      screenScale = [0.45, 0.45, 0.45];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlane = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIsland();
  const [planeScale, planePosition] = adjustPlane();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <h6
  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 z-10 ${
    !isRotating ? 'blinking' : 'hidden'
  }`}
>
  Scroll to move the plane
</h6>


      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 1, 1]} intensity={2} /> 
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1eff" groundColor="#000000" intensity={1} />

          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
