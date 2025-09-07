import ServicesContainer from '@/components/services/ServicesContainter';
import Marque from '@/components/services/Marque';

const ServicesSection = () => {
  return (
    <main
      aria-labelledby='services-title'
      className='min-h-[calc(100vh-160px)] flex flex-col items-center text-center bg-[#F5F0E9] '
    >
      <Marque />
      <div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8'>
        <h1
          id='services-title'
          className='font-gulfs mt-6 sm:mt-10 text-4xl! md:text-6xl! lg:text-7xl! text-[var(--color-brown)]!'
        >
          SERVICES
        </h1>
        <h3 className='mt-4 sm:mt-6 font-light! max-w-3xl lg:max-w-4xl mx-auto text-base! md:text-2xl! lg:text-2xl! leading-7 text-[#5B4739] px-4'>
          I help australian purpose-led brands clarify their message, refine
          their strategy, and build stronger connections with their audience.
        </h3>
        <a
          href='mailto:audrey@brightbrandstudio.com.au'
          className='mt-6 sm:mt-8 border rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-base font-semibold border-[var(--color-orange)] hover:bg-[var(--color-orange)] text-[var(--color-orange)] hover:scale-105 hover:text-[var(--color-cream)] transition-all cursor-pointer inline-block'
        >
          Let's grow your ethical brand
        </a>
      </div>
      <ServicesContainer />
      <h3 className='text-[41px]! lg:text-[37px]! text-[var(--color-brown)] mb-12 sm:mb-16 lg:mb-20 max-w-4xl sm:max-w-5xl lg:max-w-6xl mt-8 leading-12 font-semibold! px-4 sm:px-6'>
        And all of this, rooted in{' '}
        <span className='italic text-[var(--color-orange)] sm:text-[var(--color-brown)]'>
          ethical
        </span>{' '}
        and{' '}
        <span className='italic text-[var(--color-orange)] sm:text-[var(--color-brown)]'>
          engaged{' '}
        </span>
        values, to build genuine trust with conscious consumers
      </h3>
    </main>
  );
};

export default ServicesSection;
