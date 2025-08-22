'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const handleClick = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`py-4  lg:py-8 fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled && !isMenuOpen
          ? 'bg-[var(--color-cream)]/60 backdrop-blur-sm shadow-md'
          : isMenuOpen
          ? 'bg-[var(--color-cream)] shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
        <nav
          aria-label='Main navigation'
          className='flex items-center justify-between'
        >
          <a href='#home' className='flex-shrink-0'>
            <img
              src='/logo-BBS.png'
              alt='logo of bright brand studio'
              className={`transition-all duration-300 ${
                isScrolled ? 'w-16 sm:w-20 lg:w-32' : 'w-32 sm:w-36 lg:w-60'
              }`}
            />
          </a>

          {/* Desktop Links */}
          <div className='hidden lg:flex items-center space-x-6 xl:space-x-8'>
            <ul className='flex gap-2'>
              <li className=' px-4 py-1 font-semibold text-[var(--color-blue)] hover:scale-105 transition-all duration-300 rounded-2xl border border-transparent hover:border-[var(--color-blue)] hover:shadow-[0_0_20px_rgba(43,89,195,0.3)]'>
                <Anchor label='Services' target='services' />
              </li>
              <li className='px-4 py-1 font-semibold text-[var(--color-blue)] hover:scale-105 transition-all duration-300 rounded-2xl border border-transparent hover:border-[var(--color-blue)] hover:shadow-[0_0_20px_rgba(43,89,195,0.3)]'>
                <Anchor label='About me' target='about' />
              </li>
              <li className='px-4 py-1 font-semibold text-[var(--color-blue)] hover:scale-105 transition-all duration-300 rounded-2xl border border-transparent hover:border-[var(--color-blue)] hover:shadow-[0_0_20px_rgba(43,89,195,0.3)]'>
                <Anchor label='Portfolio' target='portfolio' />
              </li>
              <li className='px-4 py-1 font-semibold text-[var(--color-blue)] hover:scale-105 transition-all duration-300 rounded-2xl border border-transparent hover:border-[var(--color-blue)] hover:shadow-[0_0_20px_rgba(43,89,195,0.3)]'>
                <Anchor label='Contact' target='footer' />
              </li>
            </ul>

            {/* Icons */}
            <div className='flex space-x-3 xl:space-x-4'>
              <a
                href='https://www.linkedin.com/in/audrey-meaulard/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn profile of Audrey'
                className='p-1'
              >
                <img
                  src='/linkedin.png'
                  alt='LinkedIn'
                  width={30}
                  height={30}
                  className='hover:scale-105 transition-transform'
                />
              </a>
              <a
                href='mailto:audrey@brightbrandstudio.com.au'
                aria-label='Send email to Audrey'
                className='p-1'
              >
                <img
                  src='/email.png'
                  alt='Email'
                  width={30}
                  height={30}
                  className='hover:scale-105 transition-transform'
                />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className='lg:hidden p-2 text-[#5B4739] rounded-lg hover:bg-slate-200 transition-colors'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className='flex flex-col  rounded-lg shadow-lg'>
            <MobileAnchor
              label='Services'
              target='services'
              onClick={handleClick}
            />
            <MobileAnchor
              label='About me'
              target='about'
              onClick={handleClick}
            />
            <MobileAnchor
              label='Portfolio'
              target='portfolio'
              onClick={handleClick}
            />
            <MobileAnchor
              label='Contact'
              target='footer'
              onClick={handleClick}
            />

            {/* Mobile Icons */}
            <div className='flex justify-center space-x-4 pt-6 mt-4'>
              <a
                href='https://linkedin.com/in/audrey'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn profile of Audrey'
                className='p-2'
              >
                <img
                  src='/linkedin.png'
                  alt='LinkedIn'
                  width={28}
                  height={28}
                />
              </a>
              <a
                href='mailto:audrey@brightbrandstudio.com.au'
                aria-label='Send email to Audrey'
                className='p-2'
              >
                <img src='/email.png' alt='Email' width={28} height={28} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Anchor = ({ label, target }) => {
  return (
    <a href={`#${target}`} className='text-lg font-medium  transition-colors'>
      {label}
    </a>
  );
};

const MobileAnchor = ({ label, target, onClick }) => {
  return (
    <button
      onClick={() => onClick(target)}
      className='py-3 text-center text-lg font-semibold text-[var(--color-blue)]'
    >
      {label}
    </button>
  );
};

export default Navbar;
