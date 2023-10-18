import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
  Stage,
} from "@react-three/drei";

const TomatoModel = () => {
  const tomatoRef = useRef();
  const { scene: tomatoScene } = useGLTF("/tomato.glb");

  useFrame(() => {
    if (tomatoRef.current) {
      tomatoRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={tomatoRef}>
      <group>
        <primitive object={tomatoScene} scale={[0.1, 0.1, 0.1]} />
      </group>
    </mesh>
  );
};

const Tomato = () => {
  return (
    <Canvas flat>
      <PerspectiveCamera makeDefault position={[10, 10, 10]} />
      <OrbitControls enablePan={false} enableZoom={false} />
      <Stage intensity={0.03} ambientIntensity={0.8} spotlightIntensity={0.6}>
        <TomatoModel />
      </Stage>
    </Canvas>
  );
};

export default Tomato;
