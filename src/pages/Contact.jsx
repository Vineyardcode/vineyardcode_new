import * as THREE from "three";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls } from '@react-three/drei';
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs, FaTwitter } from "react-icons/all"
import { gsap } from 'gsap';
import { refs } from "../components/Refs";
import NavigationButtons from "../components/NavModal";
import '../styles/contact.css'



export default function Contact() {


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
        <boxGeometry args={[21, 1, 25.5]}/>
        <meshStandardMaterial 
          color={0xffffff}
        />

        <Html 
            className="contact"  
            transform occlude="blending" 
            rotation={[-Math.PI/2,0,0]} 
            position={[0,0.51,0]}
            style={{ width: "840.5px", height: "1020.47px" }}
          >
 
          <div className="contact-main">

              <div className="contact-nav">
                <NavigationButtons />
              </div>
              
              <div className="contact-links">



                <div>
                  <FaTwitter size={50} color='rgb(79, 32, 171)' />
                  <h3><a href="https://twitter.com/ZiegVie">Twitter</a></h3>
                </div>

                <div>
                  <FaGithub size={50} color='rgb(79, 32, 171)'/>
                  <h3><a href='https://github.com/Vineyardcode'>GitHub</a></h3>
                </div>


              </div>        
                  
          </div>  

        </Html>

      </mesh>

    </group>
  );
}