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
// console.log(refs.contactRef.current.position);
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
            rotation={[0, Math.PI/2, 0]}
            position={[0,0,25]}
            ref={projectsRef}
          >
            <Projects />
          </group>

          <group
            rotation={[1, Math.PI/2, 0]}
            position={[0,0,45]}
            ref={stackRef}
          >
            <Stack />
          </group>

          {/* <PivotControls 
        rotation={[
0,0,0
      ]} 
        position={[
0,0,0
      ]}
          anchor={[-0.52,0.9,-0.7]} 
          scale={100} 
          depthTest={true} 
          fixed 
          lineWidth={2}

            onDrag={(l, dl, w, dw) => {
              refs.cameraControlsRef.current.enabled = false;
              const position = new THREE.Vector3();
              const rotation = new THREE.Quaternion();
              w.decompose(position, rotation, new THREE.Vector3());
              setPosition(position);
              setRotation(rotation);
              console.log("rotat: ", [rotation.x, rotation.y, rotation.z]);
              console.log("pos: ", [position.x, position.y, position.z]);
              
            }}
            onDragEnd={() => {
              refs.cameraControlsRef.current.enabled = true;
            }}
            ref={contactRef}
          > */}

          <group

        rotation={[
          1.555,-0.077,1.568
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

          {/* </PivotControls> */}


          <group
            rotation={[1.5,0.01,1.5]}

            ref={aboutRef}
          >
            <About />
          </group>

          <group
            rotation={[4, Math.PI/2, 0]}
            position={[0,0,85]}
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
     
        {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
          <planeGeometry args={[1000, 1000]} />
          <meshStandardMaterial color="yellow" transparent opacity={0.5} roughness={0.4} metalness={0.6} envMapIntensity={0.6} />
        </mesh> */}


    </Canvas>
  );



}