import * as THREE from "three";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, PerspectiveCamera, CameraControls } from '@react-three/drei';
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"
import { gsap } from 'gsap';
import { refs } from "../components/Refs";
import NavigationButtons from "../components/NavModal";
import '../styles/projects.css'
import Rhombuses from '../components/grid-rhombus'

export default function Projects() {

  const group = useRef();
  const mesh = useRef();

  //rhombuses
  const [divCount, setDivCount] = useState(210);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useFrame((state) => {

    const t = state.clock.getElapsedTime();

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 1000 + 0.1,
      0.01
    );
    
  });

  useEffect(() => {

    let xIncrement = 10;
    let yIncrement = 10;
    const intervalId = setInterval(() => {
      setPosition(prevPosition => {
        const nextX = prevPosition.x + xIncrement;
        const nextY = prevPosition.y + yIncrement;
        if (nextX > 983 || nextX < 0) {
          xIncrement *= -1;
        }
        if (nextY > 1370 || nextY < 0) {
          yIncrement *= -1;
        }
        return {
          x: prevPosition.x + xIncrement,
          y: prevPosition.y + yIncrement
        };
      });
    }, 100);

    return () => clearInterval(intervalId);

}, []);

const circleRadius = 80;
const circleX = position.x + circleRadius/2;
const circleY = position.y + circleRadius/2;

const divs = document.querySelectorAll('.rhombus');

divs.forEach((div) => {
  const divX = div.offsetLeft;
  const divY = div.offsetTop;
  const divWidth = div.offsetWidth;
  const divHeight = div.offsetHeight;

  const distanceX = circleX - (divX + divWidth / 2);
  const distanceY = circleY - (divY + divHeight / 2);
  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

  if (distance <= 70) {
    div.classList.add('andTouchedTooMuch');
    div.style.backgroundColor = "rgb(184, 172, 171)";
  } else if (distance > 70 && distance < 160 ) {
    div.classList.add('touched');
    div.style.backgroundColor = "rgb(140, 124, 123)";
    div.classList.remove('andTouchedTooMuch');
  } else if (distance > 160 && distance < 210) {
    div.style.backgroundColor = "rgb(0, 0, 0)";
    div.classList.add('butTouchedTooLittle');
    div.classList.remove('andTouchedTooMuch', 'touched');
  } else if (distance > 210 && distance < 335) {
    div.style.backgroundColor = "rgb(0, 0, 0)";
    div.classList.add('touchedTooFar');
    div.classList.remove('andTouchedTooMuch', 'touched', 'butTouchedTooLittle');
  } else {
    div.classList.remove('andTouchedTooMuch', 'touched', 'butTouchedTooLittle', 'touchedTooFar');
    div.style.backgroundColor = "transparent";
  }

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
            style={{ width: "983px", height: "1370px" }} 
            zIndexRange={1}
          >
            
          <div className="main">
              <div className="background-grid" >
                <div className="container">
                  <Rhombuses count={divCount}/>
                </div>
              </div> 
          </div>
            
          </Html>


          
          <Html
          className="tag-hexa"  
          transform occlude="blending" 
          rotation={[-Math.PI/2,0,0]} 
          position={[0,2,23]}
          style={{ width: "500px", height: "100px" }}
          >
            <a>HEXAGON'D</a>
              
        </Html>
          
      </mesh>

    </group>
  );
}