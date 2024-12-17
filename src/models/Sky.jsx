import { useGLTF } from '@react-three/drei'
import {useRef} from 'react'
import { useFrame } from '@react-three/fiber'

import skyScence from '../assects/3d/sky.glb'

const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScence);
    const skyref = useRef();

    useFrame((_, delta) => {
      if (isRotating && skyref.current) {
        skyref.current.rotation.y += 0.15 * delta;
      }
    });
  return (
    <mesh>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky