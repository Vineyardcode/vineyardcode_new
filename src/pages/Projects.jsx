import * as THREE from "three";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls } from '@react-three/drei';
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"
import { gsap } from 'gsap';
import { refs } from "../components/Refs";
import NavigationButtons from "../components/NavModal";
import '../styles/projects.css'


export default function Projects() {

  const group = useRef();
  const mesh = useRef();

  //rhombuses
  const [divCount, setDivCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useFrame((state) => {

    const t = state.clock.getElapsedTime();

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 1000 + 0.1,
      0.01
    );
    
  });


  useEffect(() => {

    let xIncrement = 10;
    let yIncrement = 10;
    const intervalId = setInterval(() => {
      setPosition(prevPosition => {
        const nextX = prevPosition.x + xIncrement;
        const nextY = prevPosition.y + yIncrement;
        if (nextX > window.innerWidth || nextX < 0) {
          xIncrement *= -1;
        }
        if (nextY > window.innerHeight || nextY < 0) {
          yIncrement *= -1;
        }
        return {
          x: prevPosition.x + xIncrement,
          y: prevPosition.y + yIncrement
        };
      });
    }, 100);

    return () => clearInterval(intervalId);
  
}, []);

  return (
    <group ref={group} dispose={null} >


      <mesh ref={mesh} >
         <boxGeometry args={[24.5, 1, 33.3]}/>
          <meshStandardMaterial 
            color={0xffffff}

          />
          <Html 
            className="projects"  
            transform occlude="blending" 
            rotation={[-Math.PI/2,0,0]} 
            position={[0,0.52,0]}
            style={{ width: "983px", height: "1350px" }} 
            zIndexRange={1}
          >
            <div className="projects-main">



            </div>
          </Html>
          <Html
          className="tag-hexa"  
          transform occlude="blending" 
          rotation={[-Math.PI/2,0,0]} 
          position={[0,2,23]}
          style={{ width: "500px", height: "100px" }}
          >
            <a href="https://tunnelvision.vercel.app/">HEXAGORE</a>
              
        </Html>
          
      </mesh>

    </group>
  );
}