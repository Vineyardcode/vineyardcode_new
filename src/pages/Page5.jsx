import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import '../styles/page5.css';


export default function Page5() {
  const group = useRef();
  const mesh = useRef();
  // const iframeRef = useRef();

  // const [iframeKey, setIframeKey] = useState(0);


  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 1000 + 0.1,
      0.01
    );
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIframeKey(prevKey => prevKey + 1);
  //   }, 1000);

  //   if (iframeKey >= 5) {
  //     clearInterval(interval);
  //   }

  //   return () => {
  //     clearInterval(interval);
  //   };
      
  // }, [iframeKey]);

  return (
    <group ref={group} dispose={null}>
      <mesh ref={mesh}>
        <boxGeometry args={[14.8, 1, 18.2]} />
        <meshStandardMaterial color={0xffffff} />
        <Html
          className="page5"
          transform occlude="blending"
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.52, 0]}
          style={{ width: "592px", height: "727px" }}
        >
          <iframe
            src="/gif/heartandball.gif"
            // key={iframeKey}
            width="592px"
            height="727px"
            title="ball"
            frameBorder={0}
            allowFullScreen
            // ref={iframeRef}

          ></iframe>
          
        </Html>
        <Html
          className="tag-heart"  
          transform occlude="blending" 
          rotation={[-Math.PI/2,0,0]} 
          position={[0,3,15]}
          style={{ width: "500px", height: "100px" }}
          >
            <a href="https://heartandball.vercel.app/">BALL & CUBE & BALL </a>
              
        </Html>
      </mesh>
    </group>
  );
}
