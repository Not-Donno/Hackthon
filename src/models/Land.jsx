import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import land from '../assects/3d/land.glb';

const Land = ({ ...props }) => {
  const { nodes, materials } = useGLTF(land);
  const landRef = useRef();

  return (
    <group ref={landRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.026"]}
        position={[4.623, 0, 2.31]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top001.geometry}
        material={materials["Material.027"]}
        position={[4.623, 0.406, 2.31]}
        scale={1.081}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drum.geometry}
        material={materials["STW_Texture.002"]}
        position={[4.346, 0.673, 2.17]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.219}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lid.geometry}
          material={materials["STW_Texture.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lid2.geometry}
          material={materials["STW_Texture.002"]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drum001.geometry}
        material={materials["STW_Texture.003"]}
        position={[4.508, 0.837, 2.633]}
        rotation={[0.054, -1.114, 1.789]}
        scale={0.184}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lid001.geometry}
          material={materials["STW_Texture.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lid2001.geometry}
          material={materials["STW_Texture.003"]}
        />
      </mesh>
    </group>
  );
};

export default Land;
