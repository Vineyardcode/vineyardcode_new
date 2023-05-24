import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import '../styles/page5.css';

export default function Page5() {
  const group = useRef();
  const mesh = useRef();
  const [iframeKey, setIframeKey] = useState(0); // Add a state for the iframe key
  const [iframeLoaded, setIframeLoaded] = useState(false); // Add a state to track the iframe load status

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 1000 + 0.1,
      0.01
    );
  });


  const handleIframeLoad = () => {
    setIframeLoaded(true); // Set iframe load status to true
  };

  useEffect(() => {
    let interval; // Declare an interval variable

    if (!iframeLoaded) {
      // If iframe is not loaded
      interval = setInterval(() => {
        // Set interval to increment the key until the iframe is loaded
        setIframeKey((prevKey) => prevKey + 1);
      }, 100); // Interval duration can be adjusted as needed
    }

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [iframeLoaded]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIframeLoaded(true); // Set iframe load status to true after 2 seconds (in case iframe fails to load)
    }, 2000);

    return () => {
      clearTimeout(timeout); // Clear the timeout on component unmount
    };
  }, []);
  console.log(iframeKey);

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
            key={iframeKey}
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
