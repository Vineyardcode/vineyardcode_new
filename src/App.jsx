import * as THREE from "three";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls } from '@react-three/drei';
import './App.css';
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Page5 from "./pages/Page5";


const DEG45 = Math.PI / 4;
export default function App() {

  const cameraControlsRef = useRef(null);



  return (
    <Canvas>


        <PerspectiveCamera makeDefault position={[0,5,23]} rotation={[0, 0, 0]}/>

        <Suspense fallback={null}>

        <group rotation={[Math.PI/2,0,Math.PI/3]} position={[10,1,-10]}>

          <Projects />
        </group>

        <group rotation={[Math.PI/2.7,0,0]} position={[20,1,-20]}>
          <Stack />
        </group>
          
        <group rotation={[Math.PI/2.7,0,0]} position={[30,1,-30]}>
          <Contact />
        </group>

        <group rotation={[Math.PI/2.7,0,0]} position={[42,1,-42]}>
          <About />
        </group>

        <group rotation={[Math.PI/2.7,0,0]} position={[50,1,-50]}>
          <Page5 />
        </group>

        
        </Suspense>

      <Environment preset="city" background />
      <ContactShadows position={[0, -10, 0]} scale={30} blur={2} far={15} />

      <CameraControls enablePan={true} enableZoom={true} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} ref={cameraControlsRef} />
  
    </Canvas>
  );

  
}