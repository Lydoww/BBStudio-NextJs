import AboutClient from '@/components/about/AboutClient';

const AboutSection = () => {
  return (
    <div className='bg-[var(--color-blue)]'>
    
      <div className='sr-only'>
        <h2>About Audrey Meaulard</h2>
        <p>Hi, I'm Audrey</p>
        <p>
          After several years working in ethical fashion and brand marketing —
          from co-founding a circular fashion brand to leading strategy for
          sustainable concept stores — I realized that most mission-driven
          brands don't need more content. They need clarity.
        </p>
        <p>
          I created a strategy framework to help you root your vision, align
          your voice, and grow without compromising your values.
        </p>
      </div>

      <AboutClient />
    </div>
  );
};

export default AboutSection;
