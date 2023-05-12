import React from 'react';
import gsap from 'gsap';
import { refs } from './Refs';
import * as THREE from 'three'
import { BufferAttribute } from 'three';
import { Box3 } from 'three';



const handleButtonClick = async (targetRef) => {
  const currentPos = await refs.cameraControlsRef.current.getPosition();
  const target = await targetRef.current.position;



  const geometry = targetRef.current.children[0].children[0].geometry;

  const vertices = targetRef.current.children[0].children[0].geometry.attributes.position.array;

  const materialIndices = geometry.index.array;

  const faceNormals = targetRef.current.children[0].children[0].geometry.attributes.normal.array;

  const center = new THREE.Vector3();
  geometry.computeBoundingBox();
  geometry.boundingBox.getCenter(center);
  targetRef.current.localToWorld(center);

  let maxNormalIndex = -1;
  let maxNormalX = -Infinity;

  const normal = new THREE.Vector3();
  faceNormals.forEach((n, i) => {
    if (i % 2 === 0) {
      normal.set(n, faceNormals[i+1], faceNormals[i+2]);
      targetRef.current.children[0].children[0].matrixWorld.extractRotation(targetRef.current.children[0].children[0].matrixWorld);
      normal.applyMatrix4(targetRef.current.children[0].children[0].matrixWorld);
      normal.negate(); // Invert the direction of the normal vector
      return;
    }
  });


  const distance = 15;
  const cameraPosition = center.clone().add(normal.clone().multiplyScalar(distance));
  

  console.log(cameraPosition);

  gsap.to(currentPos, {
    duration: 2,
    x: cameraPosition.x,
    y: cameraPosition.y,
    z: cameraPosition.z,
    onUpdate: () => {
      refs.cameraControlsRef.current.setPosition(currentPos.x, currentPos.y, currentPos.z);
      refs.cameraControlsRef.current.setLookAt(
        cameraPosition.x,
        cameraPosition.y,
        cameraPosition.z,
        target.x,
        target.y,
        target.z,

        true
      );
    },
  });
};

const NavigationButtons = () => {
  return (
    <nav>
      <ul>
        
          <button onClick={() => handleButtonClick(refs.projectsRef)}>Projects</button>
        
        
          <button onClick={() => handleButtonClick(refs.stackRef)}>Stack</button>
        
        
          <button onClick={() => handleButtonClick(refs.contactRef)}>Contact</button>
        
        
          <button onClick={() => handleButtonClick(refs.aboutRef)}>About</button>
        
        
          <button onClick={() => handleButtonClick(refs.page5Ref)}>Page5</button>
        
      </ul>
    </nav>
  );
};

export default NavigationButtons;