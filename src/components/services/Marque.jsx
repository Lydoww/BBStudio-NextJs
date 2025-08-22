import React from 'react';

function Marque() {
  const text = 'A business world where conscious brands leads the way.';

  return (
    <div
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        color: '#F98948',
        fontFamily: 'Montserrat',
      }}
      className='h-[50px] sm:h-[60px] md:h-[80px] lg:h-[100px] text-responsive blur-edges'
    >
      <div
        style={{
          display: 'inline-flex',
          animation: 'marquee 20s linear infinite',
        }}
        className='animate-[marquee_20s_linear_infinite] sm:animate-[marquee_15s_linear_infinite] md:animate-[marquee_12s_linear_infinite] lg:animate-[marquee_10s_linear_infinite]'
      >
        <div style={{ whiteSpace: 'nowrap' }}>{text}&nbsp;&nbsp;&nbsp;</div>
        <div style={{ whiteSpace: 'nowrap' }}>{text}&nbsp;&nbsp;&nbsp;</div>
      </div>
    </div>
  );
}

export default Marque;
