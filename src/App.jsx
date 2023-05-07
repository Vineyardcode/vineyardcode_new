import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei';
import './App.css';

function Cube(props) {
  const group = useRef();


  const { nodes, materials } = useGLTF("/cube.glb");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    );
  });

  return (
    <group ref={group} {...props} dispose={null} >

      <mesh position={[0, 0, 0]}>
         <boxGeometry args={[10, 1, 10]} />
         <meshStandardMaterial color={'#6f6f00'} metalness={0} roughness={0} transmission={1}/>
          <Html className="content"  transform occlude="blending" rotation={[-Math.PI/2,0,0]} position={[0,0.51,0]}>
            <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
              <p>Hello mom I am on the computer</p>
              <button onClick={alert}>Alert</button>
            </div>
          </Html>
      </mesh>

    </group>
  );
}


export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 30], fov: 35 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[Math.PI/4, 0, 0]} position={[0, 1, 0]}>
          <Cube />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls enablePan={false} enableZoom={true} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
  );
}