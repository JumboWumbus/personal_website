
import React from 'react';
//import Image from 'next/image';

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
}

const ImageCaption: React.FC<ImageWithCaptionProps> = ({ src, alt, caption }) => {

  return (
    <figure className="flex flex-col items-center ">
      <picture>
        <img src={src} alt={alt} className="relative w-full max-w-full right-auto" />
      </picture>
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default ImageCaption;
