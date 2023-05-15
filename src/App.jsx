import * as THREE from "three";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls, TrackballControls } from '@react-three/drei';
import './App.css';
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Page5 from "./pages/Page5";
import { refs } from "./components/Refs";


export default function App() {

  const projectsRef = useRef();
  const stackRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();
  const page5Ref = useRef();
  const cameraControlsRef = useRef();
  const cameraRef = useRef()
  const orbitControlsRef = useRef()

  useEffect(() => {
    // Update the refs object with the actual refs
    refs.projectsRef = projectsRef;
    refs.stackRef = stackRef;
    refs.contactRef = contactRef;
    refs.aboutRef = aboutRef;
    refs.page5Ref = page5Ref;
    refs.cameraControlsRef = cameraControlsRef;
    refs.cameraRef = cameraRef;
    refs.orbitControlsRef = orbitControlsRef
  }, []);

  const radius = 50; // Radius of the circle
  const center = new THREE.Vector3(0, 0, 0); // Center of the circle
  const angleStep = (Math.PI * 2) / 5;

  return (
    <Canvas>

        <PerspectiveCamera 
          position={[0,50,0]} 
          ref={cameraRef}
          rotation={[Math.PI / 2.7, 0, 0]}
          makeDefault
          />
        
        <Suspense fallback={null}>
        
    <group
      rotation={[0, angleStep * 0 + Math.PI/2, 0]}
      position={[
        center.x + radius * Math.cos(angleStep * 0),
        8,
        center.z + radius * Math.sin(angleStep * 0),
      ]}
      ref={projectsRef}
    >
      <Projects />
    </group>

    <group
      rotation={[0, angleStep * 1 + Math.PI/2, 0]}
      position={[
        center.x + radius * Math.cos(angleStep * 1),
        8,
        center.z + radius * Math.sin(angleStep * 1),
      ]}
      ref={stackRef}
    >
      <Stack />
    </group>

    <group
      rotation={[Math.PI/1, angleStep * 2 + Math.PI/2, Math.PI/2]}
      position={[
        center.x + radius * Math.cos(angleStep * 2),
        20,
        center.z + radius * Math.sin(angleStep * 2),
      ]}
      ref={contactRef}
    >
      <Contact />
    </group>

    <group
      rotation={[0, angleStep * 3 + Math.PI/2, 0]}
      position={[
        center.x + radius * Math.cos(angleStep * 3),
        8,
        center.z + radius * Math.sin(angleStep * 3),
      ]}
      ref={aboutRef}
    >
      <About />
    </group>

    <group
      rotation={[0, angleStep * 4 + Math.PI/2, 0]}
      position={[
        center.x + radius * Math.cos(angleStep * 4),
        8,
        center.z + radius * Math.sin(angleStep * 4),
      ]}
      ref={page5Ref}
    >
      <Page5 />
    </group>
        
        </Suspense>

      <Environment preset="city" />

     

      <CameraControls 
        ref={cameraControlsRef}
        enablePan={true}
        enableZoom={true}
        maxDistance={500}
        maxAzimuthAngle={Infinity}
        maxPolarAngle={Infinity}
         // Math.PI / 1.7
      />
     
     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[1000, 1000]} />
          <meshStandardMaterial color="yellow" transparent opacity={0.5} roughness={0.4} metalness={0.6} envMapIntensity={0.6} />
        </mesh>


    </Canvas>
  );

  
}