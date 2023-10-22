import { Environment, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
export default function Experience() {
  return (
    <>
      <Environment preset="city" />
      <OrbitControls makeDefault />

      <directionalLight position={[0, 10, 0]} intensity={1} castShadow />
      <Perf position="top-left" />
      <mesh castShadow position={[-1.5, 2, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>

      <mesh castShadow position={[1.5, 2, 0]} scale={0.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[10, 0.25, 10]} />
        <meshStandardMaterial color="seagreen" />
      </mesh>
    </>
  )
}
