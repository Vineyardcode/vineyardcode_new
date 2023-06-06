import * as THREE from "three";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls } from '@react-three/drei';
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"
import { gsap } from 'gsap';
import { refs } from "../components/Refs";
import NavigationButtons from "../components/NavModal";
import '../styles/stack.css'


export default function Stack() {



  const group = useRef();
  const mesh = useRef();


  useFrame((state) => {

    const t = state.clock.getElapsedTime();

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 1000 + 0.1,
      0.01
    );
    // group.current.rotation.y = THREE.MathUtils.lerp(
    //   group.current.rotation.y,
    //   Math.sin(t / 4) / 100,
    //   0.1
    // );
    // group.current.rotation.z = THREE.MathUtils.lerp(
    //   group.current.rotation.z,
    //   Math.sin(t / 8) / 100,
    //   0.1
    // );
  });



  return (
    <group ref={group} dispose={null} >

      <mesh ref={mesh} >
         <boxGeometry args={[20.9, 1, 25.5]} />
          <meshStandardMaterial 
            color={0xffffff}
          />
          <Html 
            className="stack"  
            transform occlude="blending" 
            rotation={[-Math.PI/2,0,0]} 
            position={[0,0.51,0]}
            style={{ width: "839px", height: "1025px" }}

          >

          <iframe src="/gif/terrain.gif" 
              frameBorder={0}
              width="840px"
              height="1025px"
              allowFullScreen
            ></iframe>
            </Html>


        <Html
          className="tag-terrain"  
          transform occlude="blending" 
          rotation={[-Math.PI/2,0,0]} 
          position={[0,1,15]}
          style={{ width: "500px", height: "100px" }}
          >
            <a href="https://terrain-puce.vercel.app/">TERRAIN</a>
              
        </Html>


        </mesh>
    </group>
  );
}