import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { Three } from '../Three';
import styles from './top.module.css';

const getImageData = (src: string) =>
  new Promise<ImageData>((resolve) => {
    const image = new Image();
    image.onload = () => {
      const imageLength = Math.min(image.width, image.height);
      const length = Math.min(500, imageLength);
      const canvas = document.createElement('canvas');
      canvas.width = length;
      canvas.height = length;
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      ctx.drawImage(
        image,
        (image.width - imageLength) / 2,
        (image.height - imageLength) / 2,
        imageLength,
        imageLength,
        0,
        0,
        length,
        length
      );
      resolve(ctx.getImageData(0, 0, length, length));
    };
    image.src = src;
  });

export const Top = (props: { onStart: () => void; onInput: (data: ImageData) => void }) => {
  const [imageData, setImageData] = useState<ImageData>();
  const onSelectFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const blob = new Blob([file], { type: file.type });
    const src = URL.createObjectURL(blob);
    await getImageData(src).then(props.onInput);
    URL.revokeObjectURL(src);
  };

  useEffect(() => {
    getImageData('./images/iniad.png').then(setImageData);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>{imageData && <Three imageData={imageData} />}</div>
      <div className={styles.frame}>
        <div className={styles.desc}>Paint !</div>
        <div className={styles.btn} onClick={props.onStart}>
          Camera
        </div>
        <div className={styles.btn}>
          Image
          <input type="file" className={styles.file} accept="image/*" onChange={onSelectFile} />
        </div>
      </div>
    </div>
  );
};
