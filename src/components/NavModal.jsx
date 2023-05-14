import React from 'react';
import gsap from 'gsap';
import { refs } from './Refs';
import * as THREE from 'three'
import { CameraControls } from '@react-three/drei';



const handleButtonClick = async (targetRef) => {
  const currentPos = await refs.cameraControlsRef.current.getPosition();
  const target = await targetRef.current.position;

  const geometry = targetRef.current.children[0].children[0].geometry;

  const positionAttribute = targetRef.current.children[0].children[0].geometry.getAttribute("position");
  const normalAttribute = targetRef.current.children[0].children[0].geometry.getAttribute("normal");
  const indexAttribute = targetRef.current.children[0].children[0].geometry.getIndex();

  const positionArray = positionAttribute.array;
  const normals = normalAttribute.array;
  const indices = indexAttribute.array;
  

  const center = new THREE.Vector3();
  geometry.computeBoundingBox();
  geometry.boundingBox.getCenter(center);
  targetRef.current.localToWorld(center);


  const normal = new THREE.Vector3();
  normals.forEach((n, i) => {
    if (i % 2 !== 1) {
      normal.set(n, normals[i+1], normals[i+2]);
      targetRef.current.children[0].children[0].matrixWorld.extractRotation(targetRef.current.children[0].children[0].matrixWorld);
      normal.applyMatrix4(targetRef.current.children[0].children[0].matrixWorld);
      normal.negate();
      return;
    }
  });
  const distance = 15;
  const cameraPosition = center.clone().add(normal.clone().multiplyScalar(distance));
  
  const up = new THREE.Vector3(0, 1, 0); 
  targetRef.current.localToWorld(up)
  up.sub(targetRef.current.position).normalize();

  refs.cameraControlsRef.current.camera.up.copy(up);
  refs.cameraControlsRef.current.updateCameraUp()
  refs.cameraControlsRef.current.applyCameraUp()

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