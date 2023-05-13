import React from 'react';
import gsap from 'gsap';
import { refs } from './Refs';
import * as THREE from 'three'




const handleButtonClick = async (targetRef) => {
  const currentPos = await refs.cameraControlsRef.current.getPosition();
  const target = await targetRef.current.position;
  const geometry = targetRef.current.children[0].children[0].geometry;
  const faceNormals = targetRef.current.children[0].children[0].geometry.attributes.normal.array;
  const cameraControls = await refs.cameraControlsRef.current;
  const camera = await refs.cameraRef.current;


  const center = new THREE.Vector3();
  geometry.computeBoundingBox();
  geometry.boundingBox.getCenter(center);
  targetRef.current.localToWorld(center);

  const normal = new THREE.Vector3();
  faceNormals.forEach((n, i) => {
    if (i % 2 !== 1) {
      normal.set(n, faceNormals[i+1], faceNormals[i+2]);
      targetRef.current.children[0].children[0].matrixWorld.extractRotation(targetRef.current.children[0].children[0].matrixWorld);
      normal.applyMatrix4(targetRef.current.children[0].children[0].matrixWorld);
      normal.negate(); 
      return;
    }
  });


  const up = await targetRef.current.up
  const distance = 15;
  const cameraPosition = center.clone().add(normal.clone().multiplyScalar(distance));
  
  const radians = Math.PI / 2; // Example angle in radians
  const degrees = radians * (180 / Math.PI); // Convert radians to degrees


  gsap.to(currentPos, {
    duration: 1,
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

    onComplete: () => {
     
      cameraControls.enabled = false; // Disable camera controls

      

      camera.up.set(1,0,0); // Set camera's up vector to match targetRef's up vector

      cameraControls.enabled = true;
      
      
    },

  });
  
console.log(up, 'maybe');
console.log(camera.up);
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