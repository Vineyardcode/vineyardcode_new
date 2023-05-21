import * as THREE from "three";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { TransformControls, PivotControls , Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls, TrackballControls, Box } from '@react-three/drei';
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
          

          ref={cameraRef}
          near={5}
          far={350}

          />
        
        <Suspense fallback={null}>

          <group
            rotation={[1.571,-0.077,1.561]} 
            position={[81.8,36.8,39.5 ]}
            ref={projectsRef}
          >

            <Projects />
          </group>

          <group
            rotation={[1.57,-0.095,1.548]} 
            position={[80.37,48.1,6.3 ]}
            ref={stackRef}
          >
            <Stack />
          </group>

          <group
          rotation={[1.58,0.087,-1.6]}
          position={[-97.9,47.4,13.2]}
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
            rotation={[1.49,0.01,-0.035]}
            position={[20.7,46.8,-42.6]}
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
        minPolarAngle={0.51}
        maxPolarAngle={Math.PI/2+1.9}
        boundaryEnclosesCamera
      />

    </Canvas>
  );



}