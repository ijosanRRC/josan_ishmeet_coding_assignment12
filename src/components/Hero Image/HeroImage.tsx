import React from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, caption }) => {
  return (
    <div>
      <img src={src} alt={alt} />
      {caption && <p>{caption}</p>}
    </div>
  );
};

export default HeroImage;
