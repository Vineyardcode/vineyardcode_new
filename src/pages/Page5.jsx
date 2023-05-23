import * as THREE from "three";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls } from '@react-three/drei';
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"
import { gsap } from 'gsap';
import { refs } from "../components/Refs";
import NavigationButtons from "../components/NavModal";
import '../styles/page5.css'


export default function Page5() {


  const group = useRef();
  const mesh = useRef();
  const iframeRef = useRef();

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

  useEffect(() => {
    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  useEffect(() => {
    sendMessageToIframe();
  }, []);

  const receiveMessage = (event) => {
    // IMPORTANT: Check the origin of the message
    if (event.origin === "https://heartandball.vercel.app") {
      // The message was sent from your site
      console.log(event.data);
    } else {
      // The message was NOT sent from your site
      // Be careful! Do not use it.
      return;
    }
  };

  const sendMessageToIframe = () => {
    // IMPORTANT: Change the target origin to the origin of your iframe's content
    const targetOrigin = "https://heartandball.vercel.app";

    // Send a message to the iframe
    iframeRef.current.contentWindow.postMessage(
      "Hello from the other side!",
      targetOrigin
    );
  };


  return (

    <group ref={group} dispose={null} >

      <mesh ref={mesh} >
      <boxGeometry args={[14.8, 1, 18.2]} />
      <meshStandardMaterial 
        color={0xffffff}
      />
          <Html 
            className="page5"  
            transform occlude="blending" 
            rotation={[-Math.PI/2,0,0]} 
            position={[0,0.52,0]}
            style={{ width: "592px", height: "727px" }}
          >
           
          <iframe
            ref={iframeRef}
            width="592px"
            height="727px"
            src="https://heartandball.vercel.app/"
            title="ball"
            allowFullScreen

            >

          </iframe>


          </Html>
          
      </mesh>
    </group>
 
  );
}

