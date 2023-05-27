import * as THREE from "three";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls } from '@react-three/drei';
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"
import { gsap } from 'gsap';
import { refs } from "../components/Refs";
import NavigationButtons from "../components/NavModal";
import '../styles/page5.css'


export default function Page6() {


  const group = useRef();
  const mesh = useRef();


  useFrame((state) => {

    const t = state.clock.getElapsedTime();

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 1000 + 0.1,
      0.01
    );

  });

  return (

    <group ref={group} dispose={null} >

      <mesh ref={mesh} >
      <boxGeometry args={[14.8, 1, 18.2]} />
      <meshStandardMaterial 
        color={0xffffff}
      />
          <Html 
            className="page6"  
            transform occlude="blending" 
            rotation={[-Math.PI/2,0,0]} 
            position={[0,0.52,0]}
            style={{ width: "592px", height: "727px" }}
          >
           
          <div className="page6-main">

            <div className="page6-nav">
              <NavigationButtons />
            </div>

            <div className="page6-main">
              <h3>Page 6</h3>
              <h1></h1>
            </div>

            </div> 
          </Html>
          
      </mesh>
    </group>
 
  );
}






