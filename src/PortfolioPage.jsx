import { useGLTF } from '@react-three/drei';
import { MeshPhysicalMaterial } from 'three';

export default function MyModel() {

  const { nodes, materials } = useGLTF('/cube.glb');

  const glassMaterial = new MeshPhysicalMaterial({
    color: 0xffffff,
    transmission: 0.9, 
    transparency: 0.1, 
    roughness: 0.1, 
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.1, 
  });

  return (
    <mesh material={glassMaterial} geometry={nodes.cube.geometry} />
  );
}