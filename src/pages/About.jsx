import * as THREE from "three";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls } from '@react-three/drei';
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"
import { gsap } from 'gsap';
import { refs } from "../components/Refs";
import NavigationButtons from "../components/NavModal";
import '../styles/about.css'


export default function About() {



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
         <boxGeometry args={[15, 1, 17]} />
          <meshStandardMaterial 
            color={0xffffff}
          />
          <Html
            className="about"
            transform occlude="blending" 
            rotation={[-Math.PI/2,0,0]} 
            position={[0,0.51,0]}
            style={{ width: "600px", height: "680px" }}

          >

            <div className="about-main">

              <div className="about-nav">
                <NavigationButtons id={"about-nav"} />
              </div>

              <h3>
              Welcome to my web developer portfolio! <br /> <br />

I'm thrilled to have you here and share my passion for creating stunning and functional websites. My name is Adam, and I am a dedicated web developer with a strong focus on crafting unique online experiences.

              <br /> <br />

              Please take a moment to browse through my portfolio and explore the projects I have worked on. If you have any questions or would like to discuss a potential collaboration, feel free to reach out to me through the contact page. I'm always excited to embark on new ventures and bring ideas to life.
              </h3>

              <h3>The room you are in right now is just a model of the <a href="https://sketchfab.com/3d-models/the-king-s-hall-d18155613363445b9b68c0c67196d98d">King's Hall</a> by <a href="https://sketchfab.com/SkoklosterCastle">Skokloster Castle (Skoklosters slott)</a> licensed under <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution</a>. I have built upon this model.</h3>

            </div>
            
          </Html>
      </mesh>
      <ContactShadows position={[0, -3, 0]} scale={30} blur={2} far={15} />
    </group>
  );
}