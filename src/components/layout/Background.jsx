import BackgroundClient from './BackgroundClient';

const Background = ({ children }) => {
  return (
    <div className='relative min-h-screen h-screen overflow-x-hidden'>
      <noscript>
        <img
          src='/bg.jpg'
          alt='Background image showing strategy and branding workspace'
          style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
        />
      </noscript>
      <BackgroundClient />
      <div className='relative z-10'>{children}</div>
    </div>
  );
};

export default Background;
