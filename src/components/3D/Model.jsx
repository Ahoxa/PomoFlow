import React from "react";
import { useGLTF } from "@react-three/drei";

const Model = ({ modelName, scale }) => {
  const { scene: tomatoScene } = useGLTF("/tomato.glb");
  const { scene: workingCatScene } = useGLTF("/workingCat.glb");

  const selectedModel = modelName === "tomato" ? tomatoScene : workingCatScene;

  return (
    <mesh>
      <group dispose={null}>
        <primitive object={selectedModel} scale={scale} />
      </group>
    </mesh>
  );
};

export default Model;
