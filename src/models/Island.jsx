import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import islandScence from '../assects/3d/untitled.glb';

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const islandRef = useRef();
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScence);

  const lastX = useRef(0);
  let scrollTimeout;
  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const scrollDelta = e.deltaY;


    setIsRotating(true);

    const scrollSpeed = 0.001;
    islandRef.current.rotation.y += scrollDelta * scrollSpeed;
    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      setIsRotating(false);
    }, 150); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
    }
    if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  };

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.24 && normalizedRotation <= 5.65:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.5 && normalizedRotation <= 0.9:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.97 && normalizedRotation <= 3.36:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('wheel', handleWheel);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [gl]);

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        
        
        geometry={nodes.pCube11.geometry}
        material={materials.rocks1}
        position={[40.75, -6.603, -6.99]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube12.geometry}
        material={materials.rocks1}
        position={[23.876, -6.565, 2.232]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube13.geometry}
        material={materials.rocks1}
        position={[25.775, -7.553, 2.51]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube14.geometry}
        material={materials.rocks1}
        position={[24.329, -7.553, 0.463]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube15.geometry}
        material={materials.rocks1}
        position={[38.816, -6.79, 2.224]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube16.geometry}
        material={materials.rocks1}
        position={[41.308, -7.162, 4.223]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube17.geometry}
        material={materials.rocks1}
        position={[44.352, -7.144, -4.603]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube18.geometry}
        material={materials.rocks1}
        position={[42.993, -6.943, 0.429]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCylinder11.geometry}
        material={materials.floor}
        position={[2.023, -6.438, -1.501]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group
        position={[-0.545, -2.098, 0.42]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.548, 2.548, 2.003]}>
        <mesh
          
          
          geometry={nodes.polySurface12.geometry}
          material={materials.home_body}
          position={[0.904, -1.624, -1.893]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1336.geometry}
          material={materials.wood}
          position={[0.905, -1.624, 3.318]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1467.geometry}
          material={materials.wood}
          position={[0.904, -1.624, 0.113]}
        />
      </group>
      <mesh
        
        
        geometry={nodes.pCylinder21.geometry}
        material={materials.totem}
        position={[0.364, 14.236, -8.421]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group position={[0.369, 23.703, -13.303]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh013.geometry}
          material={materials.totem}
        />
        <mesh
          
          
          geometry={nodes.Mesh013_1.geometry}
          material={materials.phongE1}
        />
      </group>
      <mesh
        
        
        geometry={nodes.pSphere1.geometry}
        material={materials.ground}
        position={[3.122, -15.888, -2.48]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.697, 1.697, 0.954]}
      />
      <group
        position={[0.905, 17.263, 2.363]}
        rotation={[-Math.PI, 0, 0]}
        scale={[3.971, 8.364, 5.635]}>
        <group position={[0.037, -0.29, -0.368]}>
          <mesh
            
            
            geometry={nodes.Mesh015.geometry}
            material={materials.roof1}
          />
          <mesh
            
            
            geometry={nodes.Mesh015_1.geometry}
            material={materials.windows_background}
          />
          <mesh
            
            
            geometry={nodes.Mesh015_2.geometry}
            material={materials.roof3}
          />
        </group>
        <mesh
          
          
          geometry={nodes.polySurface17.geometry}
          material={materials.windows_frame}
          position={[0, -0.55, -0.945]}
        />
      </group>
      <group
        position={[0.905, 12.805, 6.519]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.31, 3.31, 3.924]}>
        <mesh
          
          
          geometry={nodes.polySurface13.geometry}
          material={materials.windows_frame}
          position={[0, 0.672, 0.514]}
        />
        <mesh
          
          
          geometry={nodes.polySurface14.geometry}
          material={materials.wood2}
          position={[0, 0.907, -0.271]}
        />
        <mesh
          
          
          geometry={nodes.polySurface727.geometry}
          material={materials.wood2}
          position={[0, 0.789, 0.194]}
        />
      </group>
      <group
        position={[15.517, -0.882, -3.677]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.188, 7.145, 8.479]}>
        <mesh
          
          
          geometry={nodes.polySurface725.geometry}
          material={materials.totem}
          position={[-0.78, 0.015, -0.525]}
        />
      </group>
      <mesh
        
        
        geometry={nodes.pCylinder25.geometry}
        material={materials.roof2}
        position={[0.745, 29.012, -3.573]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group position={[12.064, -5.766, -8.202]} rotation={[Math.PI / 2, 0, 0.901]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface944.geometry}
          material={materials.tree_body}
          position={[17.292, 12.593, -3.937]}
        />
        <mesh
          
          
          geometry={nodes.polySurface945.geometry}
          material={materials.tree1}
          position={[18.681, 14.145, -6.17]}
        />
        <mesh
          
          
          geometry={nodes.polySurface946.geometry}
          material={materials.tree2}
          position={[16.889, 12.876, -8.154]}
        />
        <mesh
          
          
          geometry={nodes.polySurface947.geometry}
          material={materials.tree1}
          position={[17.935, 10.325, -6.881]}
        />
        <mesh
          
          
          geometry={nodes.polySurface948.geometry}
          material={materials.tree_body}
          position={[18.034, 13.246, -5.675]}
        />
        <mesh
          
          
          geometry={nodes.polySurface949.geometry}
          material={materials.tree_body}
          position={[17.782, 11.292, -5.457]}
        />
      </group>
      <group position={[4.703, -7.11, 54.304]} rotation={[Math.PI / 2, 0, -2.614]} scale={0.986}>
        <mesh
          
          
          geometry={nodes.polySurface986.geometry}
          material={materials.tree_body}
          position={[17.292, 12.593, -3.937]}
        />
        <mesh
          
          
          geometry={nodes.polySurface987.geometry}
          material={materials.tree1}
          position={[18.681, 14.145, -6.17]}
        />
        <mesh
          
          
          geometry={nodes.polySurface988.geometry}
          material={materials.tree2}
          position={[16.889, 12.876, -8.154]}
        />
        <mesh
          
          
          geometry={nodes.polySurface989.geometry}
          material={materials.tree2}
          position={[17.935, 10.325, -6.881]}
        />
        <mesh
          
          
          geometry={nodes.polySurface990.geometry}
          material={materials.tree_body}
          position={[18.034, 13.246, -5.675]}
        />
        <mesh
          
          
          geometry={nodes.polySurface991.geometry}
          material={materials.tree_body}
          position={[17.782, 11.292, -5.457]}
        />
      </group>
      <group position={[-27.227, -7.14, 29.243]} rotation={[Math.PI / 2, 0, -0.36]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface956.geometry}
          material={materials.tree_body}
          position={[17.292, 12.593, -3.937]}
        />
        <mesh
          
          
          geometry={nodes.polySurface957.geometry}
          material={materials.tree1}
          position={[18.681, 14.145, -6.17]}
        />
        <mesh
          
          
          geometry={nodes.polySurface958.geometry}
          material={materials.tree2}
          position={[16.889, 12.876, -8.154]}
        />
        <mesh
          
          
          geometry={nodes.polySurface959.geometry}
          material={materials.tree1}
          position={[17.935, 10.325, -6.881]}
        />
        <mesh
          
          
          geometry={nodes.polySurface960.geometry}
          material={materials.tree_body}
          position={[18.034, 13.246, -5.675]}
        />
        <mesh
          
          
          geometry={nodes.polySurface961.geometry}
          material={materials.tree_body}
          position={[17.782, 11.292, -5.457]}
        />
      </group>
      <group position={[31.746, -6.721, 31.475]} rotation={[Math.PI / 2, 0, 2.796]} scale={1.24}>
        <mesh
          
          
          geometry={nodes.polySurface968.geometry}
          material={materials.tree_body}
          position={[17.292, 12.593, -3.937]}
        />
        <mesh
          
          
          geometry={nodes.polySurface969.geometry}
          material={materials.tree1}
          position={[18.681, 14.145, -6.17]}
        />
        <mesh
          
          
          geometry={nodes.polySurface970.geometry}
          material={materials.tree1}
          position={[16.889, 12.876, -8.154]}
        />
        <mesh
          
          
          geometry={nodes.polySurface971.geometry}
          material={materials.tree2}
          position={[17.935, 10.325, -6.881]}
        />
        <mesh
          
          
          geometry={nodes.polySurface972.geometry}
          material={materials.tree_body}
          position={[18.034, 13.246, -5.675]}
        />
        <mesh
          
          
          geometry={nodes.polySurface973.geometry}
          material={materials.tree_body}
          position={[17.782, 11.292, -5.457]}
        />
      </group>
      <mesh
        
        
        geometry={nodes.pCube51.geometry}
        material={materials.rocks1}
        position={[-22.893, -8.352, -19.017]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube55.geometry}
        material={materials.rocks1}
        position={[-5.816, -5.242, 23.111]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube56.geometry}
        material={materials.rocks1}
        position={[-9.911, -4.87, 23.632]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube57.geometry}
        material={materials.rocks1}
        position={[-5.734, -5.023, 21.837]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube58.geometry}
        material={materials.rocks1}
        position={[-5.953, -5.224, 15.466]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.polySurface38.geometry}
        material={materials.wood}
        position={[22.386, -3.188, -14.129]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group position={[5.052, -5.907, -0.314]} rotation={[Math.PI / 2, 0, 0]} scale={1.857}>
        <mesh
          
          
          geometry={nodes.polySurface135.geometry}
          material={materials.totem}
          position={[-2.231, 4.306, -18.393]}
        />
      </group>
      <mesh
        
        
        geometry={nodes.pCylinder92.geometry}
        material={materials.wood}
        position={[-20.003, -1.702, 23.094]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group position={[2.069, -5.766, -1.507]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface1311.geometry}
          material={materials.wood2}
          position={[-13.699, 14.521, -2.113]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1313.geometry}
          material={materials.wood2}
          position={[-12.205, 13.896, -1.814]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1314.geometry}
          material={materials.wood2}
          position={[-14.057, 14.657, -1.866]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1315.geometry}
          material={materials.wood2}
          position={[-12.619, 14.057, -2.12]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1316.geometry}
          material={materials.wood2}
          position={[-12.981, 14.215, -2.219]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1317.geometry}
          material={materials.wood2}
          position={[-13.338, 14.37, -2.325]}
        />
      </group>
      <group position={[2.069, -5.766, -1.507]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface310.geometry}
          material={materials.wood2}
          position={[-3.455, -24.821, -10.054]}
        />
        <mesh
          
          
          geometry={nodes.polySurface311.geometry}
          material={materials.wood2}
          position={[-3.459, -24.79, -10.506]}
        />
        <mesh
          
          
          geometry={nodes.polySurface312.geometry}
          material={materials.wood2}
          position={[-3.459, -24.786, -9.909]}
        />
        <group position={[-3.455, -24.699, -10.437]}>
          <mesh
            
            
            geometry={nodes.Mesh075.geometry}
            material={materials.windows_frame}
          />
          <mesh
            
            
            geometry={nodes.Mesh075_1.geometry}
            material={materials.windows_background}
          />
        </group>
        <mesh
          
          
          geometry={nodes.polySurface314.geometry}
          material={materials.windows_frame}
          position={[-3.673, -23.621, -9.49]}
        />
        <mesh
          
          
          geometry={nodes.polySurface315.geometry}
          material={materials.windows_frame}
          position={[-3.605, -23.972, -9.965]}
        />
        <group position={[-4.198, -20.837, -10.662]}>
          <mesh
            
            
            geometry={nodes.Mesh078.geometry}
            material={materials.roof1}
          />
          <mesh
            
            
            geometry={nodes.Mesh078_1.geometry}
            material={materials.roof3}
          />
        </group>
        <mesh
          
          
          geometry={nodes.polySurface338.geometry}
          material={materials.totem2}
          position={[-4.168, -20.89, -12.524]}
        />
        <mesh
          
          
          geometry={nodes.polySurface339.geometry}
          material={materials.roof1}
          position={[-4.21, -20.83, -11.027]}
        />
        <group position={[-4.187, -20.837, -7.847]}>
          <mesh
            
            
            geometry={nodes.Mesh081.geometry}
            material={materials.roof3}
          />
          <mesh
            
            
            geometry={nodes.Mesh081_1.geometry}
            material={materials.roof1}
          />
        </group>
        <mesh
          
          
          geometry={nodes.polySurface343.geometry}
          material={materials.wood2}
          position={[-4.184, -20.806, -9.85]}
        />
        <group position={[-4.139, -20.853, -3.844]}>
          <mesh
            
            
            geometry={nodes.Mesh083.geometry}
            material={materials.home_body}
          />
          <mesh
            
            
            geometry={nodes.Mesh083_1.geometry}
            material={materials.tree_body}
          />
        </group>
      </group>
      <group position={[-10.758, -5.766, -7.181]} rotation={[Math.PI / 2, 0, -0.401]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface826.geometry}
          material={materials.windows_frame}
          position={[-13.31, 20.046, -8.203]}
        />
        <mesh
          
          
          geometry={nodes.polySurface827.geometry}
          material={materials.windows_frame}
          position={[-12.925, 19.089, -7.859]}
        />
        <group position={[-13.279, 19.92, -8.636]}>
          <mesh
            
            
            geometry={nodes.Mesh086.geometry}
            material={materials.wood2}
          />
          <mesh
            
            
            geometry={nodes.Mesh086_1.geometry}
            material={materials.windows_background}
          />
        </group>
        <mesh
          
          
          geometry={nodes.polySurface829.geometry}
          material={materials.windows_frame}
          position={[-13.319, 20.061, -8.322]}
        />
        <mesh
          
          
          geometry={nodes.polySurface830.geometry}
          material={materials.windows_frame}
          position={[-13.309, 20.044, -8.693]}
        />
        <group position={[-12.039, 16.938, -8.821]}>
          <mesh
            
            
            geometry={nodes.Mesh089.geometry}
            material={materials.roof1}
          />
          <mesh
            
            
            geometry={nodes.Mesh089_1.geometry}
            material={materials.roof3}
          />
        </group>
        <mesh
          
          
          geometry={nodes.polySurface832.geometry}
          material={materials.totem2}
          position={[-12.072, 16.976, -10.35]}
        />
        <mesh
          
          
          geometry={nodes.polySurface837.geometry}
          material={materials.wood2}
          position={[-12.046, 16.91, -8.155]}
        />
        <group position={[-12.049, 16.936, -6.51]}>
          <mesh
            
            
            geometry={nodes.Mesh092.geometry}
            material={materials.roof3}
          />
          <mesh
            
            
            geometry={nodes.Mesh092_1.geometry}
            material={materials.roof1}
          />
        </group>
        <mesh
          
          
          geometry={nodes.polySurface840.geometry}
          material={materials.home_body}
          position={[-12.09, 16.941, -3.224]}
        />
        <mesh
          
          
          geometry={nodes.polySurface841.geometry}
          material={materials.roof1}
          position={[-12.029, 16.934, -9.121]}
        />
        <mesh
          
          
          geometry={nodes.polySurface846.geometry}
          material={materials.windows_frame}
          position={[-13.038, 19.36, -8.249]}
        />
      </group>
      <group position={[10.703, 2.136, -14.585]} rotation={[Math.PI / 2, 0, 0.016]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh096.geometry}
          material={materials.windows_frame}
        />
        <mesh
          
          
          geometry={nodes.Mesh096_1.geometry}
          material={materials.windows_background}
        />
        <mesh
          
          
          geometry={nodes.Mesh096_2.geometry}
          material={materials.wood2}
        />
      </group>
      <group position={[-0.538, -6.29, -1.087]} rotation={[Math.PI / 2, 0, 0]} scale={2.022}>
        <mesh
          
          
          geometry={nodes.polySurface1133.geometry}
          material={materials.wood2}
          position={[8.03, -2.572, -2.715]}
        />
        <mesh
          
          
          geometry={nodes.polySurface488.geometry}
          material={materials.wood2}
          position={[8.03, -2.092, -2.849]}
        />
        <mesh
          
          
          geometry={nodes.polySurface491.geometry}
          material={materials.wood2}
          position={[8.045, -0.104, -2.619]}
        />
        <mesh
          
          
          geometry={nodes.polySurface492.geometry}
          material={materials.wood2}
          position={[8.055, -0.611, -2.838]}
        />
        <mesh
          
          
          geometry={nodes.polySurface493.geometry}
          material={materials.wood2}
          position={[8.05, -1.109, -2.91]}
        />
        <mesh
          
          
          geometry={nodes.polySurface494.geometry}
          material={materials.wood2}
          position={[8.044, -1.6, -2.965]}
        />
        <mesh
          
          
          geometry={nodes.polySurface495.geometry}
          material={materials.wood2}
          position={[7.78, -1.278, -3.298]}
        />
      </group>
      <group position={[1.855, -5.766, -1.271]} rotation={[Math.PI / 2, 0, 0.13]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface374.geometry}
          material={materials.wood2}
          position={[-0.948, -9.697, -2.485]}
        />
        <mesh
          
          
          geometry={nodes.polySurface394.geometry}
          material={materials.wood2}
          position={[7.016, -5.089, -1.746]}
        />
        <mesh
          
          
          geometry={nodes.polySurface395.geometry}
          material={materials.wood2}
          position={[6.399, -6.185, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface396.geometry}
          material={materials.wood2}
          position={[5.563, -7.186, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface397.geometry}
          material={materials.wood2}
          position={[4.581, -8.045, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface398.geometry}
          material={materials.wood2}
          position={[3.479, -8.74, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface399.geometry}
          material={materials.wood2}
          position={[2.281, -9.257, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface400.geometry}
          material={materials.wood2}
          position={[1.018, -9.581, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface401.geometry}
          material={materials.wood2}
          position={[-0.28, -9.705, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface402.geometry}
          material={materials.wood2}
          position={[-1.581, -9.625, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface403.geometry}
          material={materials.wood2}
          position={[-2.854, -9.345, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface404.geometry}
          material={materials.wood2}
          position={[-4.069, -8.87, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface405.geometry}
          material={materials.wood2}
          position={[-5.195, -8.213, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface406.geometry}
          material={materials.wood2}
          position={[-6.205, -7.388, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface407.geometry}
          material={materials.wood2}
          position={[-7.075, -6.417, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface408.geometry}
          material={materials.wood2}
          position={[-7.783, -5.322, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface409.geometry}
          material={materials.wood2}
          position={[-8.313, -4.131, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface410.geometry}
          material={materials.wood2}
          position={[-8.651, -2.871, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface411.geometry}
          material={materials.wood2}
          position={[-8.79, -1.575, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface412.geometry}
          material={materials.wood2}
          position={[-8.725, -0.273, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface413.geometry}
          material={materials.wood2}
          position={[-8.459, 1.004, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface414.geometry}
          material={materials.wood2}
          position={[-7.998, 2.224, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface415.geometry}
          material={materials.wood2}
          position={[-7.354, 3.357, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface416.geometry}
          material={materials.wood2}
          position={[-6.541, 4.376, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface417.geometry}
          material={materials.wood2}
          position={[-5.579, 5.257, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface418.geometry}
          material={materials.wood2}
          position={[-4.493, 5.978, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface419.geometry}
          material={materials.wood2}
          position={[-3.307, 6.521, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface420.geometry}
          material={materials.wood2}
          position={[-2.052, 6.874, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface421.geometry}
          material={materials.wood2}
          position={[-0.757, 7.027, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface422.geometry}
          material={materials.wood2}
          position={[0.546, 6.977, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface423.geometry}
          material={materials.wood2}
          position={[1.825, 6.726, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface424.geometry}
          material={materials.wood2}
          position={[3.05, 6.279, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface425.geometry}
          material={materials.wood2}
          position={[4.191, 5.647, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface426.geometry}
          material={materials.wood2}
          position={[5.219, 4.846, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface427.geometry}
          material={materials.wood2}
          position={[6.111, 3.894, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface428.geometry}
          material={materials.wood2}
          position={[6.844, 2.816, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface429.geometry}
          material={materials.wood2}
          position={[7.401, 1.637, -2.434]}
        />
        <mesh
          
          
          geometry={nodes.polySurface497.geometry}
          material={materials.wood2}
          position={[7.75, 0.15, -1.746]}
        />
      </group>
      <group position={[2.127, 3.152, 0.924]} rotation={[Math.PI / 2, 0, -0.682]} scale={1.868}>
        <group position={[4.563, -7.078, -5.529]}>
          <mesh
            
            
            geometry={nodes.Mesh142.geometry}
            material={materials.windows_frame}
          />
          <mesh
            
            
            geometry={nodes.Mesh142_1.geometry}
            material={materials.totem}
          />
          <mesh
            
            
            geometry={nodes.Mesh142_2.geometry}
            material={materials.windows_background}
          />
        </group>
        <mesh
          
          
          geometry={nodes.polySurface1381.geometry}
          material={materials.wood2}
          position={[4.928, -7.547, -5.183]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1382.geometry}
          material={materials.wood2}
          position={[4.915, -7.532, -5.163]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1383.geometry}
          material={materials.totem}
          position={[4.312, -6.777, -3.602]}
        />
      </group>
      <mesh
        
        
        geometry={nodes.pCube106.geometry}
        material={materials.roof3}
        position={[1.178, 21.226, -14.563]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube107.geometry}
        material={materials.roof3}
        position={[1.707, 22.572, -12.688]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube108.geometry}
        material={materials.roof3}
        position={[1.87, 18.815, -12.888]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube109.geometry}
        material={materials.roof3}
        position={[1.975, 18.093, -13.385]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group
        position={[-1.747, 9.951, -7.777]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.897}>
        <mesh
          
          
          geometry={nodes.polySurface1325.geometry}
          material={materials.totem}
          position={[8.176, -1.352, -2.416]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1326.geometry}
          material={materials.wood}
          position={[8.199, -1.347, -2.424]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1327.geometry}
          material={materials.totem}
          position={[8.33, -1.357, -2.409]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1328.geometry}
          material={materials.wood2}
          position={[8.03, -2.055, -2.658]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1330.geometry}
          material={materials.wood2}
          position={[8.036, -0.108, -2.357]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1331.geometry}
          material={materials.wood2}
          position={[8.028, -2.516, -2.411]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1332.geometry}
          material={materials.wood2}
          position={[8.055, -0.642, -2.664]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1333.geometry}
          material={materials.wood2}
          position={[8.05, -1.117, -2.763]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1334.geometry}
          material={materials.wood2}
          position={[8.044, -1.586, -2.87]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1335.geometry}
          material={materials.wood2}
          position={[7.78, -1.279, -3.042]}
        />
      </group>
      <mesh
        
        
        geometry={nodes.pCube113.geometry}
        material={materials.roof3}
        position={[-1.185, 19.655, -14.138]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube114.geometry}
        material={materials.roof3}
        position={[-0.998, 18.977, -13.803]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube115.geometry}
        material={materials.roof3}
        position={[-0.835, 23.899, -12.95]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.polySurface437.geometry}
        material={materials.wood}
        position={[6.119, -2.342, -30.36]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group position={[26.947, -6.542, 28.344]} rotation={[Math.PI / 2, 0, 2.181]} scale={1.24}>
        <mesh
          
          
          geometry={nodes.polySurface980.geometry}
          material={materials.tree_body}
          position={[17.292, 12.593, -3.937]}
        />
        <mesh
          
          
          geometry={nodes.polySurface981.geometry}
          material={materials.tree2}
          position={[18.681, 14.145, -6.17]}
        />
        <mesh
          
          
          geometry={nodes.polySurface982.geometry}
          material={materials.tree1}
          position={[16.889, 12.876, -8.154]}
        />
        <mesh
          
          
          geometry={nodes.polySurface983.geometry}
          material={materials.tree2}
          position={[17.935, 10.325, -6.881]}
        />
        <mesh
          
          
          geometry={nodes.polySurface984.geometry}
          material={materials.tree_body}
          position={[18.034, 13.246, -5.675]}
        />
        <mesh
          
          
          geometry={nodes.polySurface985.geometry}
          material={materials.tree_body}
          position={[17.782, 11.292, -5.457]}
        />
      </group>
      <group position={[15.251, 8.267, -3.938]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh170.geometry}
          material={materials.roof3}
        />
        <mesh
          
          
          geometry={nodes.Mesh170_1.geometry}
          material={materials.roof1}
        />
      </group>
      <group position={[4.367, 9.341, -3.707]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh171.geometry}
          material={materials.roof3}
        />
        <mesh
          
          
          geometry={nodes.Mesh171_1.geometry}
          material={materials.roof1}
        />
      </group>
      <group position={[2.069, -5.752, -1.507]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface476.geometry}
          material={materials.rocks}
          position={[7.908, -1.347, -7.823]}
        />
        <mesh
          
          
          geometry={nodes.polySurface477.geometry}
          material={materials.rocks}
          position={[7.593, 0.63, -6.81]}
        />
        <mesh
          
          
          geometry={nodes.polySurface478.geometry}
          material={materials.rocks}
          position={[7.582, -3.182, -6.823]}
        />
      </group>
      <group position={[6.707, -5.315, -49.686]} rotation={[1.611, -0.015, -1.6]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface483.geometry}
          material={materials.totem2}
          position={[-27.037, 4.503, -4.171]}
        />
        <mesh
          
          
          geometry={nodes.polySurface496.geometry}
          material={materials.totem2}
          position={[-27.094, 4.555, -2.895]}
        />
        <mesh
          
          
          geometry={nodes.polySurface823.geometry}
          material={materials.totem2}
          position={[-42.045, -17.16, -3.068]}
        />
      </group>
      <mesh
        
        
        geometry={nodes.pCylinder122.geometry}
        material={materials.wood}
        position={[15.515, 0.82, -3.623]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.polySurface487.geometry}
        material={materials.totem}
        position={[16.053, -1.403, -5.275]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.polySurface469.geometry}
        material={materials.wood}
        position={[-5.115, 6.112, -36.843]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.polySurface340.geometry}
        material={materials.wood2}
        position={[-5.263, 0.7, -36.695]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube194.geometry}
        material={materials.rocks1}
        position={[-19.907, -6.728, -27.915]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group position={[2.069, -7.359, -1.507]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface1034.geometry}
          material={materials.tree1}
          position={[-19.397, -15.982, -6.952]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1035.geometry}
          material={materials.tree2}
          position={[-17.58, -13.908, -8.225]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1036.geometry}
          material={materials.tree1}
          position={[-15.645, -14.948, -6.241]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1037.geometry}
          material={materials.tree_body}
          position={[-17.653, -14.396, -4.008]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1038.geometry}
          material={materials.tree_body}
          position={[-16.738, -14.769, -5.746]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1039.geometry}
          material={materials.tree_body}
          position={[-18.6, -15.414, -5.528]}
        />
      </group>
      <group position={[2.069, -5.766, -1.507]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface1028.geometry}
          material={materials.tree2}
          position={[-22.392, -11.789, -5.26]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1029.geometry}
          material={materials.tree1}
          position={[-20.534, -12.566, -4.33]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1030.geometry}
          material={materials.tree1}
          position={[-22.121, -10.208, -3.81]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1031.geometry}
          material={materials.tree_body}
          position={[-21.991, -11.006, -3.449]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1032.geometry}
          material={materials.tree_body}
          position={[-22.037, -11.727, -2.18]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1033.geometry}
          material={materials.tree_body}
          position={[-21.112, -12.146, -3.29]}
        />
      </group>
      <group position={[-62.01, -8.232, 17.946]} rotation={[Math.PI / 2, 0, 2.118]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface1004.geometry}
          material={materials.tree2}
          position={[-22.48, -8.726, -8.225]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1005.geometry}
          material={materials.tree1}
          position={[-22.109, -6.561, -6.241]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1006.geometry}
          material={materials.tree1}
          position={[-19.936, -9.79, -6.952]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1007.geometry}
          material={materials.tree_body}
          position={[-20.728, -9.215, -5.528]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1008.geometry}
          material={materials.tree_body}
          position={[-21.932, -7.654, -5.746]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1009.geometry}
          material={materials.tree_body}
          position={[-21.994, -8.641, -4.008]}
        />
      </group>
      <group position={[2.074, -8.126, -1.507]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface1040.geometry}
          material={materials.tree1}
          position={[-17.021, -6.636, -6.952]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1041.geometry}
          material={materials.tree1}
          position={[-14.492, -7.736, -8.225]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1042.geometry}
          material={materials.tree1}
          position={[-14.893, -9.895, -6.241]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1043.geometry}
          material={materials.tree_body}
          position={[-15.055, -8.799, -5.746]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1044.geometry}
          material={materials.tree_body}
          position={[-14.979, -7.814, -4.008]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1045.geometry}
          material={materials.tree_body}
          position={[-16.237, -7.222, -5.528]}
        />
      </group>
      <group position={[-60.144, -7.928, 10.022]} rotation={[Math.PI / 2, 0, 2.287]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface1022.geometry}
          material={materials.tree2}
          position={[-21.539, -3.283, -8.225]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1023.geometry}
          material={materials.tree1}
          position={[-22.96, -1.609, -6.241]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1024.geometry}
          material={materials.tree_body}
          position={[-21.292, -2.856, -4.008]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1025.geometry}
          material={materials.tree1}
          position={[-19.09, -2.017, -6.952]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1026.geometry}
          material={materials.tree_body}
          position={[-20.039, -2.254, -5.528]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1027.geometry}
          material={materials.tree_body}
          position={[-22.009, -2.175, -5.746]}
        />
      </group>
      <mesh
        
        
        geometry={nodes.pCube195.geometry}
        material={materials.rocks1}
        position={[10.281, -6.851, 30.094]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube196.geometry}
        material={materials.rocks1}
        position={[14.472, -3.615, 4.525]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube197.geometry}
        material={materials.rocks1}
        position={[15.8, -4.124, 3.893]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group position={[2.069, -5.766, -1.507]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface900.geometry}
          material={materials.home_body}
          position={[3.063, -12.049, -6.388]}
        />
        <mesh
          
          
          geometry={nodes.polySurface922.geometry}
          material={materials.wood2}
          position={[6.092, -13.586, -2.967]}
        />
        <mesh
          
          
          geometry={nodes.polySurface923.geometry}
          material={materials.wood2}
          position={[1.249, -15.098, -2.985]}
        />
      </group>
      <group position={[8.966, -5.405, -5.232]} rotation={[Math.PI / 2, 0, 0]} scale={2.009}>
        <mesh
          
          
          geometry={nodes.polySurface1090.geometry}
          material={materials.roof3}
          position={[-23.309, 4.019, -5.668]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1091.geometry}
          material={materials.roof3}
          position={[-23.457, 4.687, -6.683]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1092.geometry}
          material={materials.roof3}
          position={[-23.203, 4.075, -5.836]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1093.geometry}
          material={materials.roof3}
          position={[-23.786, 4.439, -5.986]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1094.geometry}
          material={materials.roof3}
          position={[-23.382, 4.687, -6.522]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1095.geometry}
          material={materials.wood2}
          position={[-20.32, 6.545, -0.291]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1096.geometry}
          material={materials.wood2}
          position={[-19.937, 6.17, -0.257]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1097.geometry}
          material={materials.wood2}
          position={[-20.052, 6.279, -0.286]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1098.geometry}
          material={materials.wood2}
          position={[-20.581, 6.81, -0.272]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1099.geometry}
          material={materials.wood2}
          position={[-20.455, 6.68, -0.294]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1100.geometry}
          material={materials.wood2}
          position={[-20.187, 6.411, -0.294]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1101.geometry}
          material={materials.totem}
          position={[-20.225, 6.51, -0.302]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1102.geometry}
          material={materials.totem}
          position={[-20.177, 6.555, -0.307]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1103.geometry}
          material={materials.totem}
          position={[-20.231, 6.501, -0.297]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1104.geometry}
          material={materials.wood2}
          position={[-20.391, 6.369, -0.266]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1106.geometry}
          material={materials.wood}
          position={[-20.261, 6.508, -0.299]}
        />
        <group position={[-23.373, 4.444, -7.027]}>
          <mesh
            
            
            geometry={nodes.Mesh235.geometry}
            material={materials.totem}
          />
          <mesh
            
            
            geometry={nodes.Mesh235_1.geometry}
            material={materials.phongE1}
          />
        </group>
        <group position={[-23.396, 4.422, -6.02]}>
          <mesh
            
            
            geometry={nodes.Mesh236.geometry}
            material={materials.totem}
          />
          <mesh
            
            
            geometry={nodes.Mesh236_1.geometry}
            material={materials.phongE1}
          />
        </group>
        <mesh
          
          
          geometry={nodes.polySurface1119.geometry}
          material={materials.totem}
          position={[-21.721, 5.002, -7.805]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1120.geometry}
          material={materials.totem}
          position={[-21.721, 4.998, -8.422]}
        />
        <group position={[-21.672, 4.992, -4.382]}>
          <mesh
            
            
            geometry={nodes.Mesh239.geometry}
            material={materials.roof1}
          />
          <mesh
            
            
            geometry={nodes.Mesh239_1.geometry}
            material={materials.roof3}
          />
        </group>
        <mesh
          
          
          geometry={nodes.polySurface1122.geometry}
          material={materials.home_body}
          position={[-21.783, 5.025, -1.231]}
        />
      </group>
      <group position={[18.609, -4.391, 37.074]} rotation={[1.554, 0.024, -0.056]} scale={1.092}>
        <mesh
          
          
          geometry={nodes.polySurface1000.geometry}
          material={materials.tree2}
          position={[-19.936, -9.79, -6.952]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1001.geometry}
          material={materials.lambert2}
          position={[-20.728, -9.215, -5.528]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1002.geometry}
          material={materials.lambert2}
          position={[-21.932, -7.654, -5.746]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1003.geometry}
          material={materials.tree_body}
          position={[-21.994, -8.641, -4.008]}
        />
        <mesh
          
          
          geometry={nodes.polySurface998.geometry}
          material={materials.tree1}
          position={[-22.48, -8.726, -8.225]}
        />
        <mesh
          
          
          geometry={nodes.polySurface999.geometry}
          material={materials.tree1}
          position={[-22.109, -6.561, -6.241]}
        />
      </group>
      <group position={[0.732, -6.328, -3.927]} rotation={[Math.PI / 2, 0, 0]} scale={1.565}>
        <mesh
          
          
          geometry={nodes.polySurface924.geometry}
          material={materials.tree_body}
          position={[17.852, 15.713, -3.526]}
        />
        <mesh
          
          
          geometry={nodes.polySurface925.geometry}
          material={materials.tree2}
          position={[16.485, 14.142, -5.759]}
        />
        <mesh
          
          
          geometry={nodes.polySurface926.geometry}
          material={materials.tree2}
          position={[18.26, 15.436, -7.743]}
        />
        <mesh
          
          
          geometry={nodes.polySurface927.geometry}
          material={materials.tree1}
          position={[17.178, 17.972, -6.47]}
        />
        <mesh
          
          
          geometry={nodes.polySurface928.geometry}
          material={materials.tree_body}
          position={[17.344, 17.007, -5.046]}
        />
        <mesh
          
          
          geometry={nodes.polySurface929.geometry}
          material={materials.tree_body}
          position={[17.12, 15.049, -5.264]}
        />
        <mesh
          
          
          geometry={nodes.polySurface930.geometry}
          material={materials.tree2}
          position={[20.189, 11.785, -6.283]}
        />
        <mesh
          
          
          geometry={nodes.polySurface931.geometry}
          material={materials.tree1}
          position={[21.665, 12.83, -4.649]}
        />
        <mesh
          
          
          geometry={nodes.polySurface932.geometry}
          material={materials.tree1}
          position={[21.05, 9.685, -5.234]}
        />
        <mesh
          
          
          geometry={nodes.polySurface933.geometry}
          material={materials.tree_body}
          position={[20.924, 10.48, -4.062]}
        />
        <mesh
          
          
          geometry={nodes.polySurface934.geometry}
          material={materials.tree_body}
          position={[20.521, 11.552, -2.811]}
        />
        <mesh
          
          
          geometry={nodes.polySurface935.geometry}
          material={materials.tree_body}
          position={[15.719, 10.624, -2.311]}
        />
        <mesh
          
          
          geometry={nodes.polySurface936.geometry}
          material={materials.tree2}
          position={[15.709, 12.104, -3.898]}
        />
        <mesh
          
          
          geometry={nodes.polySurface937.geometry}
          material={materials.tree1}
          position={[15.371, 10.58, -5.308]}
        />
        <mesh
          
          
          geometry={nodes.polySurface938.geometry}
          material={materials.tree2}
          position={[17.14, 9.737, -4.404]}
        />
        <mesh
          
          
          geometry={nodes.polySurface939.geometry}
          material={materials.tree_body}
          position={[15.797, 11.322, -3.546]}
        />
        <mesh
          
          
          geometry={nodes.polySurface940.geometry}
          material={materials.tree_body}
          position={[16.598, 10.173, -3.391]}
        />
        <mesh
          
          
          geometry={nodes.polySurface941.geometry}
          material={materials.tree_body}
          position={[21.132, 12.09, -4.241]}
        />
      </group>
      <group position={[9.232, -6.234, 30.236]} rotation={[Math.PI / 2, 0, 1.909]} scale={0.809}>
        <mesh
          
          
          geometry={nodes.polySurface992.geometry}
          material={materials.tree_body}
          position={[17.292, 12.593, -3.937]}
        />
        <mesh
          
          
          geometry={nodes.polySurface993.geometry}
          material={materials.tree2}
          position={[18.681, 14.145, -6.17]}
        />
        <mesh
          
          
          geometry={nodes.polySurface994.geometry}
          material={materials.tree1}
          position={[16.889, 12.876, -8.154]}
        />
        <mesh
          
          
          geometry={nodes.polySurface995.geometry}
          material={materials.tree1}
          position={[17.935, 10.325, -6.881]}
        />
        <mesh
          
          
          geometry={nodes.polySurface996.geometry}
          material={materials.tree_body}
          position={[18.034, 13.246, -5.675]}
        />
        <mesh
          
          
          geometry={nodes.polySurface997.geometry}
          material={materials.tree_body}
          position={[17.782, 11.292, -5.457]}
        />
      </group>
      <group position={[31.801, 1.247, -29.097]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh318.geometry}
          material={materials.tree1}
        />
        <mesh
          
          
          geometry={nodes.Mesh318_1.geometry}
          material={materials.tree2}
        />
        <mesh
          
          
          geometry={nodes.Mesh318_2.geometry}
          material={materials.tree_body}
        />
      </group>
      <mesh
        
        
        geometry={nodes.polySurface875.geometry}
        material={materials.rocks}
        position={[14.225, 3.952, -3.843]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group position={[6.233, -3.521, -9.794]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface1188.geometry}
          material={materials.floor2}
          position={[-27.895, 34.271, 0.98]}
          rotation={[0, 0, 0.05]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1188001.geometry}
          material={materials.floor2}
          position={[-1.709, -34.344, 0.118]}
          rotation={[0, 0, -0.008]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1188002.geometry}
          material={materials.floor2}
          position={[27.707, 31.299, 0.118]}
          rotation={[0, 0, 2.229]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1189.geometry}
          material={materials.ground}
          position={[-27.771, 34.238, 2.702]}
          rotation={[0, 0, 0.05]}
          scale={[1, 1, 0.697]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1189001.geometry}
          material={materials.ground}
          position={[-1.587, -34.385, 1.839]}
          rotation={[0, 0, -0.008]}
          scale={[1, 1, 0.697]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1189002.geometry}
          material={materials.ground}
          position={[27.664, 31.42, 1.839]}
          rotation={[0, 0, 2.229]}
          scale={[1, 1, 0.697]}
        />
      </group>
      <group position={[-11.469, -1.085, 36.331]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh324.geometry}
          material={materials.tree1}
        />
        <mesh
          
          
          geometry={nodes.Mesh324_1.geometry}
          material={materials.tree2}
        />
        <mesh
          
          
          geometry={nodes.Mesh324_2.geometry}
          material={materials.tree_body}
        />
      </group>
      <mesh
        
        
        geometry={nodes.pCylinder159.geometry}
        material={materials.roof2}
        position={[-34.696, 8.434, 4.8]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group position={[34.659, -1.65, 6.611]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh327.geometry}
          material={materials.roof3}
        />
        <mesh
          
          
          geometry={nodes.Mesh327_1.geometry}
          material={materials.phongE1}
        />
        <mesh
          
          
          geometry={nodes.Mesh327_2.geometry}
          material={materials.totem}
        />
        <mesh
          
          
          geometry={nodes.Mesh327_3.geometry}
          material={materials.roof1}
        />
        <mesh
          
          
          geometry={nodes.Mesh327_4.geometry}
          material={materials.totem2}
        />
      </group>
      <group position={[-17.232, -0.706, 10.11]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh328.geometry}
          material={materials.roof3}
        />
        <mesh
          
          
          geometry={nodes.Mesh328_1.geometry}
          material={materials.phongE1}
        />
        <mesh
          
          
          geometry={nodes.Mesh328_2.geometry}
          material={materials.totem}
        />
        <mesh
          
          
          geometry={nodes.Mesh328_3.geometry}
          material={materials.roof1}
        />
        <mesh
          
          
          geometry={nodes.Mesh328_4.geometry}
          material={materials.totem2}
        />
      </group>
      <mesh
        
        
        geometry={nodes.polySurface319.geometry}
        material={materials.wood}
        position={[-5.115, 10.644, -36.843]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group position={[3.906, -5.712, -1.711]} rotation={[1.569, -0.001, -0.044]} scale={1.697}>
        <group position={[-1.664, -21.291, -4.963]}>
          <mesh
            
            
            geometry={nodes.Mesh330.geometry}
            material={materials.windows_frame}
          />
          <mesh
            
            
            geometry={nodes.Mesh330_1.geometry}
            material={materials.windows_background}
          />
        </group>
        <mesh
          
          
          geometry={nodes.polySurface1378.geometry}
          material={materials.wood2}
          position={[-1.655, -21.293, -4.978]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1379.geometry}
          material={materials.wood2}
          position={[-1.566, -21.289, -4.963]}
        />
      </group>
      <group position={[2.069, -5.498, -1.507]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface1246.geometry}
          material={materials.wood}
          position={[6.831, -5.511, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1248.geometry}
          material={materials.wood}
          position={[8.26, -2.964, -7.835]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1249.geometry}
          material={materials.wood}
          position={[8.26, -1.967, -8.175]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1250.geometry}
          material={materials.wood}
          position={[8.26, -0.671, -8.176]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1251.geometry}
          material={materials.wood}
          position={[8.26, 0.442, -7.754]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1344.geometry}
          material={materials.wood}
          position={[5.953, -6.727, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1345.geometry}
          material={materials.wood}
          position={[4.873, -7.768, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1349.geometry}
          material={materials.wood}
          position={[-0.713, -9.608, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1350.geometry}
          material={materials.wood}
          position={[-2.201, -9.413, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1351.geometry}
          material={materials.wood}
          position={[-3.63, -8.956, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1352.geometry}
          material={materials.wood}
          position={[-4.954, -8.251, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1353.geometry}
          material={materials.wood}
          position={[-6.132, -7.321, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1354.geometry}
          material={materials.wood}
          position={[-7.124, -6.196, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1355.geometry}
          material={materials.wood}
          position={[-7.9, -4.912, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1356.geometry}
          material={materials.wood}
          position={[-8.434, -3.51, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1357.geometry}
          material={materials.wood}
          position={[-8.71, -2.035, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1358.geometry}
          material={materials.wood}
          position={[-8.718, -0.535, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1359.geometry}
          material={materials.wood}
          position={[-8.458, 0.943, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1360.geometry}
          material={materials.wood}
          position={[-7.939, 2.35, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1361.geometry}
          material={materials.wood}
          position={[-7.177, 3.643, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1362.geometry}
          material={materials.wood}
          position={[-6.196, 4.778, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1363.geometry}
          material={materials.wood}
          position={[-5.029, 5.721, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1364.geometry}
          material={materials.wood}
          position={[-3.712, 6.44, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1365.geometry}
          material={materials.wood}
          position={[-2.288, 6.912, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1366.geometry}
          material={materials.wood}
          position={[-0.803, 7.123, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1367.geometry}
          material={materials.wood}
          position={[0.696, 7.065, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1368.geometry}
          material={materials.wood}
          position={[2.161, 6.741, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1369.geometry}
          material={materials.wood}
          position={[3.545, 6.161, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1370.geometry}
          material={materials.wood}
          position={[4.803, 5.343, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1371.geometry}
          material={materials.wood}
          position={[5.894, 4.314, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1372.geometry}
          material={materials.wood}
          position={[6.785, 3.106, -6.012]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1373.geometry}
          material={materials.wood}
          position={[7.445, 1.759, -6.012]}
        />
      </group>
      <mesh
        
        
        geometry={nodes.polySurface850.geometry}
        material={materials.wood2}
        position={[-18.203, -0.343, 27.143]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group position={[12.817, 0.583, 21.059]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh368.geometry}
          material={materials.tree2}
        />
        <mesh
          
          
          geometry={nodes.Mesh368_1.geometry}
          material={materials.tree1}
        />
        <mesh
          
          
          geometry={nodes.Mesh368_2.geometry}
          material={materials.tree_body}
        />
      </group>
      <mesh
        
        
        geometry={nodes.polySurface857.geometry}
        material={materials.wood}
        position={[-18.31, 7.822, 27.226]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.polySurface860.geometry}
        material={materials.wood}
        position={[-18.31, 4.1, 27.226]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.polySurface1310.geometry}
        material={materials.totem}
        position={[-20.376, -2.574, 22.469]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube213.geometry}
        material={materials.roof2}
        position={[0.844, 12.98, 9.983]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.polySurface1318.geometry}
        material={materials.windows_frame}
        position={[0.874, 22.146, 7.412]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group position={[-46.333, -5.766, 6.069]} rotation={[Math.PI / 2, 0, -1.539]} scale={1.697}>
        <group position={[-14.002, 17.722, -4.142]}>
          <mesh
            
            
            geometry={nodes.Mesh374.geometry}
            material={materials.windows_frame}
          />
          <mesh
            
            
            geometry={nodes.Mesh374_1.geometry}
            material={materials.windows_background}
          />
        </group>
        <mesh
          
          
          geometry={nodes.polySurface1375.geometry}
          material={materials.wood2}
          position={[-14.009, 17.725, -4.142]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1376.geometry}
          material={materials.wood2}
          position={[-14.009, 17.725, -4.154]}
        />
      </group>
      <group position={[-34.711, 0.876, 4.832]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh377.geometry}
          material={materials.wood}
        />
        <mesh
          
          
          geometry={nodes.Mesh377_1.geometry}
          material={materials.totem}
        />
      </group>
      <mesh
        
        
        geometry={nodes.polySurface1244.geometry}
        material={materials.wood2}
        position={[1.368, 1.327, -3.711]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.polySurface1074.geometry}
        material={materials.wood2}
        position={[-34.65, -3.139, 4.671]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <group position={[1.642, -5.766, -2.961]} rotation={[Math.PI / 2, 0, -0.041]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.polySurface1337.geometry}
          material={materials.wood2}
          position={[-23.237, 5.181, -2.707]}
        />
        <mesh
          
          
          geometry={nodes.polySurface1338.geometry}
          material={materials.wood2}
          position={[-23.25, 5.193, -2.707]}
        />
        <group position={[-23.224, 5.161, -2.896]}>
          <mesh
            
            
            geometry={nodes.Mesh382.geometry}
            material={materials.windows_frame}
          />
          <mesh
            
            
            geometry={nodes.Mesh382_1.geometry}
            material={materials.windows_background}
          />
        </group>
      </group>
      <group position={[-5.967, 2.135, -15.848]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh383.geometry}
          material={materials.windows_frame}
        />
        <mesh
          
          
          geometry={nodes.Mesh383_1.geometry}
          material={materials.windows_background}
        />
        <mesh
          
          
          geometry={nodes.Mesh383_2.geometry}
          material={materials.wood2}
        />
      </group>
      <group position={[-12.875, 2.135, -3.467]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh384.geometry}
          material={materials.windows_frame}
        />
        <mesh
          
          
          geometry={nodes.Mesh384_1.geometry}
          material={materials.windows_background}
        />
        <mesh
          
          
          geometry={nodes.Mesh384_2.geometry}
          material={materials.wood2}
        />
      </group>
      <group position={[-6.262, 2.135, 8.339]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh385.geometry}
          material={materials.windows_frame}
        />
        <mesh
          
          
          geometry={nodes.Mesh385_1.geometry}
          material={materials.windows_background}
        />
        <mesh
          
          
          geometry={nodes.Mesh385_2.geometry}
          material={materials.wood2}
        />
      </group>
      <group position={[10.097, 2.135, 7.849]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh386.geometry}
          material={materials.windows_frame}
        />
        <mesh
          
          
          geometry={nodes.Mesh386_1.geometry}
          material={materials.windows_background}
        />
        <mesh
          
          
          geometry={nodes.Mesh386_2.geometry}
          material={materials.wood2}
        />
      </group>
      <group position={[-4.06, -1.82, -22.912]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh432.geometry}
          material={materials.wood2}
        />
        <mesh
          
          
          geometry={nodes.Mesh432_1.geometry}
          material={materials.shovel2}
        />
        <mesh
          
          
          geometry={nodes.Mesh432_2.geometry}
          material={materials.wood}
        />
        <mesh
          
          
          geometry={nodes.Mesh432_3.geometry}
          material={materials.totem}
        />
      </group>
      <group position={[6.993, -2.172, -21.207]} rotation={[Math.PI / 2, 0, 0]} scale={1.697}>
        <mesh
          
          
          geometry={nodes.Mesh433.geometry}
          material={materials.wood}
        />
        <mesh
          
          
          geometry={nodes.Mesh433_1.geometry}
          material={materials.totem}
        />
      </group>
      <mesh
        
        
        geometry={nodes.pCube223.geometry}
        material={materials.phongE1}
        position={[0.667, 36.449, -3.569]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube224.geometry}
        material={materials.phongE1}
        position={[0.683, 36.442, -3.628]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube225.geometry}
        material={materials.phongE1}
        position={[0.695, 38.155, -3.543]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCone10.geometry}
        material={materials.phongE1}
        position={[0.789, 35.068, -3.239]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube245.geometry}
        material={materials.rocks1}
        position={[40.75, -6.603, -6.99]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube246.geometry}
        material={materials.rocks1}
        position={[23.009, -3.916, -32.114]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube247.geometry}
        material={materials.rocks1}
        position={[-1.918, -6.851, 38.165]}
        rotation={[Math.PI / 2, 0, -1.061]}
        scale={1.697}
      />
      <mesh
        
        
        geometry={nodes.pCube248.geometry}
        material={materials.rocks1}
        position={[-35.492, -7.502, -7.343]}
        rotation={[1.501, -0.083, 0.068]}
        scale={1.697}
      />
      <group position={[-65.22, -4.705, -0.159]} rotation={[Math.PI / 2, 0, 1.647]} scale={0.021}>
        <group scale={100}>
          <group position={[0.347, 0.248, -0.591]} rotation={[0.107, 0, 0]} scale={0.63}>
            <mesh
              
              
              geometry={nodes.Object_48001.geometry}
              material={materials['Material.001']}
              position={[-56.238, -49.235, 3.066]}
              rotation={[-0.106, 0.013, 1.563]}
              scale={7.928}
            />
          </group>
        </group>
      </group>
      <mesh
        
        
        geometry={nodes.Object_21.geometry}
        material={materials.Label_1}
        position={[0.005, 0.039, -0.122]}
      />
      <mesh
        
        
        geometry={nodes.Text.geometry}
        material={materials['Material.002']}
        position={[-42.233, -3.419, 52.609]}
        rotation={[Math.PI / 2, 0, 0.489]}
        scale={3.385}
      />
      <mesh
        
        
        geometry={nodes.Text001.geometry}
        material={materials['Material.002']}
        position={[2.933, -2.022, -72.574]}
        rotation={[Math.PI / 2, 0, 3.133]}
        scale={3.385}
      />
      <mesh
        
        
        geometry={nodes.Text002.geometry}
        material={materials['Material.002']}
        position={[57.398, -2.071, 45.252]}
        rotation={[Math.PI / 2, 0, -0.913]}
        scale={3.134}
      />
      <group position={[52.444, -3.117, 36.09]} rotation={[Math.PI / 2, 0, 2.199]} scale={0.03}>
        <group scale={4.968}>
          <group rotation={[Math.PI / 2, 0, 0.097]} scale={5.791}>
            <mesh
              
              
              geometry={nodes.Object_0001.geometry}
              material={materials.gold}
              position={[5.936, -6.318, 4.399]}
              rotation={[0.022, 0.22, -0.002]}
            />
            <mesh
              
              
              geometry={nodes.Object_1001.geometry}
              material={materials.grey}
              position={[6.432, -1.231, 4.399]}
              rotation={[0.022, 0.22, -0.002]}
            />
          </group>
        </group>
      </group>
      <mesh
        
        
        geometry={nodes.Cube047.geometry}
        material={materials['Material.006']}
        position={[-40.608, -1.326, 46.909]}
        rotation={[0.045, -0.829, 0.101]}
        scale={[238.692, 221.425, 238.692]}
      />
      <mesh
        
        
        geometry={nodes.Cylinder014.geometry}
        material={materials['black matle']}
        position={[-39.843, -3.931, 46.449]}
        rotation={[0.045, -0.829, 0.101]}
        scale={[238.692, 221.425, 238.692]}
      />
    </a.group>
  )
}

export default Island