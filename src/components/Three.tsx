import { OrbitControls, useCubeTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useMemo } from 'react';
import * as THREE from 'three';

const RADIUS = 1;
const SEGMENTS = 128;
const THICKNESS = RADIUS / 5;

const formatImageData = (imageData: ImageData) => {
  const data = new Uint8Array(imageData.data.buffer);
  for (let i = 0; i < imageData.width ** 2; i += 1) {
    // eslint-disable-next-line max-depth
    if (data[i * 4 + 3] === 255) data[i * 4 + 3] = data[i * 4] === 0 ? 120 : 0;
  }
  return data;
};

export const Three = (props: { imageData: ImageData }) => {
  const texture = useCubeTexture(
    ['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg'],
    { path: './envMap/' }
  );
  const dataTexture = useMemo(
    () => new THREE.DataTexture(formatImageData(props.imageData)),
    [props.imageData]
  );
  const material = useMemo(() => {
    return <meshStandardMaterial color={0xffc355} envMap={texture} roughness={0.8} metalness={1} />;
  }, [texture]);
  const dataMaterial = useMemo(() => {
    return (
      <meshStandardMaterial
        color={0xffc355}
        envMap={texture}
        bumpMap={dataTexture}
        bumpScale={0.05}
        roughness={0.8}
        metalness={1}
      />
    );
  }, [texture, dataTexture]);

  useEffect(() => {
    dataTexture.needsUpdate = true;
  }, [dataTexture]);

  return (
    <Canvas style={{ height: '100%' }}>
      <directionalLight color={0xffffff} intensity={1.25} position={[0, 0.5, 2]} />
      <directionalLight color={0xffffff} intensity={1.25} position={[0, 0.5, -2]} />
      <mesh position-z={THICKNESS / 2}>
        <ringGeometry args={[RADIUS, RADIUS + THICKNESS / 2, SEGMENTS, 1]} />
        {material}
      </mesh>
      <mesh position-z={-THICKNESS / 2} rotation-y={Math.PI}>
        <ringGeometry args={[RADIUS, RADIUS + THICKNESS / 2, SEGMENTS, 1]} />
        {material}
      </mesh>
      <mesh rotation-x={Math.PI / 2}>
        <cylinderGeometry
          args={[RADIUS + THICKNESS / 2, RADIUS + THICKNESS / 2, THICKNESS, SEGMENTS, 1, true]}
        />
        {material}
      </mesh>
      <mesh rotation-x={Math.PI / 2}>
        <cylinderGeometry args={[RADIUS, RADIUS, THICKNESS, SEGMENTS, 1, true]} />
        <meshStandardMaterial
          color={0xffc355}
          envMap={texture}
          roughness={0.8}
          metalness={1}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh position-z={THICKNESS / 4}>
        <circleGeometry args={[RADIUS + THICKNESS / 4, SEGMENTS]} />
        {dataMaterial}
      </mesh>
      <mesh position-z={-THICKNESS / 4} rotation-y={Math.PI}>
        <circleGeometry args={[RADIUS + THICKNESS / 4, SEGMENTS]} />
        {dataMaterial}
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};
