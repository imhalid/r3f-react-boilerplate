import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { useRef } from 'react'

function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 55,
          near: 0.1,
          far: 2000,
          position: [-4, 5, 7],
          rotateOnAxis: [3, 0, 0],
        }}
      >
        <color attach="background" args={['ghostwhite']} />
        <Experience />
      </Canvas>
    </>
  )
}

export default App
