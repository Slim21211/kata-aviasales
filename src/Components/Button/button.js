import React from 'react';

import classes from './button.module.scss';

export const Button = ({ onClick }) => {
  const { 'show-tickets': showTickets } = classes;
  return (
    <button className={showTickets} onClick={() => onClick()}>
      Показать еще 5 билетов!
    </button>
  );
};
