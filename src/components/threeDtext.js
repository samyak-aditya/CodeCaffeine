import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";

const ThreeDText = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      {/* Lighting for the scene */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Suspense to handle loading */}
      <Suspense fallback={<span>Loading...</span>}>
        {/* 3D Text */}
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json" // Correct path to the font file
          size={1}
          height={0.5}
          curveSegments={32}
          bevelEnabled
          bevelThickness={0.1}
          bevelSize={0.05}
          bevelOffset={0}
          bevelSegments={8}
        >
          3D Text
          <meshStandardMaterial color="#f98949" />
        </Text3D>
      </Suspense>

      {/* Controls for interacting with the scene */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDText;
