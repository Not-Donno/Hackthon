
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import EarthS from '../assects/3d/Earth.glb'

const Earth = ({...props}) => {
  const { nodes, materials } = useGLTF(Earth)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Default OBJ']}
      />
    </group>
  )
}

export default Earth;