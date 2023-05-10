import * as THREE from "three";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls } from '@react-three/drei';
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"
import { refs } from "../components/Refs";
import { gsap } from "gsap";



export default function Page5() {


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

  
          <div className="page5">
            <h3>Page 5</h3>
            <h1>HELLO MOM ! ! !</h1>

          </div>

          <button onClick={() => {
                  const currentPos = refs.cameraControlsRef.current.getPosition();
                  const target = refs.projectsRef.current.position
                  // Adjust the height of the target position as needed

                  gsap.to(currentPos, {
                    duration: 2,
                    x: target.x+30,
                    y: target.y,
                    z: target.z,
                    onUpdate: () => {
                      refs.cameraControlsRef.current.setPosition(currentPos.x, currentPos.y, currentPos.z);
                      refs.cameraControlsRef.current.setLookAt(target.x+10, target.y, target.z+15, target.x, target.y, target.z, true);
                    },

                  });

                }}>Projects</button>
         
          </Html>
          <ContactShadows position={[0, -10, 0]} scale={30} blur={2} far={15} />

      </mesh>
    
    </group>
  );
}