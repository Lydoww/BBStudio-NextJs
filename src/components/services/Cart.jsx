import { Plus, X } from 'lucide-react';

const Cart = ({
  title,
  description,
  listHeader,
  list,
  isExpanded,
  onToggle,
}) => {
  return (
    <div
      className={`flex flex-col text-left border border-black rounded-lg shadow-md p-4 sm:p-6 pb-12 sm:pb-16 w-full max-w-sm sm:w-80 transition-all duration-700 ease-in-out ${
        isExpanded
          ? 'bg-[var(--color-blue)] border-hidden relative z-20 shadow-2xl min-h-[400px] sm:min-h-[480px]'
          : 'relative z-10 min-h-[200px] sm:min-h-[256px]'
      }`}
    >
      <h3
        className={`text-lg sm:text-xl mb-2 sm:mb-3 ${
          isExpanded ? 'text-[var(--color-cream)]' : 'text-[#5B4739]'
        }`}
      >
        {title}
      </h3>

      <p
        className={`mb-3 sm:mb-4 font-light! text-base! leading-relaxed ${
          isExpanded ? 'text-[var(--color-cream)]!' : 'text-[#5B4739]'
        }`}
      >
        {description}
      </p>

      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <h4
          className={`font-bold mb-2 sm:mb-3 text-sm sm:text-base ${
            isExpanded ? 'text-[var(--color-cream)]' : 'text-[#5B4739]'
          }`}
        >
          {listHeader}
        </h4>
        <ul
          className={`list-disc ml-4 sm:ml-5 mb-4 text-sm sm:text-base ${
            isExpanded ? 'text-[var(--color-cream)]' : 'text-[#5B4739]'
          }`}
        >
          {list.map((item, idx) => (
            <li key={idx} className='mb-1 leading-relaxed'>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onToggle}
        className={`absolute bottom-3 sm:bottom-4 right-3 sm:right-4 p-1.5 sm:p-2 rounded-full cursor-pointer group hover:bg-[var(--color-blue)] hover:border-none transition-all duration-300 ${
          isExpanded
            ? 'border border-[var(--color-cream)]'
            : 'border border-black'
        }`}
        aria-label={isExpanded ? 'Réduire' : 'Développer'}
      >
        {isExpanded ? (
          <X
            size={14}
            className='text-[var(--color-cream)] group-hover:text-white transition-colors duration-300'
          />
        ) : (
          <Plus
            size={14}
            className='text-black group-hover:text-white transition-colors duration-300'
          />
        )}
      </button>
    </div>
  );
};

export default Cart;
