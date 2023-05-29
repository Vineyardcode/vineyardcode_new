import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { refs } from "./Refs";

const ParticleSystem = () => {
  const count = 250;
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);

  const centerX = 0; // X coordinate of the center
  const centerY = 0; // Y coordinate of the center

  const frameWidth = 25; // Width of the frame rectangle
  const frameHeight = 30; // Height of the frame rectangle
  const innerWidth = 15; // Width of the empty space in the middle
  const innerHeight = 20; // Height of the empty space in the middle

  const startX = -frameWidth / 2; // X coordinate of the starting position
  const startY = -frameHeight / 2; // Y coordinate of the starting position

  for (let i = 0; i < count; i++) {
    let x, y;

    // Generate random positions within the frame rectangle
    do {
      x = startX + Math.random() * frameWidth;
      y = startY + Math.random() * frameHeight;
    } while (
      (x > centerX - innerWidth / 2 && x < centerX + innerWidth / 2) &&
      (y > centerY - innerHeight / 2 && y < centerY + innerHeight / 2)
    );

    const i3 = i * 3;

    positions[i3 + 0] = x; // Set X position within the frame rectangle
    positions[i3 + 1] = y; // Set Y position within the frame rectangle
    positions[i3 + 2] = 0;

    const directionX = centerX - x; // Adjust the X direction
    const directionY = centerY - y; // Adjust the Y direction

    velocities[i3 + 0] = 0.1; // Velocity in X direction
    velocities[i3 + 1] = 0.1; // Velocity in Y direction
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

      const distanceX = Math.abs(positionX - centerX);
      const distanceY = Math.abs(positionY - centerY);

      const xLimit = frameWidth / 2; // Half the width of the frame rectangle
      const yLimit = frameHeight / 2; // Half the height of the frame rectangle

      if (
        distanceX > xLimit - 0.5 ||
        distanceY > yLimit - 0.5 ||
        (distanceX < innerWidth / 2 && distanceY < innerHeight / 2)
      ) {
        let x, y;

        // Generate new random positions within the frame rectangle
        do {
          x = startX + Math.random() * frameWidth;
          y = startY + Math.random() * frameHeight;
        } while (
          (x > centerX - innerWidth / 2 && x < centerX + innerWidth / 2) &&
          (y > centerY - innerHeight / 2 && y < centerY + innerHeight / 2)
        );

        positions[i3 + 0] = x; // Set new X position within the frame rectangle
        positions[i3 + 1] = y; // Set new Y position within the frame rectangle
        positions[i3 + 2] = 0; // Reset Z position to 0
      } else {
        positions[i3 + 0] += (positionX - centerX) * 0.001; // Adjust the X position
        positions[i3 + 1] += (positionY - centerY) * 0.001; // Adjust the Y position
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
    <group position={[20.7, 46.8, -42]}>
      <points ref={particlesRef} geometry={geometry} material={material} frustumCulled={false} />
    </group>
  );
};

export default ParticleSystem;
