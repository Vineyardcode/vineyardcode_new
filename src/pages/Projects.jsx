import * as THREE from "three";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls } from '@react-three/drei';
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"



const DEG45 = Math.PI / 4;
export default function Projects() {

  const group = useRef();
  const mesh = useRef();
  const cameraControlsRef = useRef(null);

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
            <div className='projects'>


              <div className='mainPage'>


                <div className="projects-main">

                <button onClick={() => {
                      cameraControlsRef.current?.rotate(DEG45, 0, true);
                    }}> Next </button>
                    
                  <div className="kanjiApp">
                    <h5>
                      <a href="https://kanjapp-ts-vineyardcode.vercel.app/">Kanji App</a>
                    </h5>
                      <p><b>Reviews kanji</b></p>
                      <p><b>Creates anki decks <br/> with animated <br/> stroke orders</b></p>
                      <p><b>and more...</b></p>
                  </div>  
                </div>

                <div className="codeExamples">
                  <h3>Code Examples</h3>
                  <div className="codeExamples-icons">
                    <div className="github">
                      <a href='https://github.com/Vineyardcode'><FaGithub size={20} color='rgb(79, 32, 171)'/></a>
                      <p>GitHub</p>
                    </div>

                    <div className='codePen'>    
                      <a href='https://codepen.io/vineyardcode'><FaCodepen size={20} color='rgb(79, 32, 171)'/></a>
                      <p>CodePen</p>
                    </div>
                  </div>
                </div>


              </div>  
            </div>   

          </Html>
          <CameraControls ref={cameraControlsRef} pos/>
      </mesh>
    
    </group>
  );
}