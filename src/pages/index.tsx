import { OrbitControls } from '@react-three/drei';
import type { ThreeElements } from '@react-three/fiber';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

function Box(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh | null>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((_, delta) => {
    if (ref.current === null) return;

    ref.current.rotation.x += delta;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export default function Home() {
  return (
    <main>
      <Canvas style={{ height: '100vh' }}>
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </main>
  );
}
