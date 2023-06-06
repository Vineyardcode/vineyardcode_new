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
                Welcome to My 3D Virtual Gallery of Creative Coding Art! <br /> <br />
                I'm thrilled to have you here to share my passion for art and coding. I'm Adam, a dedicated web developer focused on crafting unique online experiences.
                <br /> <br />
                To explore this virtual gallery, use the following controls:
              

                <ul>
                  <li>Use the "W", "A", "S", and "D" keys to move around the space.</li>
                  <li>Hold down the left Shift key to descend and the Space key to ascend.</li>
                  <li>Left-click and drag the mouse to look around.</li>
                </ul>

            
                Thank you for joining me in my 3D Virtual Gallery. Enjoy the journey!
              </h3>

              <h3>The room you are in right now is just a model of the <a href="https://sketchfab.com/3d-models/the-king-s-hall-d18155613363445b9b68c0c67196d98d">King's Hall</a> by <a href="https://sketchfab.com/SkoklosterCastle">Skokloster Castle (Skoklosters slott)</a> licensed under <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution</a>. I have built upon this model.</h3>

            </div>
            
          </Html>
      </mesh>

    </group>
  );
}