import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { refs } from "./Refs";

const ParticleSystem = () => {
  const count = 1000;
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);

  const centerX = 0; // X coordinate of the center
  const centerY = 0; // Y coordinate of the center
  const rectWidth = 1; // Width of the rectangle
  const rectHeight = 5; // Height of the rectangle


  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI / 4; // Random angle

    let x = centerX + Math.cos(angle) * (rectWidth / 2);
    let y = centerY + Math.sin(angle) * (rectHeight / 2);
    
    const i3 = i * 3;

    positions[i3 + 0] = 10;
    positions[i3 + 1] = y; // Set Y position based on the angle
    positions[i3 + 2] = 0;

    const directionX = centerX - x; // Adjust the X direction
    const directionY = centerY - y; // Adjust the Y direction

    velocities[i3 + 0] = directionX / 1000; // Velocity in X direction
    velocities[i3 + 1] = directionY / 1000; // Velocity in Y direction
    velocities[i3 + 2] = 0; // No velocity in Z direction
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));

  const particlesRef = useRef();

  useFrame(() => {
    const positions = particlesRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const positionX = positions[i3 + 0];
      const positionY = positions[i3 + 1];
      const positionZ = positions[i3 + 2];

      // Calculate the distance from the center
      const distance = Math.sqrt(
        (positionX - centerX) ** 2 +
        (positionY - centerY) ** 2 +
        (positionZ - 0) ** 2
      );

      // Reset the particle to the starting position if it moves beyond the reset distance
      if (distance > 15) {
        positions[i3 + 0] = (Math.random() - 0.5) * 10; // Random X position within a 10-unit range
        positions[i3 + 1] = (Math.random() - 0.5) * 10; // Random Y position within a 10-unit range
        positions[i3 + 2] = 0; // Reset Z position to 0
      } else {
        // Move the particle away from the center
        positions[i3 + 0] += (positionX - centerX) * 0.01; // Adjust the X position
        positions[i3 + 1] += (positionY - centerY) * 0.01; // Adjust the Y position
        positions[i3 + 2] += (positionZ - 0) * 0.01; // Adjust the Z position
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });



  const material = new THREE.PointsMaterial({
    size: 1,
    color: 0xff00ff, // Set the color to golden
    sizeAttenuation: true,
    depthWrite: false,
  });

  return (
    <group position={[20.7,46.8,-42.55]}>
      <points ref={particlesRef} geometry={geometry} material={material} frustumCulled={false} />
    </group>
  );
};

export default ParticleSystem;
