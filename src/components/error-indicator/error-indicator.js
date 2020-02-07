import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img src={icon} alt='error icon'/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone trrribly wrong
      </span>
      <span>
        (but we allready sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;