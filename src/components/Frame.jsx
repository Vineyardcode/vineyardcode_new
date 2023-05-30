import * as THREE from 'three';
import { useRef } from 'react';
import { Geometry, Base, Subtraction } from '@react-three/csg';
import { createNoise3D } from 'simplex-noise';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { gsap } from 'gsap';

const Frame = ({ position, rotation, width, height, depth }) => {
  const frameRef = useRef();

  const outerWidth = width;
  const outerHeight = height;
  const outerDepth = depth;

  const innerWidth = width - 2;
  const innerHeight = height;
  const innerDepth = depth - 2;

  const outerBoxGeometry = new THREE.BoxGeometry(outerWidth, outerHeight, outerDepth, 5, 5, 5);
  const innerBoxGeometry = new THREE.BoxGeometry(innerWidth, innerHeight, innerDepth);
  
  const normalMate = new THREE.MeshNormalMaterial()


  const noiseScale = 0.1;

  // console.log(outerBoxGeometry.attributes.position.array);

  const originalPositions = outerBoxGeometry.attributes.position.array.slice();
  const vertices = outerBoxGeometry.attributes.position.array;
  
  useFrame(() => {

    const noise3D = createNoise3D();

    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const y = vertices[i + 1];
      const z = vertices[i + 2];

      const noise = noise3D(
        x * noiseScale * 0.1,
        y * noiseScale,
        z * noiseScale
      );

      const newX = originalPositions[i] + noise;
      const newY = originalPositions[i + 1] + noise;
      const newZ = originalPositions[i + 2] + noise;

      gsap.to(vertices, {
        [i]: newX,
        [i + 1]: newY,
        [i + 2]: newZ,
        duration: 3, // Adjust the duration as needed
      });
    }

    outerBoxGeometry.attributes.normal.needsUpdate = true;
    outerBoxGeometry.attributes.position.needsUpdate = true;
    outerBoxGeometry.computeVertexNormals();
  });

  return (
    <mesh position={position} rotation={rotation} >
      
        <Box geometry={outerBoxGeometry} ref={frameRef} material={normalMate} />

    </mesh>
  );
};

export default Frame;

{/* <Geometry  computeVertexNormals>
<Subtraction geometry={innerBoxGeometry} />
      </Geometry> */}