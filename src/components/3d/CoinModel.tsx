import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

export default function CoinModel({ ...props }) {
  const group = useRef();
  const time = useRef(0);
  const dollarRef = useRef();

  // Create texture for the coin surface
  const textureLoader = new THREE.TextureLoader();
  const metalTexture = textureLoader.load('https://raw.githubusercontent.com/pmndrs/drei-assets/master/matcap-gold.png');

  useFrame((state, delta) => {
    time.current += delta;

    if (group.current) {
      // More dynamic rotation
      group.current.rotation.y += Math.sin(time.current * 0.5) * 0.02 + 0.01;
      
      // Enhanced floating motion
      group.current.position.y = Math.sin(time.current * 2) * 0.3;
      
      // More pronounced tilting
      group.current.rotation.x = Math.sin(time.current * 0.8) * 0.2;
      group.current.rotation.z = Math.cos(time.current * 0.7) * 0.2;

      // Add some scale pulsing
      const scale = 1 + Math.sin(time.current * 3) * 0.05;
      group.current.scale.set(scale, scale, scale);
    }

    // Rotate dollar symbol independently
    if (dollarRef.current) {
      dollarRef.current.rotation.y = -group.current.rotation.y; // Counter-rotate to stay readable
    }
  });

  return (
    <group ref={group} {...props}>
      {/* Main coin body with improved materials */}
      <Cylinder args={[1, 1, 0.2, 64]} position={[0, 0, 0]}>
        <meshMatcapMaterial
          matcap={metalTexture}
          metalness={1}
          roughness={0.1}
        />
      </Cylinder>
      
      {/* Embossed ring */}
      <Cylinder args={[0.85, 0.85, 0.21, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#DAA520"
          metalness={0.9}
          roughness={0.2}
          envMapIntensity={2}
        />
      </Cylinder>

      {/* Edge details */}
      <Cylinder args={[1.02, 1.02, 0.18, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#FFD700"
          metalness={1}
          roughness={0.1}
          transparent
          opacity={0.4}
        />
      </Cylinder>

      {/* Ridged edge effect */}
      {Array.from({ length: 32 }).map((_, i) => (
        <Cylinder
          key={i}
          args={[1.03, 1.03, 0.02, 8]}
          position={[0, 0, 0]}
          rotation={[0, (Math.PI * 2 * i) / 32, 0]}
        >
          <meshStandardMaterial
            color="#B8860B"
            metalness={0.9}
            roughness={0.3}
          />
        </Cylinder>
      ))}

      {/* Front face dollar symbol */}
      <group ref={dollarRef} position={[0, 0, 0.12]}>
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.5}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelSegments={5}
          >
            $
            <meshStandardMaterial
              color="#DAA520"
              metalness={0.8}
              roughness={0.2}
              envMapIntensity={2}
            />
          </Text3D>
        </Center>
      </group>

      {/* Back face AWC text */}
      <group position={[0, 0, -0.12]} rotation={[0, Math.PI, 0]}>
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.3}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelSegments={5}
          >
            AWC
            <meshStandardMaterial
              color="#DAA520"
              metalness={0.8}
              roughness={0.2}
              envMapIntensity={2}
            />
          </Text3D>
        </Center>
      </group>
    </group>
  );
}