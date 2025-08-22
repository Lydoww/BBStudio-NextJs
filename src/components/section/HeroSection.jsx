import Background from '../layout/Background';
import HomeHero from '../home/HomeHero';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import ReviewSection from './ReviewSection';
import FooterSection from './FooterSection';

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
        <PortfolioSection />
      </section>
      <section
        id='review'
        className='scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24'
      >
        <ReviewSection />
      </section>

      <section
        id='Footer'
        className='scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24'
      >
        <FooterSection />
      </section>
    </>
  );
};

export default HomeSection;
