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

              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ante vel purus dictum lacinia. Maecenas ut massa nec enim imperdiet rhoncus. Cras finibus ac enim non pulvinar. Vestibulum rutrum ex sit amet nibh malesuada, sit amet elementum quam mollis. Aenean eu magna lectus. Suspendisse ornare velit risus. Curabitur sem diam, sodales sed mauris in, imperdiet lobortis velit. Vestibulum euismod diam nec felis consequat consectetur. Nulla facilisi. Etiam lectus elit, ultrices a congue et, vehicula in magna. Proin nec sollicitudin purus, quis cursus ex. Fusce nisl metus, placerat in justo dapibus, egestas pharetra augue. Nunc ornare sapien at velit tempus sagittis.</h3>

              <h3>This is just a model of the <a href="https://sketchfab.com/3d-models/the-king-s-hall-d18155613363445b9b68c0c67196d98d">King's Hall</a> by <a href="https://sketchfab.com/SkoklosterCastle">Skokloster Castle (Skoklosters slott)</a> licensed under<a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution</a>. I have built upon this model.</h3>

            </div>
            
          </Html>
      </mesh>
      <ContactShadows position={[0, -3, 0]} scale={30} blur={2} far={15} />
    </group>
  );
}