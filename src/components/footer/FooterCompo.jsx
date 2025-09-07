'use client';

import React from 'react';

const FooterCompo = () => {
  return (
    <footer
      id='footer'
      className='overflow-hidden relative min-h-[75vh] md:min-h-[70vh] lg:min-h-[80vh]'
      style={{
        backgroundColor: 'var(--color-blue)',
      }}
    >
      <div className='pt-8 px-6 xl:px-12 2xl:px-16 h-full relative'>
        <div className='flex justify-between items-start'>
          <div className='flex-1 max-w-2xl 2xl:max-w-3xl'>
            <div className='relative group cursor-pointer mb-4 inline-block'>
              <div
                className='absolute bottom-1 left-1/2 w-0 h-1 hidden md:block md:group-hover:w-full transition-all duration-800 ease-out'
                style={{
                  backgroundColor: 'var(--color-orange)',
                  transform: 'translateX(-50%)',
                }}
              ></div>
              <h1
                className='relative z-10 font-bold leading-tight text-[41px]! md:text-[37px]! lg:text-[59px]!'
                style={{
                  color: 'var(--color-cream)',
                  fontFamily: 'var(--font-chango)',
                  letterSpacing: '-0.09em',
                }}
              >
                Let's work together
              </h1>
            </div>
            <p
              className='leading-relaxed'
              style={{
                color: 'var(--color-cream)',
                fontFamily: 'var(--font-montserrat)',
                fontSize: 'clamp(16px, 1.8vw, 23px)',
                fontWeight: 400,
                maxWidth: '600px',
              }}
            >
              Let's chat about your goals and how I can help your business make
              a bigger impact.
            </p>
            <div className='flex gap-4 mt-6 md:hidden items-center'>
              <a
                href='https://www.linkedin.com/in/audrey-meaulard/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/linkedin.png'
                  alt='linkedin'
                  width={30}
                  height={30}
                />
              </a>
              <a
                href='https://www.airtasker.com/users/b0e9cf5d5fef-p-32632875/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/tasker.png' alt='airtasker' width={24} height={24} />
              </a>
              <a href='mailto:audrey@brightbrandstudio.com.au'>
                <img src='/email.png' alt='email' width={30} height={30} />
              </a>
            </div>
          </div>

          <div className='flex flex-col gap-4 ml-8'>
            <a
              href='https://www.linkedin.com/in/audrey-meaulard/'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden md:block px-6 py-3 rounded-2xl transition-all duration-300 cursor-pointer whitespace-nowrap no-underline '
              style={{
                border: '1px solid var(--color-cream)',
                backgroundColor: 'transparent',
                color: 'var(--color-cream)',
                fontFamily: 'var(--font-montserrat)',
                fontSize: '14px',
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-cream)';
                e.target.style.color = 'var(--color-blue)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--color-cream)';
              }}
            >
              LinkedIn
            </a>
            <a
              href='https://www.airtasker.com/users/b0e9cf5d5fef-p-32632875/'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden md:block px-6 py-3 rounded-2xl transition-all duration-300 cursor-pointer whitespace-nowrap no-underline '
              style={{
                border: '1px solid var(--color-cream)',
                backgroundColor: 'transparent',
                color: 'var(--color-cream)',
                fontFamily: 'var(--font-montserrat)',
                fontSize: '14px',
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-cream)';
                e.target.style.color = 'var(--color-blue)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--color-cream)';
              }}
            >
              AirTasker
            </a>
          </div>
        </div>

        <div className='flex flex-col mt-12'>
          <p
            style={{
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-montserrat)',
              fontSize: '14px',
              fontWeight: 400,
              marginBottom: '4px',
            }}
          >
            © 2025
          </p>
          <p
            style={{
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-montserrat)',
              fontSize: '14px',
              fontWeight: 400,
            }}
          >
            Designed by Audrey and developed by{' '}
            <a
              href='https://github.com/Lydoww'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                color: 'var(--color-cream)',
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--color-orange)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--color-cream)';
              }}
            >
              Alexis Helm
            </a>
          </p>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 pointer-events-none'>
        <img
          src='/BBS.png'
          alt='Bright Brand Studio logo and branding elements'
          className='w-full h-auto object-contain object-bottom'
          style={{
            display: 'block',
            maxHeight: '40vh',
          }}
        />
      </div>
    </footer>
  );
};

export default FooterCompo;
