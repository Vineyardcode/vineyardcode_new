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

              <div className="projects-nav">
                <NavigationButtons />
              </div>  

                <div className="projects-projects">   

                  <div className="kanjiApp">
                    
                      <h3><a href="https://kanjapp-ts-vineyardcode.vercel.app/">Kanji App</a></h3>
                      <p><b>Reviews kanji</b></p>
                      <p><b>Creates anki decks <br/> with animated <br/> stroke orders</b></p>
                      <p><b>and more...</b></p>

                  </div>  
                  
                  <div className="codePen">
                    
                    <h3><a href='https://codepen.io/vineyardcode'>CodePen</a></h3>   
                    <FaCodepen size={39} color='rgb(79, 32, 171)'/>
                    <p><b>small scale projects <br/> and sketches</b></p>
                    
                  </div>
                  
                </div> 

            </div>
          </Html>
          
      </mesh>
      <ContactShadows position={[0, -3, 0]} scale={30} blur={2} far={15} />
    </group>
  );
}