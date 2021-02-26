import React from 'react';
import { Link } from 'react-router-dom';

import { MainButton } from './Button.style';

const Button = ({ children, type, ...otherProps }) => {
  return (
    <MainButton as={type === 'link' ? Link : 'button'} {...otherProps}>
      {children}
    </MainButton>
  );
};

export default Button;
