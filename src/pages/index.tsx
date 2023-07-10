import { useCallback, useState } from 'react';
import { Top } from '../components/Top/Top';

export default function Home() {
  const [mode, setMode] = useState<'top' | 'camera' | 'image' | 'three'>('top');
  const [imageData, setImageData] = useState<ImageData>();
  const openCamApp = useCallback(() => {}, []);
  const inputFile = useCallback((imageData: ImageData) => {
    setImageData(imageData);
  }, []);

  return <Top onStart={openCamApp} onInput={inputFile} />;
}
