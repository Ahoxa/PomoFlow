import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Stage } from "@react-three/drei";
import Model from "./Model";

const DrawCanvas = ({ showTimer }) => {
  const canvasSize = showTimer ? "60%" : "40%";

  return (
    <div style={{ height: "100%", width: "100%", transition: "0.3s all" }}>
      <Canvas flat>
        <PerspectiveCamera makeDefault position={[0, 1, -1]} />
        <OrbitControls
          enablePan={false}
          enableRotate={true}
          enableZoom={false}
        />
        <Stage
          intensity={0.1}
          ambientIntensity={0.8}
          spotlightIntensity={0.6}
        >
          <Model modelName={showTimer ? "workingCat" : "tomato"} scale={showTimer ? [0.012, 0.012, 0.012] : [0.1, 0.1, 0.1]} />
        </Stage>
      </Canvas>
    </div>
  );
};

export default DrawCanvas;
