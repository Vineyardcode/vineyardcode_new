import * as THREE from "three";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { TransformControls, PivotControls , Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls, TrackballControls } from '@react-three/drei';
import './App.css';
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Page5 from "./pages/Page5";
import { refs } from "./components/Refs";
import NavigationButtons from "./components/NavModal";

const GLTFModel = () => {
  const { scene } = useGLTF('/scene.gltf');

  scene.scale.set(20, 20, 20);
  scene.position.set(0, 15, -100);


  return <primitive object={scene} />;
};



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
    refs.projectsRef = projectsRef;
    refs.stackRef = stackRef;
    refs.contactRef = contactRef;
    refs.aboutRef = aboutRef;
    refs.page5Ref = page5Ref;
    refs.cameraControlsRef = cameraControlsRef;
    refs.cameraRef = cameraRef;
    refs.orbitControlsRef = orbitControlsRef



  }, []);


  return (
    <Canvas>

        <PerspectiveCamera 
          position={[0,0,50]} 
          ref={cameraRef}
          rotation={[Math.PI / 2.7, 0, 0]}
          makeDefault
          />
        
        <Suspense fallback={null}>
        
          <group
            rotation={[1.58,0.087,-1.6]}
            position={[-97.9,47.4,13.2]}
            ref={projectsRef}
          >
            <Projects />
          </group>

          <group
            rotation={[1.58,0.121,-1.61]}
            position={[-99.9,46.8,-18.55]}
            ref={stackRef}
          >
            <Stack />
          </group>

          <group
            rotation={[
              1.555,-0.077,1.561
          ]} 
            position={[
              81.8,
              36.8,
              39.5
          ]}
            ref={contactRef}
          >
            <Contact />
          </group>

          <group
            rotation={[1.65,0.01,3.1]}
            position={[26.1,49.3,196]}
            ref={aboutRef}
          >
            <About />
          </group>

          <group
            rotation={[1.57,-0.1,1.542]}
            position={[85,9.9,155.5]}
            ref={page5Ref}
          >
            <Page5 />
          </group>


        

        <GLTFModel/>
        </Suspense>

      <Environment preset="city" />

      <CameraControls 
        ref={cameraControlsRef}
        enablePan={false}
        enableZoom={true}
        maxDistance={500}
        maxAzimuthAngle={Infinity}
        maxPolarAngle={Infinity}
        
      />
     
    </Canvas>
  );



}