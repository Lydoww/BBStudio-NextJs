'use client';

import { useState } from 'react';
import Image from 'next/image';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  sizes,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`transition-all duration-700 ${
        isLoading ? 'blur-xl opacity-80' : 'blur-0 opacity-100'
      } ${className}`}
      priority={priority}
      sizes={sizes}
      onLoad={() => setIsLoading(false)}
      onError={() => setIsLoading(false)}
      {...props}
    />
  );
};

export default OptimizedImage;