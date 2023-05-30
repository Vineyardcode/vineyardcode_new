import * as THREE from "three";
import React, { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { refs } from "./Refs";

const ParticleSystem = ({
  groupPosition,
  groupRotation,
  particleSize,
  particleCount,
  frameWidth,
  frameHeight,
  innerWidth,
  innerHeight,
  colorR,
  colorG,
  colorB,
}) => {
  const count = particleCount;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const centerX = 0;
  const centerY = 0;

  const startX = -frameWidth / 2;
  const startY = -frameHeight / 2;
  

  for (let i = 0; i < count; i++) {
    let x, y;

    do {
      x = startX + Math.random() * frameWidth;
      y = startY + Math.random() * frameHeight;
    } while (
      (x > centerX - innerWidth / 2 && x < centerX + innerWidth / 2) &&
      (y > centerY - innerHeight / 2 && y < centerY + innerHeight / 2)
    );

    const i3 = i * 3;

    positions[i3 + 0] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = 0;

    colors[i3 + 0] = x / frameWidth + colorR; // R component (range: 0-1)
    colors[i3 + 1] = y / frameHeight * colorG; // G component (range: 0-1)
    colors[i3 + 2] = colorB;
  }

  const geometry = new THREE.BufferGeometry()


  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));


  
  const particlesRef = useRef();

  useFrame(() => {
    const positions = particlesRef.current.geometry.attributes.position.array;
  
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
  
      const positionX = positions[i3 + 0];
      const positionY = positions[i3 + 1];
      const positionZ = positions[i3 + 2];
  
      const distanceX = Math.abs(positionX - centerX);
      const distanceY = Math.abs(positionY - centerY);
      const distanceZ = Math.abs(positionZ);
  
      const xLimit = frameWidth / 2;
      const yLimit = frameHeight / 2;
      const zLimit = 3; 
  
      if (
        distanceX > xLimit - 0.5 ||
        distanceY > yLimit - 0.5 ||
        distanceZ > zLimit ||
        (distanceX < innerWidth / 2 && distanceY < innerHeight / 2)
      ) {
        let x, y, z;
  
        do {
          x = startX + Math.random() * frameWidth;
          y = startY + Math.random() * frameHeight;
          z = -Math.random() * zLimit; 
        } while (
          (x > centerX - innerWidth / 2 && x < centerX + innerWidth / 2) &&
          (y > centerY - innerHeight / 2 && y < centerY + innerHeight / 2) &&
          (z > -zLimit)
        );
  
        positions[i3 + 0] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;
      } else {
        positions[i3 + 0] += (positionX - centerX) * 0.0007;
        positions[i3 + 1] += (positionY - centerY) * 0.0007;
        positions[i3 + 2] += (positionZ + .1) * 0.03;
      }
    }
  
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });
  

  const material = new THREE.PointsMaterial({
    size: particleSize,
    vertexColors: true,
    sizeAttenuation: true,
    depthWrite: false,
  });

  return (
    <group position={groupPosition} rotation={groupRotation}>
      <points ref={particlesRef} geometry={geometry} material={material} frustumCulled={false} />
    </group>
  );
};

export default ParticleSystem;
