'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    document.body.setAttribute('data-page', '404');

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      document.body.removeAttribute('data-page');
    };
  }, []);

  return (
    <div
      className='min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${isMobile ? '/mobile-bg.jpg' : '/bg.jpg'})`,
      }}
    >
      <div className='text-center max-w-md mx-auto rounded-lg p-8 '>
        <h2 className='text-2xl font-semibold text-[var(--color-blue)]'>
          Oops!
        </h2>
        <h2 className='text-xl font-semibold text-[var(--color-blue)] mb-4'>
          Page not found
        </h2>
        <div className='space-y-4'>
          <Link
            href='/'
            className='inline-block bg-[var(--color-cream)] text-[var(--color-blue)] px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-medium hover:scale-105 transition-transform duration-300'
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
