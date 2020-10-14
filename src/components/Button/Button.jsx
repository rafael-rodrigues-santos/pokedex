import React from 'react';

import './style.css';

const Button = ({ text, type, ...props }) => {
  return (
    <div>
      <button type={type} {...props}>
        {text}
      </button>
    </div>
  );
};

export default Button;
