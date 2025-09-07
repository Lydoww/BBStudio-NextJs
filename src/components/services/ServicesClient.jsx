'use client';

import { useState } from 'react';
import Cart from './Cart';

function splitIntoColumns(array, numColumns) {
  const columns = Array.from({ length: numColumns }, () => []);
  array.forEach((item, idx) => {
    columns[idx % numColumns].push(item);
  });
  return columns;
}

const ServicesClient = ({ services }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (serviceIdx) => {
    if (expandedCard === serviceIdx) {
      setExpandedCard(null);
    } else {
      setExpandedCard(serviceIdx);
    }
  };

  return (
    <div className='m-4 mt-12'>
      {/* Mobile: 1 colonne */}
      <div className='flex md:hidden flex-col gap-6 items-center'>
        {services.map((service, idx) => (
          <Cart
            key={idx}
            title={service.title}
            description={service.description}
            listHeader={service.listHeader}
            list={service.list}
            isExpanded={expandedCard === idx}
            onToggle={() => handleToggle(idx)}
          />
        ))}
      </div>

      {/* Tablette: 2 colonnes */}
      <div className='hidden md:flex lg:hidden gap-6 justify-center'>
        {splitIntoColumns(services, 2).map((column, colIdx) => (
          <div key={colIdx} className='flex flex-col gap-6 items-center flex-1'>
            {column.map((service, cardIdx) => {
              const serviceIdx = services.findIndex(
                (s) => s.title === service.title
              );
              return (
                <Cart
                  key={cardIdx}
                  title={service.title}
                  description={service.description}
                  listHeader={service.listHeader}
                  list={service.list}
                  isExpanded={expandedCard === serviceIdx}
                  onToggle={() => handleToggle(serviceIdx)}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Desktop: 3 colonnes */}
      <div className='hidden lg:flex gap-6 justify-center'>
        {splitIntoColumns(services, 3).map((column, colIdx) => (
          <div key={colIdx} className='flex flex-col gap-6 items-center flex-1'>
            {column.map((service, cardIdx) => {
              const serviceIdx = services.findIndex(
                (s) => s.title === service.title
              );
              return (
                <Cart
                  key={cardIdx}
                  title={service.title}
                  description={service.description}
                  listHeader={service.listHeader}
                  list={service.list}
                  isExpanded={expandedCard === serviceIdx}
                  onToggle={() => handleToggle(serviceIdx)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesClient;
