import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
  Stage,
} from "@react-three/drei";

const CoffeeModel = () => {
  const { scene: coffeeScene } = useGLTF("/coffee.glb");
  const coffeeRef = useRef();
  useFrame(() => {
    if (coffeeRef.current) {
      coffeeRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={coffeeRef}>
      <primitive object={coffeeScene} scale={[0.05, 0.05, 0.05]} />
    </mesh>
  );
};

const Coffee = React.memo(() => {
  return (
    <Canvas flat>
      <PerspectiveCamera makeDefault position={[1, 1, 1]} />
      <OrbitControls enablePan={false} enableZoom={false} />
      <Stage intensity={0.01} ambientIntensity={0.7} >
        <CoffeeModel />
      </Stage>
    </Canvas>
  );
});

export default Coffee;
