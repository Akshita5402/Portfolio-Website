import { Html, useProgress } from "@react-three/drei";
import React from "react";
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: "white" }}>Loading {Math.round(progress * 100)}%</div>
    </Html>
  );
};

export default CanvasLoader;
