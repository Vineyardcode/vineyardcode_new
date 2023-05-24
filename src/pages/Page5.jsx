import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import '../styles/page5.css';

export default function Page5() {
  const group = useRef();
  const mesh = useRef();
  const [iframeReady, setIframeReady] = useState(false);

  
  useFrame((state) => {

    const t = state.clock.getElapsedTime();

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 1000 + 0.1,
      0.01
    );
  });

  

  useEffect(() => {
    // Change the iframe's src attribute when it becomes ready
    if (iframeReady) {
      const iframe = document.getElementById("myIframe");
      iframe.src = "https://heartandball.vercel.app/";
    }
  }, [iframeReady]);


  const handleIframeLoad = () => {
    setIframeReady(true);
  };

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
            id="myIframe"

            width="592px"
            height="727px"
            src="https://heartandball.vercel.app/"
            title="ball"
            frameBorder={0}
            allowFullScreen
            onLoad={handleIframeLoad}

          ></iframe>
        </Html>
      </mesh>
    </group>
  );
}
