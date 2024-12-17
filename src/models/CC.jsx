import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import CCS from '../assects/3d/cc.glb'

export function Model(props) {
  const { nodes, materials } = useGLTF(CCS)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.002']}
        position={[4.623, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top.geometry}
        material={materials['Material.001']}
        position={[4.623, 0.406, 0]}
        scale={1.081}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials['Material.022']}
        position={[4.631, 0.659, 0.054]}
        scale={0.195}
      />
    </group>
  )
}

useGLTF.preload('/cc.glb')