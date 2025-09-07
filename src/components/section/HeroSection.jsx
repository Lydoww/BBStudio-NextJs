import Background from '../layout/Background';
import HomeHero from '../home/HomeHero';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import PortfolioContainer from '../portfolio/PortfolioContainer';
import ReviewsContainer from '../review/ReviewsContainer';
import FooterCompo from '../footer/FooterCompo';

const HomeSection = () => {
  return (
    <>
      <Background>
        <div id='home' className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
          <HomeHero />
        </div>
      </Background>

      <section
        id='services'
        className='scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24'
      >
        <ServicesSection />
      </section>

      <section
        id='about'
        className='scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24'
      >
        <AboutSection />
      </section>

      <section
        id='portfolio'
        className='scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24'
      >
        <div className='min-h-screen bg-[#F5F0E9] py-12 sm:py-12 lg:py-16'>
          <div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-center text-4xl! md:text-6xl! lg:text-7xl! font-gulfs text-[var(--color-brown)]! mb-8 sm:mb-12'>
              PORTFOLIO
            </h1>
            <div className='flex justify-center'>
              <PortfolioContainer />
            </div>
          </div>
        </div>
      </section>

      <section
        id='review'
        className='scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24'
      >
        <ReviewsContainer />
      </section>

      <section
        id='Footer'
        className='scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24'
      >
        <FooterCompo />
      </section>
    </>
  );
};

export default HomeSection;
