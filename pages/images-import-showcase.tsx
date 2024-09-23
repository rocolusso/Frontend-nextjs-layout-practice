import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';

export const getStaticProps = (async () => {
  const imageDirectory = path.join(process.cwd(), '/public/images');
  const imageFilenames = await fs.readdir(imageDirectory);

  return { props: { imageFilenames } };
});

export default function ImagesImportShowcase({ imageFilenames }: { imageFilenames: string[] }) {
  return (
    <div>
      {imageFilenames.map((imageFilename) => (
        <div>
          <Image width={500} height={500} src={`/images/${imageFilename}`} alt={imageFilename} />
        </div>
      ))}
    </div>
  );
}
