import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei';
import './App.css';
import Portfolio from "./pages/PortfolioPage";



function Cube(props) {

  const group = useRef();
  const mesh = useRef();


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

      <mesh position={[0, 0, 0]} ref={mesh}>
         <boxGeometry args={[15, 1, 17]} />
          <meshStandardMaterial 
          
              color={0xffffff}

          />
          <Html 
            className="content"  
            transform occlude="blending" 
            rotation={[-Math.PI/2,0,0]} 
            position={[0,0.51,0]}
          >
          <Portfolio />
          </Html>
      </mesh>

    </group>
  );
}

//camera={{ position: [0, -30, 30], rotateOnAxis: [Math.PI/2.8, 100, 0] }}
export default function App() {



  return (
    <Canvas camera={{ position: [0, 50, 10], rotation: [0, 0, 0], fov: 25 }}>



      <Suspense fallback={null}>
        <group rotation={[Math.PI/2.8,0,0]} position={[0, 5, 0]}>
          <Cube />
        </group>
        <Environment preset="city" background />
      </Suspense>

      <ContactShadows position={[0, -5, 0]} scale={30} blur={2} far={5} />
      <OrbitControls enablePan={true} enableZoom={true} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
  );


  
}