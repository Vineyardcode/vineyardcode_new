import React,{useEffect} from 'react';
import gsap from 'gsap';
import { refs } from './Refs';
import * as THREE from 'three'
import { CameraControls } from '@react-three/drei';
import * as holdEvent from 'hold-event'

const Controls = () => {

  const KEYCODE = {
    W: 87,
    A: 65,
    S: 83,
    D: 68,
    SHIFT: 16,
    SPACE: 32
  };
  
  useEffect(() => {
    const handleAKeyHold = (event) => {
      refs.cameraControlsRef.current.truck(-0.05 * event.deltaTime, 0, false);
    };
  
    const handleDKeyHold = (event) => {
      refs.cameraControlsRef.current.truck(0.05 * event.deltaTime, 0, false);
    };
  
    const handleWKeyHold = (event) => {
      refs.cameraControlsRef.current.forward(0.05 * event.deltaTime, false);
    };
  
    const handleSKeyHold = (event) => {
      refs.cameraControlsRef.current.forward(-0.05 * event.deltaTime, false);
    };
  
    const handleShiftHold = (event) => {
      refs.cameraControlsRef.current.truck(0, 0.05 * event.deltaTime, false);
    };
  
    const handleSpacebarHold = (event) => {
      refs.cameraControlsRef.current.truck(0, -0.05 * event.deltaTime, false);
    };
  
    const aKeyHold = new holdEvent.KeyboardKeyHold(KEYCODE.A, 16.666);
    const dKeyHold = new holdEvent.KeyboardKeyHold(KEYCODE.D, 16.666);
    const wKeyHold = new holdEvent.KeyboardKeyHold(KEYCODE.W, 16.666);
    const sKeyHold = new holdEvent.KeyboardKeyHold(KEYCODE.S, 16.666);
    const shiftKeyHold = new holdEvent.KeyboardKeyHold(KEYCODE.SHIFT, 16.666);
    const spacebarKeyHold = new holdEvent.KeyboardKeyHold(KEYCODE.SPACE, 16.666);
  
    aKeyHold.addEventListener('holding', handleAKeyHold);
    dKeyHold.addEventListener('holding', handleDKeyHold);
    wKeyHold.addEventListener('holding', handleWKeyHold);
    sKeyHold.addEventListener('holding', handleSKeyHold);
    shiftKeyHold.addEventListener('holding', handleShiftHold);
    spacebarKeyHold.addEventListener('holding', handleSpacebarHold);
  
    return () => {
      aKeyHold.removeEventListener('holding', handleAKeyHold);
      dKeyHold.removeEventListener('holding', handleDKeyHold);
      wKeyHold.removeEventListener('holding', handleWKeyHold);
      sKeyHold.removeEventListener('holding', handleSKeyHold);
      shiftKeyHold.removeEventListener('holding', handleShiftHold);
      spacebarKeyHold.removeEventListener('holding', handleSpacebarHold);
    };
  }, []);
  
  

  return
};

export default Controls;