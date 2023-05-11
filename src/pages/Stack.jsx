import * as THREE from "three";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls } from '@react-three/drei';
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"
import { gsap } from 'gsap';
import { refs } from "../components/Refs";
import NavigationButtons from "../components/NavModal";

export default function Stack() {



  const group = useRef();
  const mesh = useRef();


  useFrame((state) => {

    const t = state.clock.getElapsedTime();

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    );
  });



  return (
    <group ref={group} dispose={null} >

      <mesh ref={mesh} >
         <boxGeometry args={[15, 1, 17]} />
          <meshStandardMaterial 
            color={0xffffff}
          />
          <Html 
            className="content"  
            transform occlude="blending" 
            rotation={[-Math.PI/2,0,0]} 
            position={[0,0.51,0]}
          >
            
          <NavigationButtons />

          <div className="stack">
            <h3>What I like <br/> to work with</h3>
            <div className="icons">

              <div>
                <SiTypescript size={20} color='rgb(79, 32, 171)' title='TypeScript'/>
                <p>TS</p>
              </div>

              <div>                 
                <FaJs size={20} color='rgb(79, 32, 171)' title='JavaScript'/>
                <p>JS</p>
              </div>

              <div>              
                <FaReact size={20} color='rgb(79, 32, 171)' title='React'/>
                <p>React</p>
              </div>

              <div>            
                <FaPython size={20} color='rgb(79, 32, 171)' title='Python'/>
                <p>Python</p>
              </div> 

              <div>   
                <SiVisualstudiocode size={20} color='rgb(79, 32, 171)' title='VS Code'/>
                <p>VSCode</p>
              </div>

              <div>                
                <DiGit size={20} color='rgb(79, 32, 171)' title='Git'/>
                <p>Git</p>
              </div>

              <div>              
                <SiRedux size={20} color='rgb(79, 32, 171)' title='Redux'/>
                <p>Redux</p>
              </div>

              <div>              
                <DiHtml5 size={20} color='rgb(79, 32, 171)' title='HTML5'/>
                <p>HTML5</p>
              </div>

              <div>               
                <DiCss3 size={20} color='rgb(79, 32, 171)' title='CSS'/>
                <p>CSS</p>
              </div>

              <div>           
                <DiFirebase size={20} color='rgb(79, 32, 171)' title='Firebase'/>
                <p>Firebase</p>
              </div>

              <div>           
                <SiThreedotjs size={20} color='rgb(79, 32, 171)' title='Three.js'/>
                <p>Three.js</p>
              </div>

            </div>
          </div>
         
          </Html>
      </mesh>
    
    </group>
  );
}