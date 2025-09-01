import { useState } from 'react';
import Image from 'next/image';

const Cart = ({ title, labels, description, image, alt, isFirst = false }) => {
  const arrayLabels = Object.values(labels);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='flex flex-col lg:flex-row border border-[var(--color-brown)] rounded-[15px] shadow'>
      <div className='w-full lg:w-1/3 px-4 '>
        <h3 className='text-2xl sm:text-3xl lg:text-[34px] color-[var(--color-brown)] mb-3 sm:mb-4 mt-2 xl:mt-4'>
          {title}
        </h3>

        <ul className='flex flex-wrap gap-2 sm:mb-4'>
          {arrayLabels.map((label, index) => {
            const adaptLabels = label.replace(/\s+/g, '-').toLowerCase();
            const addLabel = 'label-' + adaptLabels;

            return (
              <li className={`${addLabel} text-xs sm:text-sm`} key={index}>
                {label}
              </li>
            );
          })}
        </ul>

        <div className='text-justify lg:mb-8 xl:mb-0 text-sm sm:text-base hidden lg:block'>
          {description.split('\n\n').map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-3 sm:mt-4' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className='w-full lg:w-2/3 p-4 lg:p-6 lg:flex lg:items-center'>
        <div className='relative w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[550px] xl:max-h-[600px] rounded-[15px] overflow-hidden'>
          {isLoading && (
            <div className='absolute inset-0 flex items-center justify-center  rounded-[15px] z-10'>
              <div className='animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-[var(--color-orange)]'></div>
            </div>
          )}

          <Image
            className={`object-contain rounded-[15px] transition-all duration-500 hover:scale-105 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            src={image}
            alt={
              alt ||
              `${title} - Portfolio project showcasing ${arrayLabels.join(
                ', '
              )} work by Audrey Meaulard`
            }
            width={800}
            height={600}
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 800px'
            priority={isFirst}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        </div>

        <div className='text-justify text-sm sm:text-base mt-4 lg:hidden'>
          {description.split('\n\n').map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-3 sm:mt-4' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
