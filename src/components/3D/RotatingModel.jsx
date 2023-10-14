import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Model from "./Model";

const RotatingModel = () => {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <Model ref={modelRef} />;
};

export default RotatingModel;
