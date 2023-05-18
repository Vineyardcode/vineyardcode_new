import * as THREE from "three";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls } from '@react-three/drei';
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"
import { gsap } from 'gsap';
import { refs } from "../components/Refs";
import NavigationButtons from "../components/NavModal";

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

  // <mesh ref={mesh} >
  // <boxGeometry args={[24.5, 1, 33.3]} />
  //  <meshStandardMaterial 
  //    color={0xffffff}
  //  />
  //  <Html 
  //    className="content"  
  //    transform occlude="blending" 
  //    rotation={[-Math.PI/2,0,0]} 
  //    position={[0,0.52,0]}
  //    style={{ width: "980px", height: "1350px" }}
  //  >

  return (
    <group ref={group} dispose={null} >

      <mesh ref={mesh} >
        <boxGeometry args={[24.5, 1, 33.3]} />
        <meshStandardMaterial 
          color={0xffffff}
        />
        <Html 
          className="contact"  
          transform occlude="blending" 
          rotation={[-Math.PI/2,0,0]} 
          position={[0,0.52,0]}
          style={{ width: "980px", height: "1350px" }}
        >
      
          <div className="contact-nav">
            <NavigationButtons />
          </div>

          <h3  className='flipLink'>Contact</h3>
          

        </Html>
      </mesh>
        <ContactShadows position={[0, -3, 0]} scale={30} blur={2} far={15} />
    </group>
  );
}