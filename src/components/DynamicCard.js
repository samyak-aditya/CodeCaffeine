import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const ThreeDCard = ({ heading }) => {

  
  return (
    <mesh rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[4, 5, 0.1]} />
      <meshStandardMaterial color="lightgrey" /> {/* Default color without image */}
      <Text
        position={[0, 0, 0.15]} // Adjusted to offset more from the card surface
        fontSize={0.5} // Increase font size if needed
        color="black"
        anchorX="center"
        anchorY="middle"
        maxWidth={4} // Optional: adjust to constrain text within card width
      >
        {heading || 'Default Heading'} {/* Fallback to a default heading if undefined */}
      </Text>
    </mesh>
  );
};

const ThreeDCardContainer = ({ heading }) => {
  console.log(heading);
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Canvas>
        <Suspense fallback={<div>Loading...</div>}> {/* Add visible fallback for debugging */}
          <ThreeDCard heading={heading} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDCardContainer;
