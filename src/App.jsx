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
  const cameraControlsRef = useRef();

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


        <PerspectiveCamera position={[30,1,-20]} rotation={[Math.PI/2.7,0,0]}/>
        
        <Suspense fallback={null}>

        <group rotation={[Math.PI/2.7,0,0]} position={[20,1,-10]} ref={projectsRef}>
          <Projects />

        </group>

        <group rotation={[Math.PI/2.7,0,0]} position={[40,1,-20]} ref={stackRef}>
          <Stack />
        </group>
          
        <group rotation={[Math.PI/7.7,0,0]} position={[60,1,-30]} ref={contactRef}>
          <Contact />
        </group>

        <group rotation={[Math.PI,0,0]} position={[82,100,-42]} ref={aboutRef}>
          <About />
        </group>

        <group rotation={[Math.PI/2.7,0,0]} position={[100,1,-50]} ref={page5Ref}>
          <Page5 />
        </group>

        
        </Suspense>

      <Environment preset="city" background />
      <CameraControls ref={cameraControlsRef} enablePan={true} enableZoom={true} />
      <ContactShadows position={[0, -10, 0]} scale={30} blur={2} far={15} />
    </Canvas>
  );

  
}