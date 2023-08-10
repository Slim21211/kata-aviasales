import React from 'react';

import logo from '../../assets/Logo.svg';
import './header.scss';

export const Header = () => {
  return (
    <div>
      <img className="logo" src={logo} />
    </div>
  );
};
