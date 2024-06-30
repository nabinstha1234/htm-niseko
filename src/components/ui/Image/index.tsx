'use client';

import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/utils/Helpers';

const CustomImage = ({
  imageSrc,
  fill = false,
  alt,
  className,
  priority = false,
  effect,
  sizes,
}: {
  imageSrc: string;
  fill?: boolean;
  alt: string;
  className?: string;
  priority?: boolean;
  effect?: 'zoom';
  sizes?: string;
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Image
      fill={fill}
      className={cn(
        `transition duration-300`,
        effect === 'zoom' && 'scale-95',
        isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0',
        className,
      )}
      src={imageSrc}
      alt={alt}
      onLoad={() => setIsImageLoaded(true)}
      priority={priority}
      sizes={sizes}
    />
  );
};

export default CustomImage;
