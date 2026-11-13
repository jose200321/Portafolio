import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function HologramLaptop({ darkMode }) {
  const laptopGroup = useRef();
  const particlesRef = useRef();

  const laptopPointsGeometry = useMemo(() => {
    const positions = [];

    const addBoxPoints = (w, h, d, cx, cy, cz, rx = 0, ry = 0, rz = 0, density = 1800) => {
      const euler = new THREE.Euler(rx, ry, rz);
      const vec = new THREE.Vector3();

      for (let i = 0; i < density; i++) {
        const edgeBias = () =>
          Math.random() > 0.35
            ? (Math.random() > 0.5 ? 1 : -1) * (0.92 + Math.random() * 0.08)
            : Math.random() * 2 - 1;

        const x = (w / 2) * edgeBias();
        const y = (h / 2) * (Math.random() * 2 - 1);
        const z = (d / 2) * edgeBias();

        vec.set(x, y, z).applyEuler(euler);
        positions.push(vec.x + cx, vec.y + cy, vec.z + cz);
      }
    };

    // Base
    addBoxPoints(3.0, 0.08, 2.0, 0, 0, 0, 0, 0, 0, 2600);

    // Teclado
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 14; col++) {
        const kx = -1.2 + col * 0.185;
        const kz = -0.75 + row * 0.16;
        for (let p = 0; p < 6; p++) {
          positions.push(
            kx + (Math.random() - 0.5) * 0.12,
            0.05,
            kz + (Math.random() - 0.5) * 0.1
          );
        }
      }
    }

    // Trackpad
    addBoxPoints(0.85, 0.01, 0.5, 0, 0.045, 0.62, 0, 0, 0, 350);

    // Pantalla
    const screenAngle = -0.25;
    const screenPivotY = 0.05;
    const screenPivotZ = -0.98;
    const screenHeight = 1.95;

    const centerY = screenPivotY + Math.cos(screenAngle) * (screenHeight / 2);
    const centerZ = screenPivotZ + Math.sin(screenAngle) * (screenHeight / 2);
    addBoxPoints(3.0, screenHeight, 0.05, 0, centerY, centerZ, screenAngle, 0, 0, 3200);
    addBoxPoints(2.72, 1.7, 0.02, 0, centerY, centerZ + 0.02, screenAngle, 0, 0, 1800);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geometry;
  }, []);

  const ambientParticlesGeometry = useMemo(() => {
    const count = 70;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4.8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3.8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4.0;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (laptopGroup.current) {
      laptopGroup.current.position.y = Math.sin(t * 1.5) * 0.08;
      laptopGroup.current.rotation.y = Math.sin(t * 0.6) * 0.2 - 0.35;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
    }
  });

  // Color dinámico según el tema
  const laptopColor = darkMode ? '#fafafa' : '#0a0a0a';
  const particleColor = darkMode ? '#a3a3a3' : '#262626';

  return (
    <group position={[0, 0, 0]}>
      <group ref={laptopGroup} scale={[0.88, 0.88, 0.88]}>
        <points geometry={laptopPointsGeometry}>
          <pointsMaterial color={laptopColor} size={0.026} transparent opacity={0.88} sizeAttenuation />
        </points>
      </group>

      <points ref={particlesRef} geometry={ambientParticlesGeometry}>
        <pointsMaterial color={particleColor} size={0.035} transparent opacity={0.45} sizeAttenuation />
      </points>
    </group>
  );
}

export default function Laptop3D({ darkMode = false }) {
  return (
    <div className="w-full h-[400px] md:h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0.3, 6.2], fov: 45 }}>
        <HologramLaptop darkMode={darkMode} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.7}
        />
      </Canvas>
    </div>
  );
}