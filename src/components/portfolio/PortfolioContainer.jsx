import { portfolioData } from './portfolioData';
import CarouselClient from './CarouselClient';

const PortfolioContainer = () => {
  return (
    <>
      <div className='sr-only'>
        <h3>Portfolio Projects</h3>
        {portfolioData.map((project, idx) => (
          <article key={idx}>
            <h4>{project.title}</h4>
            <p>Services: {Object.values(project.labels).join(', ')}</p>
            <p>{project.description}</p>
          </article>
        ))}
      </div>

      <CarouselClient portfolioData={portfolioData} />
    </>
  );
};

export default PortfolioContainer;