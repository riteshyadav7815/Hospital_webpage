"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

/**
 * SAFE Heart Component (stable for React Three Fiber)
 */
function Heart() {
  const groupRef = useRef<THREE.Group>(null);

  // ✅ Stable geometry (created once)
  const geometry = useMemo(() => {
    const heartShape = new THREE.Shape();

    const x = 0;
    const y = 0;

    heartShape.moveTo(x + 5, y + 5);
    heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y + 0, x + 0, y + 0);
    heartShape.bezierCurveTo(x - 6, y + 0, x - 6, y + 7, x - 6, y + 7);
    heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
    heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
    heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y + 0, x + 9, y + 0);
    heartShape.bezierCurveTo(x + 6, y + 0, x + 5, y + 5, x + 5, y + 5);

    const geo = new THREE.ExtrudeGeometry(heartShape, {
      depth: 1,
      bevelEnabled: true,
      bevelThickness: 0.2,
      bevelSize: 0.1,
      bevelSegments: 2,
    });

    geo.scale(0.25, 0.25, 0.25);
    geo.center();

    return geo;
  }, []);

  // Animation loop
  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const t = clock.getElapsedTime();

    groupRef.current.rotation.y += 0.01;
    groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.25;

    const scale = 1 + Math.sin(t * 2) * 0.08;
    groupRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={groupRef}>
      {/* Heart mesh */}
      <mesh geometry={geometry}>
        <meshStandardMaterial
          color="#00c6ff"
          emissive="#0099cc"
          emissiveIntensity={0.6}
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshBasicMaterial color="#00c6ff" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

/**
 * 3D Scene
 */
export function Heart3DScene() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#00c6ff" />

        {/* Model */}
        <Heart />

        {/* Environment */}
        <Environment preset="city" />

        {/* Controls */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
}

export default Heart3DScene;