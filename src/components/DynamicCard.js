import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Text, Image } from '@react-three/drei';
import { TextureLoader } from 'three';

const ThreeDCard = ({ heading, image }) => {
  // Ensure the image is properly loaded
  //const colorMap = useLoader(TextureLoader, image);

  return (
    <mesh rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[4, 5, 0.1]} />
      <meshStandardMaterial  />
      <Image
      src = {"https://cdn-icons-png.flaticon.com/512/17586/17586810.png"}
        position={[0, 0, 0.06]} // Slightly offset from the card surface
        fontSize={0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
      />
       
      
    </mesh>
  );
};

const ThreeDCardContainer = ({ link ,heading, image }) => {
  return (
    <div style={{ height: '500px' }}>
      <Canvas>
        <Suspense fallback={null}>
          <ThreeDCard heading={heading} image={image} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDCardContainer;
