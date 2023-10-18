import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
  Stage,
} from "@react-three/drei";
import * as THREE from "three";

const CatModel = () => {
  const { scene: workingCatScene, animations } = useGLTF("/workingCat.glb");
  const workingCatRef = useRef();
  const mixer = useRef(new THREE.AnimationMixer(workingCatScene));

  useEffect(() => {
    if (animations.length > 0) {
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
    return () => mixer.current.stopAllAction();
  });

  useFrame((state, delta) => {
    if (workingCatRef.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <mesh ref={workingCatRef}>
      <group dispose={null}>
        <primitive object={workingCatScene} scale={[0.05, 0.05, 0.05]} />
      </group>
    </mesh>
  );
};

const Cat = React.memo(() => {
  return (
    <Canvas flat>
      <PerspectiveCamera makeDefault position={[10, 5, -10]} />
      <OrbitControls enablePan={false} enableZoom={false} />
      <Stage
        intensity={0.03}
        ambientIntensity={0.8}
        spotlightIntensity={0.2}
        shadows={false}
      >
        <CatModel />
      </Stage>
    </Canvas>
  );
});

export default Cat;
