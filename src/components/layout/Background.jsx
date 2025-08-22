'use client';

import { useState, useEffect } from 'react';

const Background = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div
      className='min-h-screen h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden'
      style={{
        backgroundImage: `url(${isMobile ? '/mobile-bg.jpg' : '/bg.jpg'})`,
      }}
    >
      {children}
    </div>
  );
};

export default Background;
