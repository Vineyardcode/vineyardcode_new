import React from 'react';
import gsap from 'gsap';
import { refs } from './Refs';
import * as THREE from 'three'
import { CameraControls } from '@react-three/drei';



const handleButtonClick = async (targetRef) => {
  const currentPos = await refs.cameraControlsRef.current.getPosition();
  const target = await targetRef.current.position;
  const geometry = targetRef.current.children[0].children[0].geometry;

  const positionAttribute = geometry.getAttribute("position");
  const normalAttribute = geometry.getAttribute("normal");
  const indexAttribute = geometry.getIndex();

  const positions = positionAttribute.array;
  const indices = indexAttribute.array;
  const vertexNormals = normalAttribute.array;

  const faceNormals = [];
  for (let i = 0; i < indices.length; i += 3) {
    const index1 = indices[i] * 3;
    const index2 = indices[i + 1] * 3;
    const index3 = indices[i + 2] * 3;
  
    // Retrieve the vertex positions for the current face
    const p1 = new THREE.Vector3(positions[index1], positions[index1 + 1], positions[index1 + 2]);
    const p2 = new THREE.Vector3(positions[index2], positions[index2 + 1], positions[index2 + 2]);
    const p3 = new THREE.Vector3(positions[index3], positions[index3 + 1], positions[index3 + 2]);
  
    // Calculate the face normal using the cross product of two edge vectors
    const edge1 = new THREE.Vector3().subVectors(p2, p1);
    const edge2 = new THREE.Vector3().subVectors(p3, p1);
    const faceNormal = new THREE.Vector3().crossVectors(edge1, edge2).normalize();
  
    faceNormals.push(faceNormal);
  }

  // const faceNormal = faceNormals[5]

  const center = new THREE.Vector3();
  geometry.computeBoundingBox();
  geometry.boundingBox.getCenter(center);
  targetRef.current.localToWorld(center);

  const normal = new THREE.Vector3(0,1,0);

  // normal.set(faceNormal.x, faceNormal.y, faceNormal.z);
  targetRef.current.children[0].children[0].matrixWorld.extractRotation(targetRef.current.children[0].children[0].matrixWorld);
  normal.applyMatrix4(targetRef.current.children[0].children[0].matrixWorld);
  // normal.negate();

  const distance = 20;
  const cameraPosition = center.clone().add(normal.clone().multiplyScalar(distance));
  
  gsap.to(currentPos, {
    duration: 2,
    x: cameraPosition.x,
    y: cameraPosition.y,
    z: cameraPosition.z,
    onUpdate: () => {
      const up = new THREE.Vector3(0, 1, 0); 
      targetRef.current.localToWorld(up)
      up.sub(targetRef.current.position).normalize();
      refs.cameraControlsRef.current.camera.up.copy(up);
      refs.cameraControlsRef.current.updateCameraUp()
      refs.cameraControlsRef.current.applyCameraUp()

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