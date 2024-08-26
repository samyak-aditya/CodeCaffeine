import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { TextureLoader } from 'three';
//import texture from '../textures/map.jpg'; // Path to your texture image

const Card = () => {
  //const colorMap = useLoader(TextureLoader, texture);

  return (
    <mesh rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[3, 1.5, 0.1]} />
      <meshStandardMaterial  />
      <Text
        position={[0, 0, 0.06]} // Slightly offset from the card surface
        fontSize={0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Your Text Here
      </Text>
    </mesh>
  );
};

const App = () => {
  return (
    <div style={{ height: '500px' }}>
      <Canvas>
        <Suspense fallback={<div>Loading...</div>}>
          <Card />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <OrbitControls enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
