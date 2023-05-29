import * as THREE from "three";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { TransformControls, PivotControls , Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls, TrackballControls, Box, useProgress, Loader } from '@react-three/drei';
import './App.css';
// components & pages
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Page5 from "./pages/Page5";
import { refs } from "./components/Refs";
import NavigationButtons from "./components/NavModal";
import { Loading } from "./components/Loading";
import Controls from "./components/Controls";
import ParticleSystem from "./components/Particles";

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
  const cameraRef = useRef();
  const orbitControlsRef = useRef();

  useEffect(() => {
    refs.projectsRef = projectsRef;
    refs.stackRef = stackRef;
    refs.contactRef = contactRef;
    refs.aboutRef = aboutRef;
    refs.page5Ref = page5Ref;
    refs.cameraControlsRef = cameraControlsRef;
    refs.cameraRef = cameraRef;
    refs.orbitControlsRef = orbitControlsRef;
  }, []);


  return (
    <>
    <Canvas>
    
      <PerspectiveCamera
          ref={cameraRef}
          near={1}
          far={300}
          
          position={[0,0,0]}
          makeDefault
        /> 

        <Suspense fallback={null}>
        <GLTFModel/>
          <group
            rotation={[1.571,-0.077,1.561]} 
            position={[81.8,36.8,39.5 ]}
            ref={projectsRef}
          >
            <Projects />
          </group>
          {/* <ParticleSystem
            groupPosition={[81.8,36.8,39.5 ]}
            frameWidth={22}
            frameHeight={25}
            innerWidth={15}
            innerHeight={20}
            colorR={0.006}
            colorG={0.5}
            colorB={1}
          /> */}

          <group
            rotation={[1.57,-0.095,1.548]} 
            position={[80.37,48.1,6.3]}
            ref={stackRef}
          >
            <Stack />
          </group>
          {/* <ParticleSystem
            groupPosition={[80.37,48.1,6.3]}
            frameWidth={22}
            frameHeight={25}
            innerWidth={15}
            innerHeight={20}
            colorR={0.006}
            colorG={0.5}
            colorB={1}
          /> */}

          <group
            rotation={[1.58,0.087,-1.6]}
            position={[-97.9,47.4,13.2]}
            ref={contactRef}
          >
            <Contact />
          </group>
          <ParticleSystem
            groupPosition={[-97,47.4,13.2]}
            groupRotation={[1.58,1.55,-1.6]}
            particleSize={0.5}
            particleCount={500}
            frameWidth={27}
            frameHeight={32}
            innerWidth={19}
            innerHeight={25}
            colorR={10}
            colorG={1}
            colorB={0}
          />

          <group
            rotation={[1.65,0.01,3.1]}
            position={[26.1,49.3,196]}
            ref={aboutRef}
          >
            <About />
          </group>
          {/* <ParticleSystem
            groupPosition={[26.1,49.3,194]}
            frameWidth={22}
            frameHeight={25}
            innerWidth={15}
            innerHeight={20}
            colorR={0.006}
            colorG={0.5}
            colorB={1}
          /> */}







          <group 
            rotation={[1.49,0.01,-0.035]}
            position={[20.7,46.8,-42.6]}
            ref={page5Ref}
          >
            <Page5 />
          </group>
          <ParticleSystem
            groupPosition={[20.7, 46.8, -41]}
            groupRotation={[0,0.01,0.01]}
            particleSize={1}
            particleCount={300}
            frameWidth={22}
            frameHeight={28}
            innerWidth={15}
            innerHeight={20}
            colorR={0.006}
            colorG={0.5}
            colorB={1}
          />



        </Suspense>

      <CameraControls 
        ref={cameraControlsRef}
        enablePan={false}
        enableZoom={false}
        maxAzimuthAngle={Infinity}
        minPolarAngle={0.51}
        maxPolarAngle={Math.PI/2+1.5}
        boundaryEnclosesCamera
        minDistance={0}
        maxDistance={35}
        minZoom={0}
        maxZoom={35}
      />

     <Environment preset="sunset" /> 

      <Controls />
      </Canvas>
      <Loader />
    </>
  );
}