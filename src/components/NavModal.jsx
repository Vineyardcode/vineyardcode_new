import React from 'react';
import gsap from 'gsap';
import { refs } from './Refs';

const handleButtonClick = async (targetRef) => {
  const currentPos = await refs.cameraControlsRef.current.getPosition();
  const target = await targetRef.current.position;

  gsap.to(currentPos, {
    duration: 2,
    x: target.x + 30,
    y: target.y,
    z: target.z,
    onUpdate: () => {
      refs.cameraControlsRef.current.setPosition(currentPos.x, currentPos.y, currentPos.z);
      refs.cameraControlsRef.current.setLookAt(target.x + 10, target.y, target.z + 15, target.x, target.y, target.z, true);
    },
  });
};

const NavigationButtons = () => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleButtonClick(refs.projectsRef)}>Projects</button>
        </li>
        <li>
          <button onClick={() => handleButtonClick(refs.stackRef)}>Stack</button>
        </li>
        <li>
          <button onClick={() => handleButtonClick(refs.contactRef)}>Contact</button>
        </li>
        <li>
          <button onClick={() => handleButtonClick(refs.aboutRef)}>About</button>
        </li>
        <li>
          <button onClick={() => handleButtonClick(refs.page5Ref)}>Page5</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationButtons;