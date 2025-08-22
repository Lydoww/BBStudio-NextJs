'use client';

import data from './portfolioData';
import Cart from './Cart';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isTabletRange, setIsTabletRange] = useState(false);
  const [showHand, setShowHand] = useState(true);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragEndX, setDragEndX] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024);
      setIsTabletRange(width >= 1024 && width <= 1150);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px',
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);

      const rect = carouselRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isCurrentlyVisible = rect.top < windowHeight && rect.bottom > 0;

      if (isCurrentlyVisible && !isInView) {
        setIsInView(true);
      }
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, [isInView]);

  useEffect(() => {
    if (isMobile && isInView) {
      setShowHand(true);
      const timer = setTimeout(() => {
        setShowHand(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isMobile, isInView]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(currentIndex >= data.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
  };

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    setDragEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;

    const swipeDistance = dragStartX - dragEndX;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      setShowHand(false);

      if (swipeDistance > 0) {
        // Swipe vers la gauche = next
        setDirection(1);
        setCurrentIndex(currentIndex >= data.length - 1 ? 0 : currentIndex + 1);
      } else {
        // Swipe vers la droite = prev
        setDirection(-1);
        setCurrentIndex(
          currentIndex === 0 ? data.length - 1 : currentIndex - 1
        );
      }
    }

    setDragStartX(0);
    setDragEndX(0);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const handVariants = {
    initial: {
      opacity: 0,
      scale: 0.3,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.3,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  };

  const getButtonClasses = (side) => {
    const baseClasses =
      'absolute top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center hover:scale-110 duration-300 ease-in-out transition-transform cursor-pointer bg-white/80 backdrop-blur-sm shadow-lg z-10';

    if (side === 'left') {
      return isTabletRange
        ? `${baseClasses} left-2`
        : `${baseClasses} left-2 sm:left-4 lg:left-[-110px]`;
    } else {
      return isTabletRange
        ? `${baseClasses} right-2`
        : `${baseClasses} right-2 sm:right-4 lg:right-[-110px]`;
    }
  };

  const getContainerClasses = () => {
    if (isTabletRange) {
      return 'relative max-w-[1043px] mx-auto px-20';
    }
    return 'relative max-w-[1043px] mx-auto px-4 sm:px-8 lg:px-0';
  };

  return (
    <div ref={carouselRef} className={getContainerClasses()}>
      {!isMobile && (
        <>
          <button onClick={prevSlide} className={getButtonClasses('left')}>
            <svg
              className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>

          <button onClick={nextSlide} className={getButtonClasses('right')}>
            <svg
              className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </>
      )}

      <div
        className='overflow-hidden relative min-h-[600px] sm:min-h-[500px] md:min-h-[600px] lg:h-auto'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode='wait' custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Cart {...data[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {isMobile && showHand && (
            <motion.div
              variants={handVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='absolute inset-0 flex items-center justify-center pointer-events-none z-20'
            >
              <Image
                src='/hand.png'
                alt='Swipe gesture indicator for mobile navigation'
                width={192}
                height={192}
                className='w-48 h-48 animate-pulse'
                priority={false}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CarouselComponent;
