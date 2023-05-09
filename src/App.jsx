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
import { refs } from "./components/Refs";


export default function App() {


  const projectsRef = useRef();
  const stackRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();
  const page5Ref = useRef();
  const cameraControlsRef = useRef(null);

  useEffect(() => {
    // Update the refs object with the actual refs
    refs.projectsRef = projectsRef;
    refs.stackRef = stackRef;
    refs.contactRef = contactRef;
    refs.aboutRef = aboutRef;
    refs.page5Ref = page5Ref;
    refs.cameraControlsRef = cameraControlsRef;
  }, []);


  return (
    <Canvas>


        <PerspectiveCamera makeDefault position={[100,0,30]} rotation={[0, 0, 0]}/>

        <Suspense fallback={null}>

        <group rotation={[Math.PI/2,0,Math.PI/3]} position={[20,1,-10]}>
          <Projects />
        </group>

        <group rotation={[Math.PI/2.7,0,0]} position={[40,1,-20]}>
          <Stack />
        </group>
          
        <group rotation={[Math.PI/2.7,0,0]} position={[60,1,-30]}>
          <Contact />
        </group>

        <group rotation={[Math.PI/2.7,0,0]} position={[82,1,-42]}>
          <About />
        </group>

        <group rotation={[Math.PI/2.7,0,0]} position={[100,1,-50]} ref={page5Ref}>
          <Page5 />
        </group>

        
        </Suspense>

      <Environment preset="city" background />
      <ContactShadows position={[0, -10, 0]} scale={30} blur={2} far={15} />
      <CameraControls ref={cameraControlsRef} enablePan={true} enableZoom={true} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2}/>

  
    </Canvas>
  );

  
}