'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const BackgroundClient = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 500);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <div className='absolute inset-0'>
        <Image
          src={isMobile ? '/mobile-bg.jpg' : '/bg.jpg'}
          alt='Background image showing strategy and branding workspace'
          fill
          className={`object-cover transition-all duration-700 ${
            isLoading ? 'blur-xl opacity-80' : 'blur-0 opacity-100'
          }`}
          priority
          sizes='100vw'
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />

        {isLoading && (
          <div className='absolute inset-0 bg-gradient-to-br from-gray-800/30 via-gray-600/20 to-gray-700/40 animate-pulse' />
        )}
      </div>
    </>
  );
};

export default BackgroundClient;